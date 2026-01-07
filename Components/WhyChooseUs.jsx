"use client"
import Image from "next/image";
import Aos from 'aos';
import React,{useEffect} from "react";

const WhyChooseUs = () => {
  return (
    <div
      data-aos="fade-down"
    className="bg-[#F4F4F5] px-6 lg:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-14 ">
      
      {/* right TEXT SECTION */}
      <div className="order-1 md:order-2 space-y-6">
        
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-purple-600">HUMEXA ADNEST</span>?
        </h2>

        <p className="text-gray-600 text-lg">
          Proven strategies, guaranteed results & cost-effective lead generation
        </p>

        <ul className="space-y-4 text-gray-700 text-lg">
          
          <li className="flex gap-3">
            <span className="text-purple-600 text-2xl">✔</span>
            <p>
              <span className="font-semibold">Proven Lead Generation Expertise</span>
              <span className="text-black font-bold"> 3+ years </span> running US-based Meta Ads that lower CPL by <span className="text-purple-600 font-bold"> 30–50% </span> while maximizing ROI.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-purple-600 text-2xl">✔</span>
            <p>
              <span className="font-semibold">Guaranteed Lead Efficiency </span> 
              For services priced at <span className="text-purple-600 font-bold"> $100–$500+ </span>, 1 confirmed client usually costs only <span className="text-purple-600 font-bold"> $10–$40
                 </span> in ads.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-purple-600 text-2xl">✔</span>
            <p>
              <span className="font-semibold">Industry-Specific Advantage </span>
              Specialized in Home Services, POS SaaS, Law Firms & Property Management with ready-to-run winning campaign frameworks.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-purple-600 text-2xl">✔</span>
            <p>
              <span className="font-semibold">Data-Driven Strategy </span> 
              No guesswork. Every campaign is built using analytics, historical performance & proven optimization techniques.
            </p>
          </li>

          <li className="flex gap-3">
            <span className="text-purple-600 text-2xl">✔</span>
            <p>
              <span className="font-semibold">Organic + Paid Synergy </span> 
              We combine Meta Ads with organic engagement to boost conversions and long-term retention.
            </p>
          </li>

        </ul>

      </div>

      {/* left IMAGE */}
      <div className="order-2 md:order-1 flex justify-center md:justify-center">
        <Image
          src="/A1.png"
          alt="Why Choose Humexa.Adnest"
          width={520}
          height={520}
          className="rounded-2xl shadow-xl object-cover"
        />
      </div>

    </div>
  );
};

export default WhyChooseUs;
