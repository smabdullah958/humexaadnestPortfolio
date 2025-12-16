"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TrustSignals = () => {
  const partners = [
    { image: "/Industry1.png", name: "Partner1" },
    { image: "/Industry2.png", name: "Partner2" },
    { image: "/Industry3.png", name: "Partner3" },
    { image: "/Industry4.png", name: "Partner4" },
    { image: "/Industry5.png", name: "Partner5" },
    { image: "/Industry6.png", name: "Partner6" },
  ];

  return (
    <section className="w-full bg-linear-to-br from-purple-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
   
 <div className="max-w-7xl mx-auto mb-12 text-center"> 
   <motion.h2 
    initial={{ opacity: 0, y: -20 }} 
animate={{ opacity: 1, y: 0 }}  
transition={{ duration: 0.6 }} 
 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-700 via-purple-600 to-pink-600 mb-3"  > 
  Trusted by Industry Leaders 
 </motion.h2> 
  <p className="text-gray-600 text-md sm:text-xl"> 
 Partnering with top companies across the United States 
  </p> 
 </div>
      {/* Logo Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-10 border border-gray-200"
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
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
