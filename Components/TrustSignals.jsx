"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaBalanceScale,
  FaBuilding,
  FaTools,
} from "react-icons/fa";
import {
  MdHomeRepairService,
  MdTrendingUp,
  MdWorkspacePremium,
} from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const TrustSignals = () => {
  const industries = [
    { icon: <MdHomeRepairService className="text-gray-400 text-3xl mb-3" />, title: "Home Services", desc: "Contractors, Roofers, Cleaning, HVAC" },
    { icon: <FaCloud className="text-gray-400 text-3xl mb-3" />, title: "POS SaaS", desc: "POS Systems, SaaS Subscriptions" },
    { icon: <FaBalanceScale className="text-gray-400 text-3xl mb-3" />, title: "Law Firms", desc: "Family Law, Lawyers, Attorneys" },
    { icon: <FaBuilding className="text-gray-400 text-3xl mb-3" />, title: "Property Management", desc: "Real Estate & Rental Agencies" },
    { icon: <FaTools className="text-gray-400 text-3xl mb-3" />, title: "Maintenance Services", desc: "Plumbing, Electrical, Handyman" },
    { icon: <MdTrendingUp className="text-gray-400 text-3xl mb-3" />, title: "100k+ Revenue", desc: "Generated for US Clients" },
    { icon: <MdWorkspacePremium className="text-gray-400 text-3xl mb-3" />, title: "10–$20 CPL", desc: "Average Cost Per Lead" },
    { icon: <RiVerifiedBadgeFill className="text-gray-400 text-3xl mb-3" />, title: "Meta Certified", desc: "Professional Ads Specialist" },
  ];

  const [cardsPerView, setCardsPerView] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive cards
  useEffect(() => {
    const resize = () => {
      setCardsPerView(window.innerWidth >= 768 ? 4 : 2);
      setCurrentIndex(0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Auto slide
  useEffect(() => {
    const maxIndex = industries.length - cardsPerView;
    if (maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + cardsPerView
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <div className="w-full bg-[#eff4f7] py-10 px-6">
      <h2 className="text-center text-[#12002A] text-2xl sm:text-3xl font-extrabold mb-8">
        Trusted by Industry Leaders Across the US
      </h2>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          animate={{
            x: `-${(currentIndex * 100) / cardsPerView}%`,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-[#d9d9e1] p-2 text-justify rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500 h-full">
                {item.icon}
                <h3 className="font-bold text-lg text-black whitespace-normal break-words">{item.title}</h3>
                <p className="text-sm text-black mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSignals;
