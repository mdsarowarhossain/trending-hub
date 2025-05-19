import React from 'react';
import { TrendingTopicsSection } from '../components/TrendingTopicsSection';

export default function Latest() {
  return (
    <section className="max-w-6xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Latest Trends</h1>
      <div className="mb-8 text-gray-600 dark:text-gray-300 text-lg">
        Discover what the world is buzzing about right now.
        Fresh, image-rich trending topics updated daily from Google, Reddit, and X — all in one place.
      </div>
      <TrendingTopicsSection />
    </section>
  );
}
