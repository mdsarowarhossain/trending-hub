import React, { useEffect, useState } from "react";
import { fetchTrendingItems, fetchCategories } from '../lib/api';

interface TrendingItem {
  id?: string;
  title: string;
  summary?: string;
  image_url?: string;
  link: string;
  published_at?: string;
  category?: { name?: string; slug?: string };
  type?: string;
}

export const TrendingTopicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trending' | 'viral'>('trending');
  const [categories, setCategories] = useState<{ id: string; name: string; slug: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [items, setItems] = useState<TrendingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories().then((cats) => {
      setCategories(cats);
      if (!activeCategory && cats.length) setActiveCategory(cats[0].id);
    });
  }, []);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);
    fetchTrendingItems(activeTab, activeCategory)
      .then((data) => {
        if (!ignore) setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch topics.');
        setLoading(false);
      });
    return () => { ignore = true; };
  }, [activeTab, activeCategory, categories]);

  // Hide the section if there are no categories (i.e., no topics in Supabase trends)
  if (categories.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-700 text-center">Trending & Viral Topics</h2>
      <div className="flex justify-center gap-6 mb-4">
        {[{ key: 'trending', label: 'Trending' }, { key: 'viral', label: 'Viral' }].map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-1.5 rounded text-lg font-semibold transition border ${activeTab === key ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
            onClick={() => setActiveTab(key as 'trending' | 'viral')}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-3 mb-7">
        {categories.map(({ id, name }) => (
          <button
            key={id}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition ${activeCategory === id ? 'bg-blue-500 text-white border-blue-400' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
            onClick={() => setActiveCategory(id)}
          >
            {name}
          </button>
        ))}
      </div>
      {loading && <div className="text-gray-500 text-center">Loading topics…</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {!loading && !error && items.length === 0 && (
        <div className="text-gray-500 text-center">No topics found.</div>
      )}
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((a, i) => (
          <a
            key={a.id || i}
            href={a.link}
            className="block bg-white shadow p-4 rounded-lg hover:shadow-xl transition border border-blue-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-36 w-full bg-gray-100 mb-3 rounded overflow-hidden flex items-center justify-center">
              <img
                src={a.image_url || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'}
                alt={a.title}
                className="object-cover h-full w-full rounded"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'; }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{a.title}</h3>
              {a.category && <div className="text-xs text-gray-500 mb-1">Category: {a.category.name}</div>}
              {a.summary && (
                <p className="text-sm text-gray-700 line-clamp-3">{a.summary}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
