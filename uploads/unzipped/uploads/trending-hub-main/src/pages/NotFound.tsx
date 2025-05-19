import React from 'react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-black neon-primary mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">Oops! Looks like this page doesn’t exist or has moved.</p>
      <a href="/" className="btn font-bold px-8">Go Home</a>
      <div className="mt-16 text-gray-400 text-sm">TrendingHub — always fresh, even when you get lost.</div>
    </section>
  );
}
