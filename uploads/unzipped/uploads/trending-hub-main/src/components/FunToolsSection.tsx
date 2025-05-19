import React, { useState } from "react";

// 1. Fake Tweet Generator
function FakeTweetGenerator() {
  const [tweet, setTweet] = useState("");
  const [author, setAuthor] = useState("");
  const [result, setResult] = useState<{tweet: string, author: string} | null>(null);
  return (
    <div className="rounded-lg sm:rounded-xl p-4 sm:p-6 bg-white/10 border border-white/15 glass-card flex flex-col mb-5 w-full max-w-xl mx-auto">
      <h3 className="font-bold text-base sm:text-lg neon-accent mb-1 sm:mb-2">Fake Tweet Generator</h3>
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Username"
        className="mb-2 p-2 rounded bg-white/5 text-white border border-white/20 text-sm focus:outline-accent"
      />
      <textarea
        value={tweet}
        onChange={e => setTweet(e.target.value)}
        placeholder="Type your viral tweet..."
        className="mb-2 p-2 rounded bg-white/5 text-white border border-white/20 text-sm focus:outline-accent"
        rows={3}
      />
      <button
        onClick={() => setResult({ tweet, author })}
        className="bg-neon-primary py-1.5 px-4 rounded font-bold self-start mt-1 text-sm sm:text-base"
      >
        Generate
      </button>
      {result && (
        <div className="mt-4 p-3 rounded-lg bg-background/90 border text-white glass-card text-sm">
          <div className="font-bold mb-1">@{result.author || "username"}</div>
          <div className="text-base">{result.tweet || "Viral tweet goes here! 🚀"}</div>
        </div>
      )}
    </div>
  );
}

// 2. Trending Slang Decoder
const SLANGS = [
  { term: "rizz", meaning: "Short for charisma. ‘He’s got rizz on TikTok’ = He’s charming/cool." },
  { term: "no cap", meaning: "Means ‘no lie’. For real, honestly." },
  { term: "ratio", meaning: "A reply that gets more likes than the main tweet (usually an insult)." },
  { term: "mid", meaning: "Average, not great. ‘That was mid.’" },
  { term: "sus", meaning: "Suspicious or questionable." }
];
function SlangDecoder() {
  const [filter, setFilter] = useState("");
  return (
    <div className="rounded-lg sm:rounded-xl p-4 sm:p-6 bg-white/10 border border-white/15 glass-card flex flex-col mb-5 w-full max-w-xl mx-auto">
      <h3 className="font-bold text-base sm:text-lg neon-accent mb-1 sm:mb-2">Trending Slang Decoder</h3>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Type a slang..."
        className="mb-3 p-2 rounded bg-white/5 text-white border border-white/20 text-sm focus:outline-accent"
      />
      <div className="space-y-2">
        {SLANGS.filter(s => !filter || s.term.includes(filter.toLowerCase())).map((s) => (
          <div key={s.term} className="border-b border-white/10 pb-1 text-white/90 text-sm">
            <span className="font-bold">{s.term}</span>: {s.meaning}
          </div>
        ))}
        {filter && !SLANGS.some(s => s.term === filter.toLowerCase()) && (
          <div className="text-xs text-accent">Not in today's viral list!</div>
        )}
      </div>
    </div>
  );
}

// 3. Meme Text Generator (DEMO)
function MemeTextGenerator() {
  const [text, setText] = useState("");
  return (
    <div className="rounded-lg sm:rounded-xl p-4 sm:p-6 bg-white/10 border border-white/15 glass-card flex flex-col mb-5 w-full max-w-xl mx-auto">
      <h3 className="font-bold text-base sm:text-lg neon-accent mb-1 sm:mb-2">Meme Text Generator</h3>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type your meme caption..."
        className="mb-2 p-2 rounded bg-white/5 text-white border border-white/20 text-sm focus:outline-accent"
      />
      <div className="relative w-full h-40 sm:h-48 mt-2 border rounded-lg overflow-hidden bg-black/60">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
          alt="Meme"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-3 left-0 w-full text-center font-extrabold text-white text-lg sm:text-xl drop-shadow-lg px-2"
          style={{ WebkitTextStroke: '1.5px #000' }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export function FunToolsSection() {
  return (
    <section className="my-12 sm:my-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl neon-primary font-bold mb-6 sm:mb-8 text-center">
        Mini Fun Tools
      </h2>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
        <FakeTweetGenerator />
        <SlangDecoder />
        <MemeTextGenerator />
      </div>
    </section>
  );
}
