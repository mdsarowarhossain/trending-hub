import { supabase } from './supabaseClient';

// Helper keyword filter to exclude disturbing/sexual topics across all fetches
type Trend = {
  id: string;
  title: string;
  summary?: string;
  content?: string;
  image_url?: string;
  link?: string;
  published_at?: string;
  category?: string;
  type?: string;
  is_safe: boolean;
};

const BLOCKED_KEYWORDS = [
  'sex', 'nude', 'porn', 'shoot', 'kill', 'murder', 'violence', 'abuse', 'suicide', 'terror', 'trafficking', 'war', 'gore', 'exploit'
  // Add more as needed
];

function filterSafe(trends: Trend[]): Trend[] {
  return trends.filter(
    t => t.is_safe !== false && !BLOCKED_KEYWORDS.some(word =>
      ((t.title ?? '') + ' ' + (t.summary ?? '') + ' ' + (t.content ?? ''))
        .toLowerCase().includes(word)
    )
  );
}

export async function fetchCategories() {
  // Dynamically generate from trends table
  const { data, error } = await supabase
    .from('trends')
    .select('category')
    .eq('is_safe', true);
  if (error || !data) return [];
  // Unique categories, removing any nulls
  const cats = [...new Set(data.map(t => t.category).filter(Boolean))]
    .map((name, i) => ({ id: name, name, slug: name.replace(/\s+/g, '-').toLowerCase() }));
  return cats;
}

export async function fetchTrendingItems(type = 'trending', category = null) {
  let query = supabase
    .from('trends')
    .select('*')
    .eq('is_safe', true)
    .order('published_at', { ascending: false });
  if (type && ['trending', 'viral'].includes(type)) query = query.eq('type', type);
  if (category) query = query.eq('category', category);
  const { data, error } = await query;
  if (error || !data) return [];
  return filterSafe(data);
}
