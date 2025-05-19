import React from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Submit Content", href: "/submit" },
  { name: "Contact", href: "/contact" },
  { name: "Advertise", href: "/advertise" },
  { name: "Sources", href: "/sources" },
  { name: "Latest", href: "/latest" },
];

const socials = [
  {
    name: "X",
    href: "https://twitter.com/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M22.2 0l-9.2 11.3 11 12.7h-7.4l-5.1-5.7-7 7H0l10.7-12.7L0 0h7.4l4.6 5.4L18.8 0h3.4z"
          fill="#8a93ac"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 256 256">
        <path
          fill="#8a93ac"
          d="M218.73 0v149.73h-26.95V0Z"
        />
        <path
          fill="#8a93ac"
          d="M70.11 176.94A54.78 54.78 0 0 1 48.58 98.86V75.41H0v114.92c0 36.26 29.38 65.78 65.67 65.78 36.29 0 65.67-29.52 65.67-65.78v-3.88h-26.53v3.88c0 22.13-17.95 40.1-39.97 40.1-22.02 0-39.97-17.97-39.97-40.1v-3.88h-26.53v3.88c0 36.26 29.39 65.78 65.68 65.78z"
        />
      </svg>
    ),
  },
  {
    name: "Reddit",
    href: "https://reddit.com/",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#8a93ac" />
        <circle cx="12" cy="15" r="4" fill="#fff" />
        <circle cx="10.5" cy="14.5" r="1" fill="#222" />
        <circle cx="13.5" cy="14.5" r="1" fill="#222" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:info@trendinghub.com",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="3" fill="#8a93ac" />
        <path
          d="M4 8l8 6 8-6"
          stroke="#fff"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 py-7 sm:py-8 px-3 sm:px-5 bg-[#181c28] border-t border-[#262937] text-[#8a93ac] text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-4 md:flex-row md:items-start md:justify-between w-full">
        <div className="flex-1 mb-6 md:mb-0 min-w-[220px]">
          <div className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-white mb-2">
            Trending
            <span className="text-[#8a93ac]">Hub</span>
          </div>
          <div className="mb-2 text-gray-400 text-xs max-w-xs leading-snug">
            Get a pulse on what the world is buzzing about, every single day. TrendingHub curates the day’s top stories, most viral topics, and internet trends — straight from Google, Reddit, X, and more. No clickbait, just pure trending insights, with images and direct links.
          </div>
          <div className="my-2">
            <strong className="text-white">Newsletter:</strong>{" "}
            <span className="text-gray-400">
              Stay ahead!{" "}
              <a
                href="/newsletter"
                className="underline hover:text-white"
              >
                Subscribe to TrendingHub Daily
              </a>
            </span>
          </div>
          <div className="my-2">
            <strong className="text-white">Advertisers:</strong>{" "}
            <span className="text-gray-400">
              Want to reach engaged readers?{" "}
              <a
                href="/advertise"
                className="underline hover:text-white"
              >
                Contact us for ad placement
              </a>
              .
            </span>
          </div>
        </div>
        <nav className="flex flex-row flex-wrap gap-2 sm:gap-3 mb-4 md:mb-3 mt-0 md:mt-1 justify-start md:justify-center text-xs sm:text-sm">
          {links.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="flex flex-row md:flex-col justify-start md:justify-center gap-3 items-center min-w-[120px] mt-0 md:mt-2">
          {socials.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-white focus:ring-2 rounded-full focus:ring-accent p-1.5 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-t border-[#23243c] pt-4">
        <div className="text-xs text-[#757a89] text-center md:text-left">
          &copy; {new Date().getFullYear()} TrendingHub. All rights reserved.
          <br />
          Made with <span style={{ color: "#e27272" }}>♥</span> for the curious internet. Powered by{" "}
          <a
            href="https://supabase.com/"
            target="_blank"
            className="underline hover:text-white"
          >
            Supabase
          </a>
          .
          <div className="flex flex-col md:flex-row md:items-center gap-2 mt-5">
            {/* Buy Me a Coffee button */}
            <a
              href="https://www.buymeacoffee.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black font-bold rounded-full px-4 py-2 hover:bg-yellow-300 transition hover:scale-105 shadow-md"
              title="Buy me a coffee"
            >
              ☕ Buy Me a Coffee
            </a>
            {/* PayPal Donate button */}
            <a
              href="https://paypal.me/Australiashoponline?country.x=AU&locale.x=en_AU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold rounded-full px-4 py-2 hover:bg-blue-800 transition hover:scale-105 shadow-md"
              title="Support via PayPal"
            >
              💙 Support with PayPal
            </a>
          </div>
        </div>
        <div className="text-xs text-[#757a89] text-center md:text-right mt-2 md:mt-0">
          <strong>Ad slot:</strong>{" "}
          <span className="text-gray-400">
            Place your Google Adsense code here for footer ads.
          </span>
        </div>
      </div>
    </footer>
  );
}
