"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TrustSignals = () => {
  const industries = [
    { image: "/Industry1.png", name: "Partner 1" },
    { image: "/Industry2.png", name: "Partner 2" },
    { image: "/Industry3.png", name: "Partner 3" },
    { image: "/Industry4.png", name: "Partner 4" },
    { image: "/Industry5.png", name: "Partner 5" },
    { image: "/Industry6.png", name: "Partner 6" },
  ];

  const [cardsPerView, setCardsPerView] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive cards
  useEffect(() => {
    const resize = () => {
     if (window.innerWidth >= 768) {
        setCardsPerView(3);
      } else {
        setCardsPerView(2);
      }
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
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cardsPerView, industries.length]);

  return (
    <div className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 via-purple-600 to-pink-600 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Partnering with top companies across the United States
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="max-w-full mx-auto">
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{
              x: `-${(currentIndex * 100) / cardsPerView}%`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {industries.map((item, index) => (
              <div
                key={index}
                className="shrink-0 px-2 sm:px-4"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 h-32 sm:h-36 flex items-center justify-center group relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={80}
                      className="w-auto h-16 sm:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Subtle Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(industries.length / cardsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? "bg-purple-600 w-8"
                    : "bg-purple-300 hover:bg-purple-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default TrustSignals;