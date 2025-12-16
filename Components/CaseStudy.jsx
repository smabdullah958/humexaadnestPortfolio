"use client";
import React,{useEffect} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/Components/Services&CaseStudyObject";
import Link from "next/link";
import Aos from "aos";

export default function CaseStudy() {
  return (
    <section
      data-aos="fade-up"
      id="CaseStudy"
      className="max-w-full mx-auto px-6 py-16 bg-gray-200"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col h-full"
          >
            {/* Fixed Image Height */}
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
              
              <span
                dangerouslySetInnerHTML={{ __html: item.service }}
                className="inline-flex w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 rounded-full"
              />

              <h3 className="text-2xl font-bold">{item.title}</h3>

              {/* Short Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.short}
              </p>

              {/* Result */}
              <p
                dangerouslySetInnerHTML={{ __html: item.result }}
                className="text-gray-800 text-sm font-extrabold line-clamp-3"
              />

              {/* Button pushed to bottom */}
              <Link
                href={`/CaseStudy/${item.slug}`}
                className="mt-auto w-full text-center rounded-xl bg-purple-600 hover:bg-purple-700 text-white py-2 text-smhover:bg-gray-800 transition font-bold"
              >
                View Full Case Study
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
