import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="max-w-xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Contact TrendingHub</h1>
      <p className="mb-6 text-lg">
        Questions, feedback, or press inquiries? Fill out the form or email{" "}
        <a className="underline" href="mailto:info@trendinghub.com">
          info@trendinghub.com
        </a>
      </p>
      {!sent ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
          />
          <textarea
            required
            rows={5}
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="p-2 bg-[#22283b] border border-[#30395c] rounded"
          />
          <button type="submit" className="btn font-bold px-8">
            Send
          </button>
        </form>
      ) : (
        <div className="py-10 text-xl text-center neon-accent">
          Thank you for reaching out! Our team will get back to you soon.
        </div>
      )}
      <div className="mt-7 py-4 border-t border-[#252c3d] text-sm text-white/80">
        <p>
          For urgent requests, email:{" "}
          <a className="underline" href="mailto:info@trendinghub.com">
            info@trendinghub.com
          </a>
          <br />
          You can also ping us on X/Twitter:{" "}
          <a
            className="underline ml-2"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @TrendingHub
          </a>
        </p>
      </div>
    </section>
  );
}
