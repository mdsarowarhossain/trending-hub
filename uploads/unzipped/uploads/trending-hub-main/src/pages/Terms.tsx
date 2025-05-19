import React from 'react';

export default function Terms() {
  return (
    <section className="max-w-2xl mx-auto pt-14 pb-20 px-4">
      <h1 className="text-3xl font-bold neon-primary mb-6">Terms of Service</h1>
      <div className="space-y-5 text-gray-700 dark:text-gray-200">
        <p>
          <strong>Welcome to TrendingHub.</strong> By using this site, you agree to these terms. If you don’t accept, do not use our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Usage Rules</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Personal Use Only:</b> TrendingHub is for your personal, non-commercial use. You may browse, view, and share links, but you may not use the site for automated scraping, bulk downloading, or redistribution of content.
          </li>
          <li>
            <b>No Automated Access:</b> Use of bots, scrapers, or automated tools to access or extract data from TrendingHub is strictly prohibited.
          </li>
          <li>
            <b>Respectful Conduct:</b> You may not submit, share, or promote content that is illegal, defamatory, hateful, pornographic, abusive, or infringes on the rights of others. We reserve the right to remove or edit submissions at our discretion.
          </li>
          <li>
            <b>Prohibited Actions:</b> No spam, hacking, NSFW, or abuse. Violators may be banned and reported.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Copyright & Content</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Content Ownership:</b> TrendingHub curates, summarizes, and links to third-party content (Google, Reddit, X, YouTube, etc.). All copyrights remain with the original authors and publishers. We provide attributions and direct links to sources.
          </li>
          <li>
            <b>Fair Use:</b> Embedded or linked content (news, tweets, videos, memes) is used under fair use for commentary, news reporting, and aggregation. If you are a copyright owner and wish to request removal, contact us at <a className="underline" href="mailto:dmca@trendinghub.com">dmca@trendinghub.com</a>.
          </li>
          <li>
            <b>User Submissions:</b> By submitting content or trends, you grant TrendingHub a non-exclusive right to display, edit, and share your submission. You must have the rights to any content you submit.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Disclaimers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>No Endorsement:</b> Trends and content are presented as-is from public APIs and sources. They do not reflect the editorial opinion of TrendingHub.
          </li>
          <li>
            <b>No Liability:</b> We strive for accuracy, but offer no guarantee for completeness, timeliness, or correctness. Use at your own risk, especially for investment, health, or legal decisions.
          </li>
          <li>
            <b>Third-Party Links:</b> Ads and affiliate links are clearly labeled. Clicking third-party ads or links means their terms and privacy policies apply.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Reporting & Contact</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Reporting Issues:</b> Found an error, copyright concern, or inappropriate content? <a className="underline" href="mailto:info@trendinghub.com">Contact us</a> and we’ll address it promptly.
          </li>
          <li>
            <b>DMCA Requests:</b> Copyright owners may request removal of their content by emailing <a className="underline" href="mailto:dmca@trendinghub.com">dmca@trendinghub.com</a>.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes & Enforcement</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Modifications:</b> We reserve the right to update these terms at any time. Continued use of the site means you accept the latest version.
          </li>
          <li>
            <b>Enforcement:</b> Violation of these terms may result in access restrictions, content removal, or legal action.
          </li>
        </ul>
        <p>
          For any questions, email <a className="underline" href="mailto:info@trendinghub.com">info@trendinghub.com</a>.
        </p>
        <p className="text-sm text-gray-500 mt-4">Last updated: May 2025.</p>
      </div>
    </section>
  );
}
