import React, { useState } from "react";

const demoTrending = [
  "AI Baby Filter",
  "Met Gala Red Carpet",
  "Game Swap Frenzy",
];

export function ChatbotSection() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  function handleAsk(e: React.FormEvent) {
    e.preventDefault();
    if ((question + "").toLowerCase().includes("what's trending")) {
      setAnswer(
        `Here’s what’s trending right now: ${demoTrending.map((t, i) => `\n${i + 1}. ${t}`).join("")}`
      );
    } else {
      setAnswer("Sorry, this Chatbot only answers trending topics for now.");
    }
  }

  return (
    <section className="my-10 sm:my-14">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 neon-primary">Ask what's trending</h2>
      <div className="glass-card px-3 sm:px-7 py-5 sm:py-7 max-w-xs sm:max-w-xl mx-auto">
        <form onSubmit={handleAsk} className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-end">
          <input
            value={question}
            onChange={e => { setQuestion(e.target.value); setAnswer(null); }}
            type="text"
            placeholder="Try: What’s trending?"
            className="flex-1 p-2 sm:p-3 text-white bg-[#22283b] border border-[#30395c] rounded text-sm sm:text-base min-w-0"
          />
          <button type="submit" className="btn px-4 sm:px-6 py-2 sm:py-2 text-sm sm:text-base">Ask</button>
        </form>
        {answer && (
          <div className="mt-4 bg-[#191f29] rounded p-3 sm:p-4 border border-[#26293c] text-white/90 text-sm sm:text-base whitespace-pre-line">
            {answer}
          </div>
        )}
      </div>
    </section>
  );
}
