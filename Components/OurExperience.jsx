"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const OurExperience = () => {
  return (
    <div className="bg-[#eff4f7] text-black  py-12 px-6">
      <div className="max-w-screen mx-auto text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
        >
          Our Experience
        </motion.h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* 5+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300 border border-purple-200"
          >
            <h2 className="text-5xl font-extrabold text-black ">
              <CountUp end={3} duration={3} enableScrollSpy />+
            </h2>
            <p className="text-lg mt-2 text-gray-800">Years of Experience</p>
          </motion.div>

          {/* 30+ Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300 border border-purple-200"
          >
            <h2 className="text-5xl font-extrabold text-black ">
              <CountUp end={30} duration={3} enableScrollSpy />+
            </h2>
            <p className="text-lg mt-2 text-gray-800">Completed Projects</p>
          </motion.div>

          {/* 90% Happy Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition duration-300 border border-purple-200"
          >
            <h2 className="text-5xl font-extrabold text-black ">
              <CountUp end={90} duration={3} enableScrollSpy />%
            </h2>
            <p className="text-lg mt-2 text-gray-800">Happy Clients</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default OurExperience;
