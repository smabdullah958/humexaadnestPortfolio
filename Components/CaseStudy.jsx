"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/Components/Services&CaseStudyObject";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <section id="CaseStudy" className="max-w-full mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Case Studies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={200}
              loading="lazy"
              className="w-full object-cover"
            />

            <div className="p-6 space-y-4">
               <span className="inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 rounded-full ">
                {item.service}
              </span>

              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{item.short}</p>

 
              <p className="text-gray-800 text-sm pt-2 font-extrabold line-clamp-3">
                Our Services generated {item.result}</p>

              <Link href={`/CaseStudy/${item.slug}`} className="mt-4 w-full rounded-xl bg-black text-white py-2 text-sm hover:bg-gray-800 transition px-4">
                View Full Case Study
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
