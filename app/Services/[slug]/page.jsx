"use client";
import React from "react";
import Image from "next/image";
import { ServicesObject } from "@/Components/ServicesObject";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceDetails({ params }) {
  const {slug} =React.use(params);
  const service = ServicesObject.find((s) => s.slug == slug);

  if (!service) {
    return <div className="p-10 text-red-600 text-center">Service Not Found</div>;
  }

  // Split full text into sections
  const sections = service.full.split("\n\n");

  return (
    <div className="bg-gray-100 py-16 ">
      {/* Premium Title */}
      <h1 className="text-center text-4xl font-extrabold text-gray-900 bg-clip-text pt-10 xl:pt-14 2xl:pt-40">
        {service.name}
      </h1>

      {/* Short + Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-around mt-12 pr-5 md:px-6 gap-x-10">
        {/* Short Description */}
        <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed xl:w-[50%] 2xl:w-[30%] pl-10 2xl:text-xl whitespace-pre-line text-justify" >
          {service.short}
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={service.image}
            alt={service.name}
            width={500}
            height={200}
            loading="lazy"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-5xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-extrabold text-purple-600 text-center mb-10">
          What We Offer
        </h2>

        {/* Card Container */}
        <div className="bg-white p-5 md:p-10 text-justify rounded-3xl shadow-lg border border-gray-200">
          {sections.map((sec, i) => (
            <div key={i} className="mb-10">
              {/* Section Title */}
              {sec.startsWith("Key Points:") && (
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Points
                </h3>
              )}

              {sec.startsWith("Tools We Use:") && (
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tools We Use
                </h3>
              )}

              {/* Bullet List */}
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed ml-2">
                {sec
                  .replace("Key Points:", "")
                  .replace("Tools We Use:", "")
                  .trim()
                  .split("•")
                  .filter((item) => item.trim() !== "")
                  .map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-500 mt-1" />
                      {point.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
