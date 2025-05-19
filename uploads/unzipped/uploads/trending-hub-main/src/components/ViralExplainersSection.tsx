import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  url: string;
  description?: string;
  content?: string;
  image?: string;
  source: { name: string };
  category?: string;
}

const CATEGORIES = [
  { key: "general", label: "All" },
  { key: "entertainment", label: "Entertainment" },
  { key: "gaming", label: "Gaming" },
  { key: "memes", label: "Memes" },
  { key: "tech", label: "Tech" },
  { key: "news", label: "News" }
];

const SAFE_KEYWORDS = [
  "viral", "trend", "memes", "entertainment", "news", "challenge", "fun", "gaming", "tech", "media"
];
const BLOCKED_KEYWORDS = [
  "sex", "porn", "nude", "shoot", "kill", "murder", "violence", "abuse", "suicide", "terror", "war", "gore", "exploit", "drugs"
];
const FALLBACK_IMG = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80";

function isSafe(article: Article): boolean {
  const text = `${article.title ?? ""} ${article.description ?? ""} ${article.content ?? ""}`.toLowerCase();
  if (BLOCKED_KEYWORDS.some((word) => text.includes(word))) return false;
  return SAFE_KEYWORDS.some((word) => text.includes(word)) || true;
}

export const ViralExplainersSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      setError(null);
      let apiUrl = "https://gnews.io/api/v4/top-headlines?lang=en&token=5eac9ae2d4b94da9ad1ceb3305f8c3f4&max=9";
      if (activeCategory !== "general") apiUrl += `&topic=${activeCategory}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        let filtered = (data.articles || []).filter(isSafe);
        setArticles(filtered);
      } catch (err) {
        setError("Failed to fetch viral explainers. Try again later.");
      }
      setLoading(false);
    }
    fetchArticles();
  }, [activeCategory]);

  return (
    <section className="mt-12 sm:mt-14 mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl neon-primary font-bold mb-6 sm:mb-8 text-center px-2">
        Why is it Trending?
      </h2>
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-pink-400 ${
              activeCategory === key
                ? "bg-pink-500 text-white border-pink-400"
                : "bg-white text-pink-700 border-pink-200 hover:bg-pink-100"
            }`}
            onClick={() => setActiveCategory(key)}
            tabIndex={0}
            aria-pressed={activeCategory === key}
            aria-label={`Show ${label} viral topics`}
          >
            {label}
          </button>
        ))}
      </div>
      {loading && <div className="text-gray-500 text-center">Loading viral topics…</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.url}
            className="block rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xl glass-card border border-white/10 bg-white/10 dark:bg-[#181e36]/60 group backdrop-blur-md transition hover:shadow-neon-primary focus-within:shadow-accent relative hover:bg-white/20 focus:bg-white/20"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label={a.title}
          >
            <div className="h-32 w-full bg-gray-100 mb-3 rounded overflow-hidden flex items-center justify-center">
              <img
                src={a.image || FALLBACK_IMG}
                alt={a.title}
                className="object-cover h-full w-full rounded"
                onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                draggable={false}
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold neon-accent mb-2 sm:mb-3 line-clamp-2">{a.title}</h3>
              <div className="text-xs text-gray-400 mb-1">{a.source?.name || "Unknown"}</div>
              {(a.description || a.content) && (
                <p className="font-inter text-white/90 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {a.description || a.content}
                </p>
              )}
            </div>
          </a>
        ))}
        {!loading && articles.length === 0 && !error && (
          <div className="col-span-full text-center text-gray-400 py-8">
            No viral topics found for this category.
          </div>
        )}
      </div>
    </section>
  );
};
