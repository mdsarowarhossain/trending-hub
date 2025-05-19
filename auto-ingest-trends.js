// --- Automated Trending News Ingestor Bot for Supabase "trends" Table ---
// Run: `node auto-ingest-trends.js`

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { createClient } = require('@supabase/supabase-js');
const Parser = require('rss-parser');
require('dotenv').config();

// --- CONFIG ---
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wjopsouiiibeenxjkxcc.supabase.co';
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb3Bzb3VpaWliZWVueGpreGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1OTAxODgsImV4cCI6MjA2MzE2NjE4OH0.gYbs9yVMj_KF-a_4BoNaOwsBgRyKYq9gRcoJXZz-T4o';
const GNEWS_TOKEN = process.env.GNEWS_TOKEN || '5eac9ae2d4b94da9ad1ceb3305f8c3f4';
const NEWSAPI_TOKEN = process.env.NEWSAPI_TOKEN || 'demo'; // Use your own free NewsAPI.org key if available
const REDDIT_NAMES = ['news', 'worldnews', 'trending', 'popular'];
const RSS_PARSER = new Parser();

const BLOCKED_KEYWORDS = [
  'sex', 'nude', 'porn', 'shoot', 'kill', 'murder', 'violence', 'abuse', 'suicide', 'terror', 'trafficking', 'war', 'gore', 'exploit', 'dead', 'death','erotic','incest'
];

function isSafeContent({ title = '', description = '', content = '' }) {
  const text = `${title} ${description} ${content}`.toLowerCase();
  return !BLOCKED_KEYWORDS.some(word => text.includes(word));
}

// --- GNEWS ---
async function fetchTrendingFromGNews() {
  const GNEWS_ENDPOINT = `https://gnews.io/api/v4/top-headlines?lang=en&token=${GNEWS_TOKEN}&max=40`;
  try {
    const resp = await fetch(GNEWS_ENDPOINT);
    if (!resp.ok) return [];
    const { articles } = await resp.json();
    if (!Array.isArray(articles)) return [];
    return articles.map(a => ({
      title: a.title,
      summary: a.description,
      content: a.content || '',
      image_url: a.image,
      link: a.url,
      published_at: a.publishedAt,
      type: 'trending',
      category: (a.topic || 'General').replace(/[^\w\s-]/g, ''),
      source: a.source?.name || 'GNews',
      is_safe: isSafeContent(a)
    })).filter(post => post.is_safe && post.title && post.link);
  } catch { return []; }
}

// --- NewsAPI.org HEADLINES ---
async function fetchTrendingFromNewsAPI() {
  const NEWSAPI_ENDPOINT = `https://newsapi.org/v2/top-headlines?language=en&pageSize=40&apiKey=${NEWSAPI_TOKEN}`;
  try {
    const resp = await fetch(NEWSAPI_ENDPOINT);
    if (!resp.ok) return [];
    const { articles } = await resp.json();
    if (!Array.isArray(articles)) return [];
    return articles.map(a => ({
      title: a.title,
      summary: a.description,
      content: a.content || '',
      image_url: a.urlToImage,
      link: a.url,
      published_at: a.publishedAt,
      type: 'trending',
      category: a.source?.name || 'NewsAPI',
      source: 'NewsAPI',
      is_safe: isSafeContent({ title: a.title, description: a.description, content: a.content })
    })).filter(post => post.is_safe && post.title && post.link);
  } catch { return []; }
}

// --- REDDIT RSS ---
async function fetchTrendingFromReddit() {
  let allPosts = [];
  for (const name of REDDIT_NAMES) {
    const url = `https://www.reddit.com/r/${name}/top/.rss?t=day&limit=20`;
    try {
      const feed = await RSS_PARSER.parseURL(url);
      const posts = feed.items.map(item => ({
        title: item.title,
        summary: item.contentSnippet,
        content: '',
        image_url: undefined,
        link: item.link,
        published_at: item.pubDate,
        type: 'trending',
        category: `reddit-${name}`,
        source: 'Reddit',
        is_safe: isSafeContent({ title: item.title, description: item.contentSnippet })
      }));
      allPosts = allPosts.concat(posts);
    } catch {}
  }
  return allPosts.filter(post => post.is_safe && post.title && post.link);
}

// --- GOOGLE TRENDS RSS ---
async function fetchTrendingFromGoogleTrends() {
  const url = `https://trends.google.com/trends/trendingsearches/daily/rss?geo=US`;
  try {
    const feed = await RSS_PARSER.parseURL(url);
    return (feed.items || []).map(item => ({
      title: item.title,
      summary: item.contentSnippet || '',
      content: '',
      image_url: undefined,
      link: item.link,
      published_at: item.pubDate,
      type: 'trending',
      category: 'GoogleTrends',
      source: 'GoogleTrends',
      is_safe: isSafeContent({ title: item.title, description: item.contentSnippet })
    })).filter(post => post.is_safe && post.title && post.link);
  } catch { return []; }
}

// --- Future Placeholder: TikTok/YouTube Trends ---
// You can implement TikTok or YouTube via RSS/third-party APIs or scraping if desired.

// --- INSERT TO SUPABASE (with deduplication) ---
async function insertToSupabase(supa, posts) {
  if (!posts.length) return { inserted: 0 };
  let inserted = 0;
  for (const post of posts) {
    // Check for duplicate by link
    const { data: existing } = await supa
      .from('trends')
      .select('id')
      .eq('link', post.link)
      .maybeSingle();
    if (existing) continue;
    const { error: insErr } = await supa.from('trends').insert([{ ...post, is_safe: true }]);
    if (!insErr) inserted++;
  }
  return { inserted };
}

async function ingest() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

  // 1. Fetch all sources
  const sources = await Promise.all([
    fetchTrendingFromGNews(),
    fetchTrendingFromNewsAPI(),
    fetchTrendingFromReddit(),
    fetchTrendingFromGoogleTrends(),
  ]);
  let allPosts = sources.flat();

  // 2. Deduplicate by link
  const seen = new Set();
  allPosts = allPosts.filter(p => {
    if (seen.has(p.link)) return false;
    seen.add(p.link);
    return true;
  });

  console.log(`Total new, safe trending stories fetched: ${allPosts.length}`);

  // 3. Insert to Supabase
  const result = await insertToSupabase(supabase, allPosts);
  console.log(`Inserted (non-duplicates): ${result.inserted}`);
}

ingest().catch(e => { console.error('[Ingest Error]', e.message); process.exit(1); });
