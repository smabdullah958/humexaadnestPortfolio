"use client";

import React, { useState } from "react";
import { FaBullhorn, FaUsersCog, FaCode, FaPalette } from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  let ServicesObject = [
    {
      id: 1,
      name: "Social Media Marketing",
      icon: <FaBullhorn className="text-4xl text-purple-500" />,
      short:
        "High-converting Meta ad campaigns designed for low cost-per-lead and maximum ROI.",
      full: `
• Meta Ads campaign creation & management
• Audience research (Lookalike, Custom, Geo-targeted)
• Ad copywriting & creative design
• A/B testing & optimization
• Retargeting warm audiences
• CRM Integrations (Go High Level, Zapier)
• Analytics, reporting & ROI tracking
      `,
    },
    {
      id: 2,
      name: "Social Media Management",
      icon: <FaUsersCog className="text-4xl text-purple-500" />,
      short:
        "Professional content creation, posting, engagement handling & monthly reporting.",
      full: `
• Content creation & scheduling (FB, IG, LinkedIn)
• Graphic designing (Canva, Photoshop)
• Audience engagement (DMs, comments, replies)
• Monthly content calendar planning
• Reporting & analytics tracking
• Organic growth strategy + occasional ad integration
• Tools: Canva, Meta Business Suite, Google Analytics
      `,
    },
    {
      id: 3,
      name: "Website Development",
      icon: <FaCode className="text-4xl text-purple-500" />,
      short:
        "Fast, mobile-optimized websites built to convert visitors into paying clients.",
      full: `
• Landing pages built for lead capture
• Conversion-focused UI/UX
• Mobile-optimized & fast-loading websites
• CRM / Lead form integration
• Payment gateway setup
• Basic SEO & performance tracking
      `,
    },
    {
      id: 4,
      name: "Web Design",
      icon: <FaPalette className="text-4xl text-purple-500" />,
      short:
        "Modern, attractive and user-friendly UI design for powerful brand identity.",
      full: `
• Creative and modern UI/UX design
• Brand-focused color themes
• Mobile-first layouts
• Eye-catching visual elements
• Improved user experience & engagement
      `,
    },
  ];

  return (
    <div
      id="services"
      className="bg-gray-100 w-full h-full px-6 lg:px-12 py-10 xl:py-16"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
        Explore Our <span className="text-purple-500">Services</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ServicesObject.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gray-200 p-8 rounded-2xl shadow-xl border border-purple-700/20 hover:border-purple-500 hover:scale-105 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-400 transition">
                {item.name}
              </h2>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed">{item.short}</p>

              {/* Show More Button */}
              <button
                className="mt-4 text-purple-600 font-semibold hover:underline"
                onClick={() => setSelectedService(item)}
              >
                Show More
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 mt-5">

          <div className="bg-white rounded-2xl p-6 w-full sm:w-[80%] md:w-[50%] xl:w-[30%] 
          2xl:h-[30%]  shadow-xl animate-fadeIn">
       <div className="flex justify-between gap-1 2xl:py-5">
           <button
  className="mt-0  w-10 h-10 order-2 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition 2xl:text-3xl"
  onClick={() => {setTimeout(() => setSelectedService(null), 200)}}
>
  ×
</button>

            <h2 className="text-2xl 2xl:text-5xl  sm:text-3xl font-extrabold  text-purple-600">
              {selectedService.name}
            </h2>
</div>
<div className="2xl:flex 2xl:justify-center 2xl:text-justify 2xl:items-center">
            <p className="whitespace-pre-line text-gray-700 leading-relaxed 2xl:text-xl">
              {selectedService.full}
            </p>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
