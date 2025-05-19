import React from "react";

const SOCIAL_BUZZ = [
  {
    type: "tiktok",
    embedUrl: "https://www.tiktok.com/embed/v2/7348554868844223777?lang=en-US",
    caption: "‘AI Baby Filter’ reactions going viral! #AIBabyFilter #Cute #TikTokViral",
    tags: ["#AIBabyFilter", "#viral", "#trend"]
  },
  {
    type: "twitter",
    embedUrl: "https://twitframe.com/show?url=https://twitter.com/PopCrave/status/1788010542763249930",
    caption: "Met Gala memes are absolutely everywhere tonight. #MetGala",
    tags: ["#MetGala", "#fashion", "@PopCrave"]
  },
  {
    type: "reddit",
    embedUrl: "https://www.redditmedia.com/r/memes/comments/1c5noj6/this_is_so_true/?ref_source=embed&ref=share&embed=true&theme=dark",
    caption: "Reddit’s top meme today: ‘This is so true’. The comments are gold. #RedditMemes",
    tags: ["#Reddit", "#memes"]
  }
];

type PlatformType = "tiktok" | "twitter" | "reddit";

const TiktokIcon = () => (
  <svg width="19" height="19" fill="none" viewBox="0 0 256 256"><path fill="#25F4EE" d="M218.73 0v149.73h-26.95V0Z"></path><path fill="#FE2C55" d="M70.11 176.94A54.78 54.78 0 0 1 48.58 98.86V75.41H0v114.92c0 36.26 29.38 65.78 65.67 65.78 36.29 0 65.67-29.52 65.67-65.78v-3.88h-26.53v3.88c0 22.13-17.95 40.1-39.97 40.1-22.02 0-39.97-17.97-39.97-40.1v-3.88h-26.53v3.88c0 36.26 29.39 65.78 65.68 65.78z"></path></svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53C20.4 3.23 19.12 2 17.67 2c-2.02 0-3.67 1.79-3.67 4a4.31 4.31 0 0 0 .1.91A10.66 10.66 0 0 1 3 4.26a4.33 4.33 0 0 0-.5 2.14c0 1.48.75 2.79 1.89 3.56A4.3 4.3 0 0 1 2.8 9.72v.05c0 2.07 1.46 3.81 3.5 4.2-.36.11-.74.17-1.13.17-.28 0-.54-.03-.8-.08.54 1.69 2.09 2.92 3.94 2.95A8.74 8.74 0 0 1 2 19.54a12.3 12.3 0 0 0 6.29 1.85C19.2 21.39 24 13.75 24 7.27c0-.19-.01-.37-.02-.56A8.18 8.18 0 0 0 23 3z" fill="#25F4EE"/></svg>
);

const RedditIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FF4500"/><circle cx="12" cy="15" r="4" fill="#fff"/><circle cx="10.5" cy="14.5" r="1" fill="#222"/><circle cx="13.5" cy="14.5" r="1" fill="#222"/></svg>
);

const platformIcon: Record<PlatformType, JSX.Element> = {
  tiktok: <TiktokIcon />,
  twitter: <TwitterIcon />,
  reddit: <RedditIcon />
};

const PLATFORMS: Record<PlatformType, { link: string; icon: JSX.Element }> = {
  tiktok: {
    link: "https://www.tiktok.com/",
    icon: <TiktokIcon />
  },
  twitter: {
    link: "https://twitter.com/",
    icon: <TwitterIcon />
  },
  reddit: {
    link: "https://reddit.com/",
    icon: <RedditIcon />
  }
};

export function SocialBuzzSection() {
  return (
    <section className="mt-12 sm:mt-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl neon-primary font-bold mb-6 sm:mb-8 text-center px-2">Social Buzz</h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SOCIAL_BUZZ.map((buzz, i) => (
          <div
            key={i}
            className="rounded-xl sm:rounded-2xl bg-white/10 dark:bg-[#161c35]/60 p-3 sm:p-4 shadow-lg border border-white/10 glass-card flex flex-col backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              {platformIcon[buzz.type as PlatformType]}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest opacity-70">
                {buzz.type}
              </span>
            </div>
            <div className="mb-3">
              {buzz.type === "twitter" ? (
                <iframe
                  src={buzz.embedUrl}
                  width="100%"
                  height="200"
                  className="rounded-md border border-white/20 w-full"
                  allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="X post"
                />
              ) : buzz.type === "tiktok" ? (
                <iframe
                  src={buzz.embedUrl}
                  width="100%"
                  height="320"
                  className="rounded-md border border-white/20 w-full"
                  allowFullScreen
                  title="TikTok"
                />
              ) : buzz.type === "reddit" ? (
                <iframe
                  src={buzz.embedUrl}
                  width="100%"
                  height="206"
                  className="rounded-md border border-white/20 w-full"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  title="Reddit meme"
                />
              ) : null}
            </div>
            <p className="font-inter text-white/90 mb-2 text-sm sm:text-base">{buzz.caption}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {buzz.tags.map((t) => (
                <span key={t} className="bg-white/15 neon-accent px-2 py-0.5 rounded-md font-bold">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {(['tiktok', 'twitter', 'reddit'] as const).map((platform) => (
          <a
            key={platform}
            href={PLATFORMS[platform].link}
            className="hover:scale-110 transition-transform duration-150 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PLATFORMS[platform].icon}
          </a>
        ))}
      </div>
    </section>
  );
}
