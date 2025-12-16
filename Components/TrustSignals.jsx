"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

  useEffect(() => {
    const updateItems = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 3 : 2);
      setCurrentIndex(0);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + itemsPerSlide;
        return next >= partners.length ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [itemsPerSlide, partners.length]);

  const visiblePartners = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visiblePartners.push(
      partners[(currentIndex + i) % partners.length]
    );
  }

  return (
    <section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 px-4">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 via-purple-600 to-pink-600 mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 text-md sm:text-xl">
          Partnering with top companies across the United States
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-screen mx-auto">
        {/* 🔒 FIXED HEIGHT + RELATIVE */}
        <div className="relative h-[180px] overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={`absolute inset-0 grid gap-6 ${
                itemsPerSlide === 3 ? "grid-cols-3" : "grid-cols-2"
              }`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {visiblePartners.map((item, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex items-center justify-center p-10 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({
          length: Math.ceil(partners.length / itemsPerSlide),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * itemsPerSlide)}
            className={`h-2 rounded-full transition-all ${
              Math.floor(currentIndex / itemsPerSlide) === idx
                ? "w-8 bg-purple-600"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default TrustSignals;
