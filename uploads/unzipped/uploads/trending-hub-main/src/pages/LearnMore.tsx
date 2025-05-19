import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type Trend = {
  id: string;
  title: string;
  summary?: string;
  content?: string;
  link?: string;
  published_at?: string;
  type?: string;
  is_safe?: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fetchTrendingItems(type: string): Promise<Trend[]> {
  // Fetch from Supabase 'trends' table, filter to is_safe=true and type='viral'
  const { data, error } = await supabase
    .from("trends")
    .select("*")
    .eq("is_safe", true)
    .eq("type", type)
    .order("published_at", { ascending: false })
    .limit(24);

  if (error) throw error;
  return data || [];
}

export default function LearnMore() {
  const [articles, setArticles] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchTrendingItems("viral")
      .then((data) => {
        setArticles(data.slice(0, 12));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch topic insights. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (!loading && !error && articles.length === 0) {
    return (
      <div className="max-w-3xl mx-auto pt-12 pb-24 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 text-center">Learn More: Today’s Viral Topics</h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Get in-depth, curated insights into what's trending and going viral today around the world—across news, tech, lifestyle, entertainment, science, and more. No explicit or disturbing content, just inspiring trends.
        </p>
        <div className="text-center text-gray-500">No family-friendly viral topics found at the moment. Please check back later!</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pt-12 pb-24 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 text-center">Learn More: Today’s Viral Topics</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Get in-depth, curated insights into what's trending and going viral today around the world—across news, tech, lifestyle, entertainment, science, and more. No explicit or disturbing content, just inspiring trends.
      </p>
      {loading && <p className="text-center text-gray-500">Loading viral topic insights…</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="space-y-7">
        {articles.map((a, i) => (
          <div
            key={a.id || i}
            className="bg-white px-5 py-4 rounded-xl shadow-md hover:shadow-lg duration-150 border border-blue-50"
          >
            <h2 className="font-semibold text-xl mb-1">
              {a.link ? (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">{a.title}</a>
              ) : a.title}
            </h2>
            <div className="text-xs text-gray-500 mb-1">
              {a.published_at && new Date(a.published_at).toLocaleString()}
            </div>
            {a.summary && <p className="text-gray-700 text-sm mb-1">{a.summary}</p>}
            {a.content && <p className="text-gray-600 text-xs line-clamp-2">{a.content}</p>}
            {a.link && (
              <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs font-medium">Read full story</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
