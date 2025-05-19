import React, { useState } from "react";

export function TrendSubmissionSection() {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTitle("");
    setDesc("");
    setUrl("");
  }

  return (
    <section className="my-10 sm:my-16 max-w-xs sm:max-w-xl mx-auto px-2">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 neon-primary">Submit a Trending Topic</h2>
      <div className="glass-card px-3 sm:px-7 py-5 sm:py-7">
        {!submitted ? (
          <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              minLength={4}
              maxLength={72}
              placeholder="Topic title"
              className="p-2 sm:p-3 bg-[#22283b] border border-[#30395c] rounded text-sm sm:text-base"
            />
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Optional: Source URL"
              className="p-2 sm:p-3 bg-[#22283b] border border-[#30395c] rounded text-sm sm:text-base"
            />
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              rows={4}
              placeholder="Short description or why it's trending..."
              className="p-2 sm:p-3 bg-[#22283b] border border-[#30395c] rounded text-sm sm:text-base"
            />
            <button
              type="submit"
              className="btn font-bold px-5 sm:px-8 py-2 sm:py-2 text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-white text-sm sm:text-base text-center py-6">
            <div className="mb-3 text-lg sm:text-xl font-semibold neon-accent">
              Thanks for your submission!
            </div>
            <span>Our editors review new trends every day.</span>
            <div className="mt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="btn px-4 sm:px-6 py-2 sm:py-2 text-sm sm:text-base"
              >
                Submit Another
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
