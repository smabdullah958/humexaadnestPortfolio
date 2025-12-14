"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "James R.", role: "HVAC – TX", text: "CPL dropped 45%. Booked jobs only." },
  { name: "Sarah M.", role: "Law Firm – CA", text: "Consistent qualified consultations." },
  { name: "Daniel K.", role: "POS SaaS – NY", text: "35% lower CPL in first month." },
  { name: "Michael T.", role: "Property – FL", text: "Scaled tenant leads efficiently." },
  { name: "Alex B.", role: "Plumbing – IL", text: "Daily leads, profitable ads." },
  { name: "Robert L.", role: "Roofing – AZ", text: "Higher booking rate, lower CPL." },
  { name: "Emily S.", role: "SaaS – USA", text: "Clear reporting and ROI." },
  { name: "Kevin D.", role: "Local Business – NV", text: "Paid + organic worked perfectly." },
];

export default function OurValueableClient() {
  const containerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentStep, setCurrentStep] = useState(0);
  const cardGap = 24; // gap-6 = 24px

  // Responsive cards per view
  useEffect(() => {
    const updateCards = () => setCardsPerView(window.innerWidth >= 768 ? 4 : 2);
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      const totalSteps = Math.ceil(reviews.length / cardsPerView);
      setCurrentStep(prev => (prev + 1) % totalSteps);
    }, 2000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Calculate offset for full slide
  const xOffset = containerRef.current
    ? currentStep * (containerRef.current.offsetWidth + cardGap)
    : 0;

  return (
    <section className="bg-gray-200 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden w-full" ref={containerRef}>
        <motion.div
          className="flex gap-6"
          animate={{ x: -xOffset }}
          transition={{ duration: 0.8 }}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white sm:p-3 pt-2  rounded-2xl shadow-md shrink-0"
              style={{ width: `calc(${100 / cardsPerView}% - ${cardGap * (cardsPerView - 1) / cardsPerView}px)` }}
            >
               <h4 className="font-semibold text-gray-900 text-center">{item.name}</h4>
              <p className="text-xs text-gray-500 text-center">{item.role}</p>
              <div className="flex text-yellow-400 mb-3 justify-center">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">“{item.text}”</p>
             
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
