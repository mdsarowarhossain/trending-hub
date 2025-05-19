import React from "react";

import { TrendingTopicsSection } from "./components/TrendingTopicsSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ViralExplainersSection } from "./components/ViralExplainersSection";
import { SocialBuzzSection } from "./components/SocialBuzzSection";
import { TopBannerAd, NewsletterCTA, MidContentAd, StickyBottomAd } from "./components/AdNewsletterBlocks";
import { FunToolsSection } from "./components/FunToolsSection";
import { ChatbotSection } from "./components/ChatbotSection";
import { Footer } from "./components/Footer";
import { TrendSubmissionSection } from "./components/TrendSubmissionSection";
import { LiveNewsSection } from "./components/LiveNewsSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <TopBannerAd />
        <HeroSection />
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row">
          {/* Sidebar news - left on desktop, top on mobile */}
          <div className="md:w-1/3 md:mr-8 mb-8 md:mb-0">
            <LiveNewsSection />
          </div>
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <TrendingTopicsSection />
            <ViralExplainersSection />
            <SocialBuzzSection />
            <MidContentAd />
            <NewsletterCTA />
            <FunToolsSection />
            <ChatbotSection />
            <TrendSubmissionSection />
          </div>
        </div>
      </main>
      <Footer />
      <StickyBottomAd />
    </div>
  );
};

export default App;
