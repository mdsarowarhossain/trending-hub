import React, { useState, useEffect } from "react";
import { fetchTrendingItems } from '../lib/api';

export const LiveNewsSection: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Fetch from Supabase 'trends' table, only safe and most recent
    fetchTrendingItems('trends', {
      filter: { is_safe: true },
      order: { column: 'published_at', ascending: false },
      limit: 10,
    })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(e => {
        setError('Failed to fetch live news.');
        setLoading(false);
      });
  }, []);

  return (
    <aside className="w-full md:w-64 bg-white border rounded-lg shadow-md p-4 mb-8 md:mb-0 md:mr-6" style={{ minHeight: '100px' }}>
      <h2 className="text-lg font-bold mb-4 text-blue-600">Live News</h2>
      {loading && <p className="text-sm">Loading news...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
      <ul className="space-y-4">
        {articles.map((article, i) => (
          <li key={article.id || i} className="">
            <a
              href={article.link}
              className="font-medium text-base hover:text-blue-500 duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
            <div className="text-xs text-gray-500 mt-1 mb-0.5">
              {article.published_at && new Date(article.published_at).toLocaleString()}
            </div>
            {article.summary && (
              <p className="text-xs text-gray-700 mt-0.5 line-clamp-2">{article.summary}</p>
            )}
          </li>
        ))}
      </ul>
      {!loading && !error && articles.length === 0 && (
        <div className="text-gray-500 text-center">No live news available.</div>
      )}
    </aside>
  );
};
