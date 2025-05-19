import React from "react";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[46vh] md:min-h-[56vh] w-full py-8 sm:py-12 md:py-20 overflow-hidden"
    >
      {/* Animated neon gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#101425] via-[#23175e] to-[#16f4d0]/60 animate-gradient-x opacity-95"
        style={{ filter: 'blur(1.6px)' }}
      />
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white neon-primary mb-3 sm:mb-4 text-center drop-shadow-xl px-2 sm:px-0">
        See What the World Is Talking About
        <br />
        <span className="neon-accent">— Right Now</span>
      </h1>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl mt-4 sm:mt-6 px-2 sm:px-0">
        {/* Animated glassy search bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl sm:rounded-2xl bg-white/5 mx-auto shadow-lg border border-white/15 backdrop-blur-lg focus-within:ring-2 focus-within:ring-accent p-1 sm:p-2 gap-2 sm:gap-0">
          <div className="flex items-center">
            <svg className="ml-3 mr-2 text-accent" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </div>
          <input
            type="text"
            placeholder="Search trending topics..."
            className="flex-1 px-3 py-2 text-base sm:text-lg bg-transparent outline-none text-white placeholder-white/60 font-inter min-w-0"
          />
          <button className="bg-neon-primary px-3 sm:px-4 py-2 text-background font-bold rounded-xl ml-0 sm:ml-2 mt-2 sm:mt-0 shadow-neon-primary transition hover:scale-105 text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
