"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" 
      className="bg-gray-100 px-6 lg:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2  gap-10">
      <div className="order-1 md:order-2 space-y-5 text-gray-700 flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 ">
          About <span className='text-purple-700'>HUMEXA ADNEST</span>
        </h2>

        <p className="text-lg leading-relaxed text-justify">
          Led by <span className="font-semibold text-purple-700">Humaira</span> — a Meta Ads & 
          Performance Marketing specialist with 3+ years of experience helping US brands grow 
          through precision targeting and psychology-driven campaigns.
        </p>

        <p className="text-lg leading-relaxed text-justify">
          Expert in generating high-quality leads for Home Services, SaaS companies, Law Firms, 
          Real Estate, and Property Management agencies.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 md:order-2 flex justify-center md:justify-start 2xl:justify-center">
        <Image 
          src="/im3.jpeg"
          alt="About Humexaadnest"
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-contain"
        />
      </div>

    </div>
  )
}

export default About
