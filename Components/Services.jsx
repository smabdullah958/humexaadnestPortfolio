"use client";
import Link from "next/link";
import React from "react";
import { ServicesObject } from "@/Components/Services&CaseStudyObject";
const Services = () => {
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
              <p className="text-gray-600 leading-relaxed text-justify">{item.short}</p>

              {/* Show More Button */}
              <Link
                href={`/Services/${item.slug}`}
                className="mt-4 text-purple-600 font-semibold hover:underline"
                
              >
                Show More
              </Link>
            </div>
          ); 
        })}
      </div>

    </div>

);
};

export default Services;
