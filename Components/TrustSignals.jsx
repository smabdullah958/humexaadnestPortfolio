"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCloud, FaBalanceScale, FaBuilding, FaTools } from "react-icons/fa";
import { MdHomeRepairService, MdTrendingUp, MdWorkspacePremium } from "react-icons/md";
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

  const containerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [currentStep, setCurrentStep] = useState(0);
  const [cardGap, setCardGap] = useState(24); // gap-6 = 1.5rem = 24px

  const updateCards = () => {
    if (!containerRef.current) return;
    if (window.innerWidth >= 768) setCardsPerView(3);
    else setCardsPerView(2);
  };

  useEffect(() => {
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const totalCards = industries.length;
      const maxStep = totalCards - cardsPerView;
      setCurrentStep(prev => (prev >= maxStep ? 0 : prev + cardsPerView));
    }, 2500);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Calculate xOffset including gap
  const xOffset = containerRef.current
    ? currentStep * (containerRef.current.offsetWidth / cardsPerView + cardGap)
    : 0;

  return (
    <div className="w-full bg-[#eff4f7] py-10 px-6">
      <h2 className="text-center text-[#12002A] text-2xl sm:text-3xl font-extrabold mb-8">
        Trusted by Industry Leaders Across the US
      </h2>

      <div className="overflow-hidden w-full" ref={containerRef}>
        <motion.div
          className="flex gap-6"
          animate={{ x: -xOffset }}
          transition={{ duration: 0.8 }}
        >
          {industries.map((item, index) => (
            <div
              key={index}
              style={{ minWidth: `${100 / cardsPerView}%` }}
              className="bg-[#d9d9e1] p-6 rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500"
            >
              {item.icon}
              <h3 className="font-bold text-lg text-black">{item.title}</h3>
              <p className="text-sm text-black mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSignals;
