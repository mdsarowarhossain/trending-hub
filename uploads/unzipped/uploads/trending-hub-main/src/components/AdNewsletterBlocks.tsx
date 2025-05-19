import React from "react";

export function TopBannerAd() {
  return (
    <div className="my-4 sm:my-6 flex justify-center px-2">
      <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl h-14 sm:h-20 flex items-center justify-center rounded-md sm:rounded-xl bg-white/15 border border-accent/25 shadow-sm animate-pulse">
        {/* Google AdSense Placeholder */}
        <span className="text-white/70 text-xs sm:text-sm font-inter text-center">Ad — 728x90 Leaderboard (Google AdSense Ready)</span>
      </div>
    </div>
  );
}

export function NewsletterCTA() {
  return (
    <section className="rounded-md sm:rounded-2xl bg-gradient-to-r from-[#101425]/95 via-[#22285c]/90 to-[#1edde6]/40 border border-accent/25 shadow-lg py-6 sm:py-8 px-3 sm:px-6 flex flex-col md:flex-row justify-between items-center my-8 sm:my-12 max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto glass-card">
      <div className="flex-1 mb-3 md:mb-0">
        <h3 className="text-xl sm:text-2xl font-bold neon-primary mb-1 sm:mb-2">Get the daily trend drop in your inbox</h3>
        <p className="font-inter text-white/80 text-sm sm:text-base">Subscribe and never miss what’s going viral. It’s free and takes seconds!</p>
      </div>
      <form className="flex flex-col md:flex-row gap-2 sm:gap-3 md:items-end w-full md:w-auto" action="#" method="post" autoComplete="off">
        <input type="email" required className="px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-accent/40 text-white placeholder-white/50 outline-none w-full md:w-auto" placeholder="you@email.com" name="email" />
        <button type="submit" className="bg-neon-primary px-4 sm:px-6 py-2 rounded-lg font-bold shadow-neon-primary hover:scale-105 transition text-sm sm:text-base w-full md:w-auto">Subscribe</button>
      </form>
    </section>
  );
}

export function MidContentAd() {
  return (
    <div className="my-4 sm:my-6 flex justify-center px-2">
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl h-16 sm:h-24 flex items-center justify-center rounded-md sm:rounded-xl bg-white/15 border border-accent/25 shadow-sm animate-pulse">
        {/* Google AdSense Native/Text+Image Style */}
        <span className="text-white/70 text-xs sm:text-sm font-inter text-center">Ad — Native (text + image, Google AdSense Ready)</span>
      </div>
    </div>
  );
}

export function StickyBottomAd() {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-40 w-full flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-xs sm:max-w-md md:max-w-3xl h-12 sm:h-16 flex items-center justify-center rounded-t-md sm:rounded-t-xl bg-white/20 border-t border-accent/25 shadow-md animate-pulse m-1">
        {/* Google AdSense Ready Sticky Bar */}
        <span className="text-white/70 text-xs sm:text-sm font-inter text-center">Ad — Sticky Bar (320x50, mobile optimized, Google AdSense Ready)</span>
      </div>
    </div>
  );
}
