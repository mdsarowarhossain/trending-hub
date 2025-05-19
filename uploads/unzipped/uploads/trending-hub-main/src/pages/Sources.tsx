import React from 'react';

export default function Sources() {
  return (
    <section className="max-w-2xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Our Trend Sources</h1>
      <div className="space-y-8 text-gray-700 dark:text-gray-200">
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><span className="neon-accent">Google Trends</span></h2>
          <p>
            The web’s #1 search source. Google Trends highlights what millions of people are searching for, globally and locally, every minute. Our site shows topics as soon as they start trending in Google’s worldwide charts.
          </p>
          <a href="https://trends.google.com" className="underline text-blue-600 hover:text-blue-800 mt-1 inline-block" target="_blank" rel="noopener noreferrer">See Google Trends »</a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><span className="neon-accent">Reddit</span></h2>
          <p>
            Home of viral communities—Reddit surfaces breaking news, viral memes, and niche trends first. We monitor top-trending subreddits and posts daily to catch what the internet’s talking about before it even hits mainstream news.
          </p>
          <a href="https://www.reddit.com/r/trendingsubreddits/" className="underline text-orange-600 hover:text-orange-800 mt-1 inline-block" target="_blank" rel="noopener noreferrer">Explore Trending Subreddits »</a>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><span className="neon-accent">X (formerly Twitter)</span></h2>
          <p>
            The real-time global conversation platform. X’s Trending Topics reflect what the world is reacting to in real time—from breaking news and major sports to memes and activism. TrendingHub pulls top trends from public X APIs and curated lists.
          </p>
          <a href="https://twitter.com/explore/tabs/trending" className="underline text-blue-600 hover:text-blue-800 mt-1 inline-block" target="_blank" rel="noopener noreferrer">View X Trending »</a>
        </div>
        <div className="bg-[#22283b] p-4 rounded border border-[#2f3650] mt-5">
          <span className="font-semibold">Want to suggest another data source?</span>
          <span> <a href="/contact" className="underline text-accent">Contact us</a> — we’re always looking to improve!</span>
        </div>
      </div>
    </section>
  );
}
