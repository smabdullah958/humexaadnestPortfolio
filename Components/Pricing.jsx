"use client";

import React from "react";
import Link from "next/link";
const pricingPlans = [
  {
    title: "Brand Kickstart Package (Starter Plan)",
    price: "$299 / month",
    adBudget: "5$–10$ / day (optional)",
    color: "purple",
    deliverables: [
      { cat: "Content Creation", del: "10 posts / month", week: "Week 1", result: "20-25% profile visits, baseline engagement" },
      { cat: "Hashtags & SEO", del: "25-30 viral hashtags & SEO keywords", week: "Week 1" },
      { cat: "Posting & Scheduling", del: "Fully managed weekly posting", week: "Week 2", result: "25-35% reach, early inbound messages" },
      { cat: "Page Optimization", del: "Bio write, keyword optimization, CTA setup", week: "Week 3", result: "40-45% reach, moderate engagement" },
      { cat: "Community Management", del: "Responding to queries", week: "Week 4", result: "Traffic improves 60%+" },
      { cat: "Reporting", del: "Weekly insights summary" },
    ],
  },
  {
    title: "Lead & Authority Booster (Growth Plan)",
    price: "$399 / month",
    adBudget:
      "$10/day (Awareness + engagement + traffic) • $30/day (Lead campaigns)",
    color: "blue",
    deliverables: [
      { cat: "Content Creation", del: "18 posts / month", week: "Week 1", result: "10-12 Leads, 50-60% cheaper CPL, 20-25% profile visits" },
      { cat: "Hashtags & Advanced SEO", del: "40-45 viral hashtags & SEO / post" },
      { cat: "Paid Campaigns", del: "5 campaigns / month", week: "Week 2", result: "15-20 leads/week, 50-60% page growth" },
      { cat: "Lead Form Optimization", del: "Facebook form + Website form" },
      { cat: "Posting & Scheduling", del: "Fully managed weekly posting" },
      { cat: "Page Optimization", del: "Bio write, keyword optimization, CTA setup", week: "Week 3", result: "60-65% reach, high engagement" },
      { cat: "Community Management", del: "Responding to queries", week: "Week 4", result: "CPL stabilizes, consistent inbound leads" },
      { cat: "Group Distribution", del: "Posting in 20+ targeted groups weekly" },
      { cat: "Reporting", del: "Weekly + Monthly dashboard" },
    ],
  },
  {
    title: "Premium Pro Domination Package (Pro Plan)",
    price: "$699 / month",
    adBudget: "Custom budget required",
    color: "black",
    deliverables: [
      { cat: "Content Creation", del: "35 posts / month", week: "Week 1", result: "10-15 leads, 100+ website visits, 25% engagement" },
      { cat: "Branding & SEO", del: "50+ hashtags & SEO / post, persona building" },
      { cat: "Paid Campaigns", del: "7+ campaigns / month", week: "Week 2", result: "15-25 leads/week, 240+ website visits" },
      { cat: "Lead System", del: "FB form + Website form + CRM automation" },
      { cat: "WhatsApp Automation", del: "Yes" },
      { cat: "Posting & Scheduling", del: "Fully managed weekly posting" },
      { cat: "Community Management", del: "Daily responses, nurturing", week: "Week 3", result: "25% drop in CPL, 400+ viewers" },
      { cat: "Website Development", del: "1 Business Website (10 Pages)" },
      { cat: "SEO Pages", del: "On-page optimization for entire site" },
      { cat: "Website Maintenance", del: "Updates + backups monthly" },
      { cat: "Group Distribution", del: "Posting in 50+ groups monthly" },
      { cat: "Reporting", del: "Weekly + Monthly deep analytics", week: "Week 4", result: "30+ weekly leads, 7k warm audience" },
    ],
  },
];

const PricingCard = ({ plan }) => {
  const [showAll, setShowAll] = React.useState(false);

  // Show only first 3 if collapsed
  const visibleDeliverables = showAll
    ? plan.deliverables
    : plan.deliverables.slice(0, 3);

  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-lg bg-white hover:scale-[1.02] transition ">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h2>
      <div className="text-xl font-semibold text-purple-600">{plan.price}</div>
      <div className="text-sm text-gray-600 mb-4">{plan.adBudget}</div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {visibleDeliverables.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl border-l-4 border-purple-500"
          >
            <p className="font-semibold text-gray-800">{item.cat}</p>
            <p className="text-sm text-gray-700">{item.del}</p>
            {item.week && (
              <p className="text-xs font-medium text-purple-700">⏳ {item.week}</p>
            )}
            {item.result && (
              <p className="text-xs text-green-700">⭐ {item.result}</p>
            )}
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {plan.deliverables.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-purple-600 font-semibold mt-4 hover:underline hover:scale-110 transition duration-300"
        >
          {showAll ? "Show Less" : "See Details"}
        </button>
      )}

      <Link
        href="https://wa.me/923161927285?text=Hi%20I%20want%20to%20book%20a%2015-minute%20call."
        target="_blank"
        className="sm:hidden md:block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition mt-5"
      >
        Book Call
      </Link>
    </div>
  );
};


export default function Pricing() {
  return (
    <div id="Pricing" className="py-20 px-6 bg-gray-50">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-10 ">
        Our Pricing & Plans
      </h1>

        <p className="pb-10">
            Our services cost anywhere from $299-$699 a month. depending on how many different services you’re utilizing, your goals and more. Check out our packages and pricing below and schedule a call to get a free, custom quote and proposal today.
        </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
