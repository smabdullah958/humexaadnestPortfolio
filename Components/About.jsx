"use client"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div 
      id="about" 
      className="bg-gray-100 px-6 lg:px-12 py-10 2xl:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
    >
      
      {/* LEFT TEXT SECTION */}
      <div className="order-2 ">
        <h1 className="text-gray-900 font-extrabold text-2xl sm:text-3xl xl:text-4xl pb-4">
          What our <span className="text-purple-500">Agency</span> can do for your business
        </h1> 

        <p className="text-gray-700 leading-relaxed text-md sm:text-lg 2xl:w-[30vw]">
          Whether you're an eCommerce brand looking to boost sales, a tech startup aiming for rapid growth, 
          or a local service provider wanting to expand your reach — digital marketing can make it happen.
          <br/><br/>
          At <span className="font-semibold">Humexaadnest</span>, we transform brands through data-driven marketing 
          and world-class digital execution. Whether you need high-impact ad campaigns, complete social media management, 
          or a professionally designed and developed website, our team delivers tailored solutions that elevate your business.
          <br/><br/>
          We focus on growth, visibility, and long-term success — so your brand stands out in a competitive digital world.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="order-2 md:order-1 flex justify-center md:justify-start 2xl:justify-center">
        <Image 
          src="/A1.png"
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
