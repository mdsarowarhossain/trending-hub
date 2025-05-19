import React from 'react';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-4xl font-extrabold neon-primary mb-6">About TrendingHub</h1>
      <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
        <strong>TrendingHub</strong> is the world’s pulse. We discover, organize, and present what the internet is truly talking about <span className="neon-accent font-semibold">— every single day</span>.
      </p>
      <div className="space-y-5 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-bold">Our Mission:</span> To be the globe’s #1 destination for seeing what’s trending, viral, and newsworthy at a glance—without the clutter, clickbait, or hype. We cut through noise to bring you facts, context, and why it matters.
        </p>
        <p>
          <span className="font-bold">What makes us unique?</span> Unlike others, we <span className="neon-accent font-medium">automate</span> trending topic curation directly from Google, Reddit, and X, then filter, group, and enrich every post daily—so you never miss what’s truly happening, visualized.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Auto-refreshed content from multiple trusted platforms</li>
          <li>NSFW and clickbait filtering for a clean and safe experience</li>
          <li>Topic grouping (by Google Trends, Reddit, X) for true source transparency</li>
          <li>Image-rich, easy-to-browse blog feed</li>
        </ul>
        <p>
          <span className="font-bold">Who we are:</span> A passionate team of techies, writers, and AI geeks. We believe information is empowerment—when it’s relevant, honest, and beautifully presented.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 mt-4 mb-2">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg mb-1">Meet the Team</h3>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Alex Kim</span> – Founder & Lead Developer
              </li>
              <li>
                <span className="font-medium">Priya Desai</span> – Data & Trends Analyst
              </li>
              <li>
                <span className="font-medium">Jordan Lee</span> – Editorial & Community
              </li>
              <li>
                <span className="font-medium">Samira Chen</span> – Product & UX
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Our Values</h3>
            <ul className="list-disc pl-5">
              <li>Transparency: Always cite sources, label ads, and explain editorial choices</li>
              <li>No clickbait, no misinformation, no AI fakes</li>
              <li>Privacy-first: No invasive analytics, no required signups</li>
              <li>Community-driven: We welcome trend submissions and corrections</li>
            </ul>
          </div>
        </div>
        <p>
          <span className="font-bold">Our Vision:</span> To make the world’s digital conversations accessible and clear—fueling curiosity and bringing communities together.
        </p>
        <p>
          <span className="text-gray-800 font-medium">Stay curious. Stay informed. Stay trending—with TrendingHub.</span>
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">How We Work</h2>
          <p className="mb-2">
            We use a mix of public trending APIs, live RSS feeds, and official search/social endpoints to bring you real-time "what’s hot" across the world’s most influential platforms. No accounts, no tracking—just the world’s conversations, updated hourly.
          </p>
          <ul className="list-disc pl-6">
            <li>Trends grouped by platform (“Trending on Google”, “Trending on X”, etc.)</li>
            <li>All sections update automatically—see the latest, always!</li>
            <li>Editorial explainers, live social embeds, and fun tools</li>
            <li>Premium, distraction-free design. Mobile-first, fast, and ethical</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">FAQ</h2>
          <div className="mb-3">
            <p className="font-semibold">Is TrendingHub free?</p>
            <p>Yes. TrendingHub is open and free to use for everyone, always.</p>
          </div>
          <div className="mb-3">
            <p className="font-semibold">How often is the site updated?</p>
            <p>Feeds refresh at least hourly. Some platforms update even faster.</p>
          </div>
          <div>
            <p className="font-semibold">Is my personal data safe?</p>
            <p>
              TrendingHub uses no invasive analytics and does not require signup. See our <a href="#privacy" className="underline">Privacy</a> page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
