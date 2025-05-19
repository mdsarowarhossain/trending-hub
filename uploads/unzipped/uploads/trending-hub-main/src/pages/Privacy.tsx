import React from 'react';

export default function Privacy() {
  return (
    <section className="max-w-2xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Privacy Policy</h1>
      <div className="space-y-5 text-gray-700 dark:text-gray-200">
        <p>
          <strong>Last updated: {new Date().getFullYear()}.</strong> TrendingHub respects your privacy. We collect only essential data to improve your experience and never sell your information.
        </p>
        <ul className="list-disc pl-6">
          <li><b>Analytics:</b> We use tools like Google Analytics to analyze site usage, but all data is anonymized and never sold or traded.</li>
          <li><b>Comments & Contact:</b> If you contact us or submit content, we only use your info to reply or moderate. No spam, ever.</li>
          <li><b>Cookies:</b> We may use cookies for personalization and analytics.</li>
          <li><b>Ads:</b> Google AdSense and other ad partners may set cookies to personalize ads. TrendingHub does not receive or store your sensitive data.</li>
          <li><b>Third Parties:</b> Some links take you to other sites. We take no responsibility for their privacy practices.</li>
          <li><b>Security:</b> We use industry standard security practices to keep your info safe.</li>
        </ul>
        <p>Email <a className="underline" href="mailto:info@trendinghub.com">info@trendinghub.com</a> for privacy questions.</p>
      </div>
    </section>
  );
}
