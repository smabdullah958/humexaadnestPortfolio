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
    image: "/SocialMediaMarketingAndAdds.png",
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
      <b> Market: </b><span className="text-sm"> United States  (California)
    The client entered the market with zero digital footprint. No website, no social media presence, and no prior advertising data. Despite this, they aimed to compete in a highly saturated US POS market where average acquisition costs are typically high.</span>
`,
      service: `
                <ul>
               <li> • Social media management </li>
               <li> • Social media marketing </li>
               <li> • Web development </li> 
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
               <li> • Broad audience testing for algorithm learning </li>
               <li> • Interest-based clusters:
          <li> • Restaurant owners & managers</li>
        <li> • POS & business software interests</li>
        <li> • Business admins & decision-makers</li>
 Underperforming audiences were eliminated within  <b>72-hour </b> optimization windows.<br/>
<b>Offer-Led Creative System </b><br/>
• Problem → Solution → Advantage framework<br/>
• Strong incentive-based messaging<br/>
 • Copy-level qualification to eliminate non-restaurant user<br/>
• This shift increased CTR by <b>180%</b> and stabilized CPLs.<br/>
`,
result:`
     • Monthly Ad Spend:<b> $2,000+ </b><br/>
      • Average Cost Per Lead: <b>$10–$15</b><br/>
     • Leads Generated: <b>150+ </b> per month<br/>
     • Reach Growth: <b>+750% </b><br/>
     • Lead Volume Growth: <b>+1,200% </b> (from zero baseline)<br/>
     • Cost Efficiency: <b>30–50% </b> below POS industry CPL average<br/>`,
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
    image:"/UseCase1.png",
    resultImage:["/ResultImage1.png","/ResultImage2.png"]
    },{
  id: 2,
  title: "Injury Lead Generation for Personal Injury Law Firm",
  slug: "injury-law-lead-generation",
  short: `
    High-intent injury lead generation campaign for a multi-state personal injury law firm in the United States.
  `,
  image: "/UseCase2.png",

  background: `
   <b> Name : </b> Macallum Injury Law Firm<br/>
   <b> Industry : </b> Personal Injury Law<br/>
   <b> Business Type : </b> Law Firm / Attorney<br/>
   <b> Market Served : </b> Florida, Massachusetts, Washington DC, Georgia, New Mexico (USA)
   <br/><br/>
    The firm entered the market with no structured digital acquisition system and relied on inconsistent inbound inquiries.
  `,

  service: `
   • Social Media Management<br/>
   • Web Development
  `,

  challenges: `
    <ul>
      <li> ❌ No strong digital presence</li>
      <li> ❌ Low-performing text-based creatives</li>
      <li> ❌ High cost per lead (~$60)</li>
      <li> ❌ Irrelevant and non-victim leads</li>
      <li> ❌ Mixed case inquiries (non-injury cases)</li>
    </ul>
  `,

  solutions: `
    <ul>
      <li> •  Rebuilt the acquisition system from scratch</li>
      <li> • Launched attorney-led video creatives</li>
      <li> • Focused messaging on injury-only eligibility</li>
      <li> • Introduced conditional lead forms with qualifying questions</li>
      <li> • Added call ads and message ads for high-intent users</li>
      <li> • Scaled campaigns across five US states</li>
    </ul>
  `,

  result: `
  <ul> 
  <li> • Total Ad Spend: <b> ~$2,000 </b></li>
    <li> • Average CPL: <b>~$20 </b></li>
    <li> • Total Leads Generated: <b>180–250 </b> injury leads</li>
    <li> • Lead-to-Client Ratio: 1 signed case per 5 leads</li>
    <li>• CTR Improvement: <b>+160% </b></li>
    <li>• CPM Reduction: <b>~35% </b></li>
    <li>• Irrelevant Lead Reduction: <b>40–50%</b></li>
    <li>• Six-figure revenue potential generated</li>
  `,

  OverAllResult: `
    200+ 
    Leads in 2 Months
    +1,900% 
    Lead Growth
    $30
    day Budget Efficiency
    $15–$20 
    Average CPL
  `,
resultImage:["/ResultImage3.png","/ResultImage4.png"]
}   ,
{
  id: 3,
  title: "Home Management Lead Generation for Property Owners",
  slug: "property-management-lead-generation",
  short: `
    Lead generation campaign for property owners seeking short-term and long-term management services in Ontario, Canada.
  `,
  image: "/UseCase3.png",

  background: `
   <b>Brand Name:</b> Unique Homes Group<br/>
    <b>Industry:</b> Home & Property Management<br/>
    <b>Business Model:</b> Third-Party Property Management Company<br/>
    <b>Location:</b> Ontario, Canada<br/><br/>
    The client manages rental properties and ensures consistent income and property maintenance for owners.
  `,

  service: `
   • Social Media Marketing (Paid Advertising Only)
  `,

  challenges: `
    <ul>
      <li> ❌ High CPL (~$40 per lead)</li>
      <li> ❌ Low lead volume after heavy ad spend</li>
      <li> ❌ No scalable paid acquisition system</li>
      <li> ❌ Weak text-based creatives</li>
      <li> ❌ Mixed short-term and long-term intent leads</li>
    </ul>
  `,

  solutions: `
    <ul>
      <li> • Audited and restructured campaign messaging</li>
      <li>• Separated short-term and long-term service intent</li>
      <li>• Used real client-owned video creatives</li>
      <li>• Added on-screen text and SEO-focused captions</li>
      <li>• Introduced testimonial and property walkthrough videos</li>
      <li>• Rotated only high-performing creatives</li>
    </ul>
  `,

  result: `
    • Total Leads Generated: 150+ property owner leads<br/>
    • Average CPL:<b> ~$20 </b><br/>
    • CPL Reduction:<b> ~60% </b><br/>
    • Lead Conversion Ratio: 1 confirmed deal per <b> 6 leads </b><br/>
    • Video creatives exceeded <b>3% </b> CTR<br/>
    • High five-figure to six-figure revenue potential generated
  `,

  OverAllResult: `
    150+ 
    Leads in 3 Months
    +1,300% 
    Lead Growth
    $30
    day Budget Efficiency
    $15–$20 
    Average CPL
  `,
  resultImage:["/ResultImage5.png","/ResultImage6.png"]
},{
  id: 4,
  title: "Construction Company",
  slug: "construction-company",
  short: `
    Axiom Structures is a Florida-based structural engineering firm offering high-quality engineering designs, inspections, and consulting services.
  `,
  image: "/UseCase4.png",

  background: `
    <b>Client Industry:</b> <span>Structural Engineering</span><br/>
    <b>Business Type:</b> <span>Engineering & Consulting Firm</span><br/>
    <b>Market:</b> <span>Florida, USA</span><br/><br/>
    Axiom Structures provides professional engineering services for residential and commercial construction projects, focusing on quality, compliance, and long-term structural integrity.
  `,

  service: `
 • Social Media Management Services
  `,

  challenges: `
    <ul>
      <li>❌ Very low social media presence</li>
      <li>❌ Only ~100 Instagram followers</li>
      <li>❌ Inconsistent posting strategy</li>
      <li>❌ Services not visually communicated</li>
    </ul>
  `,

  solutions: `
    <b>Branded Social Content</b><br/>
    <ul>
      <li>• Consistent, on-brand project showcases</li>
      <li>• Clear service highlights with visuals</li>
      <li>• Professional engineering-focused creatives</li>
    </ul>

    <b>Audience Growth Strategy</b><br/>
    <ul>
      <li>• Optimized bio & profile links</li>
      <li>• Strategic hashtags for reach</li>
      <li>• High-performing carousel posts</li>
    </ul>

    • Content was aligned with audience interest to build credibility and engagement
  `,

  result: `
   • Facebook Growth: <b>+353%</b><br/>
   • Instagram Growth: <b> +165% </b><br/>
   • Engagement Surge: Significant monthly increase<br/>
   • Reach Expansion: Multi-platform growth<br/>
   • Facebook Reach: From  <b> 54 to 7.8k </b> in under a year
  `,

  OverAllResult: `
    +353%
    Facebook Growth
    +165%
    Instagram Growth
    18x
    Increased Social Engagement
  `
},{
  id: 5,
  title: "Leadership Consultant",
  slug: "leadership-consultant",
  short: `
    Daryl D. Black is a leadership consultant helping organizations improve decision-making and performance.
  `,
  image: "/UseCase5.png",

  background: `
    <b>Client Industry:</b> <span>Leadership & Executive Coaching</span><br/>
    <b>Business Type:</b> <span>Consultant & Speaker</span><br/>
    <b>Market:</b> <span>United States</span><br/><br/>
    Daryl works with organizations to enhance communication, decision-making, and leadership under pressure.
  `,

  service: `
  •   Social Media Advertising Services
  `,

  challenges: `
    <ul>
      <li>❌ Low brand awareness among new prospects</li>
      <li>❌ Inconsistent qualified lead flow</li>
      <li>❌ Limited daily ad budget</li>
    </ul>
  `,

  solutions: `
    <b>Full-Funnel Facebook Ads</b><br/>
    <ul>
      <li> • Lead generation campaigns</li>
      <li>• Contact form & booking optimization</li>
      <li>•Audience refinement monthly</li>
    </ul>

    <b>Agile Optimization</b><br/>
    <ul>
      <li>• Creative & copy testing</li>
      <li>• Budget-efficient scaling</li>
      <li>• Monthly performance reviews</li>
    </ul>
  `,

  result: `
   • Total Leads: 202 in 10 Months<br/>
   • Growth: <b>+1000%</b> increase in reach & leads<br/>
   • Budget Efficiency:<b> $20/day </b> <br/>
   • Peak Performance:<b> 33 leads </b> in best month
  `,

  OverAllResult: `
    202+
    Leads in 10 Months
    +1000%
    Massive Growth
    $20/day Budget
    Campaign Efficiency
  `
},{
  id: 6,
  title: "Travel Company",
  slug: "travel-company",
  short: `
    A mission-driven travel brand supporting cancer research through bookings.
  `,
  image: "/UseCase6.png",

  background: `
    <b>Client Industry:</b> <span>Travel & Tourism</span><br/>
    <b>Business Type:</b> <span>Mission-Driven Travel Platform</span><br/>
    <b>Market:</b> <span>United States</span><br/><br/>
    Power of Partnerships turns everyday travel bookings into donations for cancer research, without additional cost to travelers.
  `,

  service: `
  •  Social Media Marketing Services
  `,

  challenges: `
    <ul>
      <li>❌ Low engagement across platforms</li>
      <li>❌ Difficulty scaling reach organically</li>
      <li>❌ Inconsistent visibility</li>
    </ul>
  `,

  solutions: `
    <b>Engagement & Growth Strategy</b><br/>
    <ul>
      <li>• Page-like & engagement ad campaigns</li>
      <li>• Reels & TikTok trend-based content</li>
      <li>• Optimized Instagram bio & branding</li>
    </ul>

    • Client collaboration ensured real-time, relevant, and authentic content
  `,

  result: `
   • Facebook Reach:<b> +700k% </b><br/>
   • Facebook Followers: Increased of<b> 2.2k </b><br/>
   • Video Views:<b> 57k+ </b><br/>
   • Instagram Visits:<b> +3k </b><br/>
   • Instagram Followers: Gained nearly <b>500</b><br/>
   • Instagram Interactions: <b>2.5k+</b>
  `,

  OverAllResult: `
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
