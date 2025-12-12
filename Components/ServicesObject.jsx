import { FaBullhorn, FaUsersCog, FaCode} from "react-icons/fa";
export const ServicesObject = [
  {
    id: 1,
    name: "Social Media Management (SMM)",
    image: "/SocialMedia.png",
    icon: <FaBullhorn className="text-4xl text-purple-500" />,
    short:
      "We don’t just post content — every post is data-driven, optimized for engagement, and aligned with your business objectives. Organic strategies are paired with smart ad support for the best results.",
    full: `
Key Points:
• Content creation & scheduling (Facebook, Instagram, LinkedIn)
• Graphic designing using Canva & professional tools
• Audience engagement (comments, messages, replies)
• Monthly content calendar planning
• Reporting & analytics (growth, engagement, reach)
• Organic strategy + occasional ad support integration

Tools We Use:
• Canva / Photoshop / Illustrator (Design)
• Meta Business Suite / Creator Studio (Scheduling & Posting)
• Google Analytics / Social Metrics Tools (Analysis & Reporting)
    `,
  },

  {
    id: 2,
    name: "Social Media Marketing & Ads",
    image: "/SocialMarketing+ADS(2).png",
    icon: <FaUsersCog className="text-4xl text-purple-500" />,
    short:
      "Our ad campaigns focus on high-intent leads at low cost-per-lead ($10–$20). On average, 1 client converts within 3–4 qualified leads depending on your industry.",
    full: `
Key Points:
• Meta Ads campaign creation & management
• Audience research & segmentation (Lookalike, Custom, Geo-targeted)
• Ad copywriting, creative design, & A/B testing
• Ad spend management & ROI optimization
• Reporting & campaign analysis
• CRM management (Go High Level, Zapier)
• Retargeting strategy for warm audiences

Tools We Use:
• Meta Ads Manager (Campaigns, Audience Insights, Analytics)
• Canva / Photoshop (Creative designing)
• Meta Analytics (Tracking & reporting)
• Go High Level / Zapier (CRM automation)
    `,
  },

  {
    id: 3,
    name: "Website Development",
    image: "/web.jpeg",
    icon: <FaCode className="text-4xl text-purple-500" />,
    short:
      "We build websites that convert visitors into paying clients. Perfect for lead generation campaigns and high-converting landing pages.",
    full: `
Key Points:
• Landing pages for lead capture
• Conversion-focused web design (UX/UI)
• Mobile-optimized, fast-loading pages
• Integration with CRM / Lead forms / Payment gateways
• Basic SEO setup & tracking

Tools We Use:
• WordPress / Wix / Shopify / Elementor
• Google Analytics / Search Console
    `,
  },
];
