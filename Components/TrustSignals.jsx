"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TrustSignals = () => {
  const partners = [
    { image: "/Industry1.png", name: "Partner1" },
    { image: "/Industry2.png", name: "Partner2" },
    { image: "/Industry3.png", name: "Partner3" },
    { image: "/Industry4.png", name: "Partner4" },
    { image: "/Industry5.png", name: "Partner5" },
    { image: "/Industry6.png", name: "Partner6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  // Detect screen size
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 768) {
        setItemsPerSlide(3); // md & above
      } else {
        setItemsPerSlide(2); // mobile
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + itemsPerSlide) % partners.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [itemsPerSlide, partners.length]);

  const visiblePartners = partners.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 px-4">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 via-purple-600 to-pink-600 mb-3"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <p className="text-gray-600 text-md sm:text-xl">
          Partnering with top companies across the United States
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 ${
              itemsPerSlide === 3 ? "grid-cols-3" : "grid-cols-2"
            }`}
          >
            {visiblePartners.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-10 border border-gray-200 bg-white rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrustSignals;
