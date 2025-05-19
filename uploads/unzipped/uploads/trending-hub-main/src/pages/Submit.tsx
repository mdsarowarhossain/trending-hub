import React, { useState } from 'react';

export default function Submit() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    link: '',
    description: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // This is a demo, so submissions are not saved. Link to email for real use.
  }

  return (
    <section className="max-w-xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Suggest a Trend</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
        Got a topic that should be trending? Let us know!
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            required
            name="title"
            placeholder="Trend title (words or hashtag)"
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
            value={form.title}
            onChange={handleChange}
          />
          <input
            name="link"
            placeholder="Optional: Source URL or tweet/post link"
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
            value={form.link}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Optional: Why is this trending?"
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
            value={form.description}
            onChange={handleChange}
          />
          <button type="submit" className="btn font-bold px-8">Submit Trend</button>
        </form>
      ) : (
        <div className="pt-6 pb-12 text-center text-lg neon-accent">
          Thanks for your suggestion! You’ve helped shape the conversation.<br />
          <span className="text-gray-400 block mt-3">
            For urgent or breaking trends, email <a href="mailto:editor@trendly.com" className="underline">editor@trendly.com</a>
          </span>
        </div>
      )}
    </section>
  );
}
