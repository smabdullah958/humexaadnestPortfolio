"use client";
import React from "react";
import { FaBullhorn, FaUsersCog, FaCode, FaPalette } from "react-icons/fa";

const Services = () => {
  let ServicesObject = [
    {
      id: 1,
      name: "Social Media Marketing",
      icon: <FaBullhorn className="text-4xl text-purple-500" />,
      description:
        "We help businesses reach the right audience with powerful ad campaigns, targeted promotions, and growth strategies.",
    },
    {
      id: 2,
      name: "Social Media Management",
      icon: <FaUsersCog className="text-4xl text-purple-500" />,
      description:
        "We manage your social media pages, create engaging content, schedule posts, and analyze insights for growth.",
    },
    {
      id: 3,
      name: "Website Development",
      icon: <FaCode className="text-4xl text-purple-500" />,
      description:
        "We build fast, secure, SEO-optimized websites designed to help your business scale and convert more clients.",
    },
    {
      id: 4,
      name: "Web Design",
      icon: <FaPalette className="text-4xl text-purple-500" />,
      description:
        "We design modern, beautiful, and user-friendly UI that enhances brand identity and improves user experience.",
    },
  ];

  return (
    <div id="services" className="bg-gray-100 w-full h-full px-6 lg:px-12 py-10 xl:py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
        Explore Our <span className="text-purple-500">Services</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ServicesObject.map((item) => {
          return (
            <div key={item.id} className="bg-gray-200 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-700/30 hover:border-purple-500 hover:scale-105 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-400 transition">
                {item.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
