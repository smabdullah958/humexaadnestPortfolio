import { FaBullhorn, FaUsersCog, FaCode} from "react-icons/fa";
export const ServicesObject = [
  {
    id: 1,
     slug: "social-media-management",
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
    slug: "social-media-marketing-ads",
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
    slug: "website-development",
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





export const caseStudies = [
      {
      id:1,
      title:"POS Lead Generation",
      slug:"POS",
      short:`The client entered the market with zero digital footprint. No website, no social media presence, and no prior advertising data. Despite this, they aimed to compete in a highly saturated US POS market where average acquisition costs are typically high.
`,
      background:`
     <b> Client Industry: </b><span className="text-sm"> POS Systems for Restaurants & Bars</span> <br/>
      <b> Business Type: </b><span className="text-sm"> SaaS / POS Seller </span> <br/>
      <b> Market: </b><span className="text-sm"> United States (Primary: California → Nationwide)
    The client entered the market with zero digital footprint. No website, no social media presence, and no prior advertising data. Despite this, they aimed to compete in a highly saturated US POS market where average acquisition costs are typically high.</span>
}`,
      service: `
                <ul>
               <li> Social media management </li>
               <li> Social media marketing </li>
                Web development 
                </ul>
                  `,
      challenges:`
      <ul>
               <li> ❌ No brand presence or credibility signals </li>
               <li> ❌ No historical ad data to optimize from </li>
               <li> ❌ Highly competitive POS niche with inflated CPL </li>
               <li> ❌ Requirement for nationwide reach without quality loss </li>
                </ul>
                  `,
      solutions:`
         We designed a conversion-first funnel that filtered non-relevant users before they entered the pipeline, immediately reducing wasted spend.<br/>
<b>Dual Audience Strategy</b>
<br/>
<ul >
               <li> Broad audience testing for algorithm learning </li>
               <li> Interest-based clusters:
          <li>Restaurant owners & managers</li>
        <li>POS & business software interests</li>
        <li>Business admins & decision-makers</li>
<i>Underperforming audiences were eliminated within 72-hour optimization windows.<i><br/>
<b>Offer-Led Creative System </b><br/>
Problem → Solution → Advantage framework
Strong incentive-based messaging
Copy-level qualification to eliminate non-restaurant user
This shift increased CTR by 180% and stabilized CPLs.
`,
result:`
      Monthly Ad Spend: $2,000+
      Average Cost Per Lead: $10–$15
      Leads Generated: 150+ per month
      Reach Growth: +750%
      Lead Volume Growth: +1,200% (from zero baseline)
      Cost Efficiency: 30–50% below POS industry CPL average`,
  OverAllResult:`
      400+
      Leads (in 3 Months)
      +1,600%
      Lead Growth
      $30/day Budget
      Campaign Efficiency
        $15/lead 
        Average CPL
          `,
    image:"/UseCase4.png"
    }
  ,{
    id: 2,
    title: "Construction Company",
    slug: "construction-company",
    short:
      "Axiom Structures is a Florida-based structural engineering firm offering high-quality engineering designs, inspections, and consulting services.",
    service: "Social Media Management Services",
    image: "/UseCase1.png",
    background:
      "Axiom Structures is a Florida-based structural engineering firm offering high-quality engineering designs, inspections, and consulting services for residential and commercial construction projects.",
    challenges:`
    Axiom Structures had a strong client track record but lacked social media presence and engagement.
Their Instagram had just 100 followers and was not effectively showcasing their capabilities or attracting new leads.
Previous content efforts were sporadic and failed to reflect the value of their work or expertise.
`,
    solutions:`
    Branded Social Content: Developed consistent, on-brand content focused on completed projects, service highlights, and clear structural visuals.
Audience Growth Strategy: Leveraged strategic hashtags, improved bio/link usage, and crafted high-performing carousel posts to grow reach.
Content Buckets for Relevance: Highlighted services, plans, engineering, and renovations to match audience interest.
Engagement Tactics: Used calls-to-action, educational tips, and visual storytelling to boost profile visits and interactions.`,
    result:`
    Facebook Growth: From 169 followers to 766 in less than a year (+353%)
Instagram Growth: From 101 followers to 267 in less than a year (+165%)
Engagement Surge: Monthly engagement grew with more meaningful interactions and steady audience growth.
Reach Expansion: Instagram and Facebook reach rose, targeting potential followers and customers.
Facebook Performance: From 54 reach and 1 new follower in March 2024 to 7.8k reach and 57 new followers in January 2025`,
  OverAllResult:`+353%
              Facebook Growth
                  +165%
              Instagram Growth
                  18x
            Increased Social Engagement
                    `
    },
  {
    id: 3,
    title: "Leadership Consultant",
    slug: "leadership-consultant",
    short:
      "Daryl D. Black is a leadership consultant helping organizations improve decision-making and performance.",
    service: "Social Media Advertising Services",
    image: "/UseCase2.png",
    background:`
    Daryl D. Black is a leadership consultant and speaker helping organizations elevate communication, decision-making, and performance under pressure. With a growing presence in the executive coaching space, Daryl sought to generate more qualified leads and raise awareness of his services.`,
      challenges:`
    Despite his proven track record and compelling brand, Daryl faced major challenges in scaling his visibility and lead flow:
Needed to generate consistent qualified leads to support business growth.
Had limited brand awareness among new prospects despite a strong value proposition.
Required an ad strategy that fit a tight budget without compromising results
`,
    solutions:`
    Humexa Adnest delivered a full-funnel Facebook Ads strategy tailored to his goals:
Lead Generation Campaigns: Built Meta ad funnels optimized for contact form submissions and bookings.
Agile Optimization: Adjusted creatives, audiences, and copy monthly to lower cost per lead and improve conversions.
Full-Service Management: Managed all ads, reporting, and creative needs while maintaining close communication through virtual meetings and email.`,
    result:`
    Leads in 10 Months: 202
Massive Growth: A +1,000% increase in reach and leads
Campaign Efficiency: $20/day budget
Reach Expansion: Instagram and Facebook reach rose, targeting potential followers and customers.
202 Leads in 10 Months: Generated a steady stream of qualified leads, with peak months delivering over 30 per month.
Massive Growth: Grew from just 3 leads in August to 33 leads in February — a 1000%+ increase from early months.
Campaign Efficiency: All achieved on a $20/day budget through highly targeted, conversion-focused campaigns.
Sustained Momentum: Performance stayed consistent with Humexa Adnest helping maintain  visibility and lead flow.`,
      OverAllResult:`
                      202+
                      Leads in 10 Months
                      +1000%
                      Massive Growth
                      $20/day Budget
                      Campaign Efficiency
                      `
  },
  {
    id: 4,
    title: "Travel Company",
    slug: "travel-company",
    short:
      "A mission-driven travel brand supporting cancer research through bookings.",
    service: "Social Media Marketing Services",
    image: "/UseCase3.png",
    background:`
    Power of Partnerships is a mission-driven travel brand that transforms everyday travel bookings into opportunities to support cancer research — at no extra cost to the traveler.
They partner with major travel providers like Expedia, VRBO, and Hotels.com, offering personalized booking services and a newly added 24/7 concierge support to make travel simple, impactful, and affordable. Their target audience includes socially conscious travelers across the U.S. who value giving back while exploring the world
`,
    challenges:`
    Power of Partnerships faced the common but critical challenge of growing their community across multiple social media platforms, including Facebook, Instagram, and TikTok.
Building a strong, engaged audience was essential to spreading awareness about their mission of supporting cancer research through travel bookings — but despite their efforts, they struggled to achieve the visibility and interaction needed to drive real momentum.
Before working with Humexa Adnest , they attempted their own outreach efforts but found it difficult to consistently scale engagement or reach new audiences in a meaningful way. After conducting research and exploring solutions, they discovered Humexa Adnest and after a positive and informative consultation with the sales team, decided to partner together to elevate their social media presence.
`,
    solutions:`
    Strategy and Execution:
To meet Power of Partnerships’ goals, we built authentic engagement, increased brand visibility, and aligned their content with the ever-evolving trends of social media platforms like Instagram, Facebook, and TikTok.
We regularly met with our client, Dee, to discuss strategy updates, upcoming promotions, brand partnerships, and social media trends. These meetings allowed us to ensure the social media content calendar stayed agile, relevant, and responsive to his real-time business activities.
Key strategies implemented included:
Running engagement and page-like ad campaigns to increase reach and build a loyal community.
Producing engaging Reels and TikTok videos that aligned with trending formats and sound styles to improve organic growth.
Optimising the client’s Instagram bio to be more authentic, relatable, and aligned with the brand’s mission, making the profile more discoverable and trustworthy.
Adjusting content based on algorithm changes to maintain strong reach and interactions across all platforms.
A unique aspect of this partnership was the close, ongoing collaboration with the client — blending his ideas, brand deals, and evolving promotions directly into the real-time social media strategy, ensuring that all posts were timely, personalized, and impactful.
`      ,
    result:`
    Facebook Reach: Increased by 700.6k%
Facebook Followers: Increased of 2.2k
Video Views: 57.8k views to his Facebook page
Instagram Visits: Increased of 3k
Instagram Followers: Gained nearly 500
Instagram Interactions: 2.5k Interactions with content on Instagram`,
  OverAllResult:`
                  +700k%
              Facebook Reach Growth
                  +57k
              Video Views
                  3k 
              Instagram Visits
                    2.5k
              Instagram Interactions
              `
    },
];
