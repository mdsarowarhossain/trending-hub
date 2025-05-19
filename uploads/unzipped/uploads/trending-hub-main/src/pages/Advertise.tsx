import React from "react";

export default function Advertise() {
  return (
    <section className="max-w-2xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Advertise with TrendingHub</h1>
      <p className="mb-5 text-lg">
        Reach an engaged, trend-savvy audience that checks what’s hot—before the world talks about it!
      </p>
      <div className="space-y-5 text-gray-700 dark:text-gray-200">
        <p>
          <b>Why Advertise on TrendingHub?</b><br />
          • 85% of our readers are early adopters, sharing viral moments and influencing trends.
          <br />• Our site is updated <b>daily</b>—bringing repeat visitors multiple times a week.
          <br />• Audiences from USA, Europe, India, SEA, Africa, and the Middle East.
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>High-visibility display, banner, and sponsored content slots</li>
          <li>Low ad clutter: your message stands out, not lost in the noise</li>
          <li className="italic">Premium placements available: homepage banner, sticky footer, sponsored post, sidebar and newsletter features</li>
        </ul>
        <p>For media kit, statistics, demos, and custom pricing, contact:<br /><a className="underline" href="mailto:info@trendinghub.com">info@trendinghub.com</a></p>
        <div className="rounded bg-[#202437] p-3 mt-8 text-gray-300 border border-[#31375a]">
          <strong>Want to add Google AdSense or Sponsored Content?</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Add your AdSense code where marked in site layout (top/header, in-feed, footer)</li>
            <li>We accept image, HTML5, or native ad units</li>
            <li>Contact to discuss partnerships, launches, or sponsored posts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
