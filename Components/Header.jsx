
"use client"
// import Image from 'next/image'
import { FaBars, FaTimes } from "react-icons/fa"; // FaBars = burger icon, FaTimes = close icon
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";

const Header = () => {
  let [show, setshow] = useState(false)

  let CloseNavBar=()=>{
    setTimeout(() => {
      setshow(false)
    }, 1000);
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden 2xl:h-40 sm:flex sm:items-center sm:justify-between bg-[#ece7e7] sm:w-full sm:px-5 md:py-3 sm:shadow-md sm:fixed sm:top-0 z-50 h-20'>

      {/* Logo */}
              <div>
                <Image
                  src="/Logo.png"
                  alt="Humexa AdNest Logo"
                  width={100}
                  height={100}
                />
              </div>
        
      <div className='flex sm:gap-x-3 md:gap-x-7 lg:gap-x-10 justify-end items-center '>
        
        <Link href="/#about" className='sm:text-sm md:text-lg text-gray-800 hover:text-gray-900 text-md font-medium transition-all duration-300  hover:scale-110'>About</Link>
        
        <Link href="/#services" className='sm:text-sm md:text-lg text-gray-800 hover:text-gray-900 text-md font-medium transition-all duration-300  hover:scale-110'>
        Services</Link>
        
         <Link href="/#CaseStudy" className='sm:text-sm md:text-lg text-gray-800 hover:text-gray-900 text-md font-medium transition-all duration-300  hover:scale-110'>
         Case Study</Link>  
        
        <Link href="/#Pricing" className='sm:text-sm md:text-lg text-gray-800 hover:text-gray-900 text-md font-medium transition-all duration-300  hover:scale-110'>
        Pricing</Link>
        
        <Link href="/#Contact" className='sm:text-sm md:text-lg text-gray-800 hover:text-gray-900 text-md font-medium transition-all duration-300  hover:scale-110 mr-5'>
        Contact</Link>
      
      </div>
<Link href="https://wa.me/923206841237?text=Hi%20I%20want%20to%20book%20a%2015-minute%20call."
  target="_blank"
  className="sm:hidden md:text-[10px]  lg:text-sm md:block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition">Get Free Consultation</Link>
      </div>

      {/* Mobile Navbar */}
      <div className='sm:hidden flex items-center justify-between bg-[#ece7e7]  w-full px-5 py-3 shadow-md fixed top-0 z-50 h-20'>
      
      {/* Logo */}
              <div>
                <Image
                  src="/Logo.png"
                  alt="Humexa AdNest Logo"
                  width={100}
                  height={100}
                />
              </div>

        {/* Burger button */}
        {/* if show false than display the burger button if a show is true than a display teh burger button  */}
      {(show===false)? 
       (
          <FaBars size={28} onClick={() => setshow(true)} className="cursor-pointer text-gray-800" />
        ):
         (<FaTimes size={28} onClick={() => setshow(false)} className="cursor-pointer text-gray-800" />
        )

        }
      
      </div>    

      {/* Mobile menu dropdown */}
      {show && (
        <div className='sm:hidden w-full flex flex-col  items-center p-6 space-y-4 fixed top-14 shadow-lg z-50 bg-[#ece7e7] '>
          <Link href="/#about" onClick={CloseNavBar} className='text-gray-800 text-lg font-medium transition-all duration-300 hover:text-gray-900 hover:scale-105'>
          About</Link>
          
          <Link href="/#services" onClick={CloseNavBar} className='text-gray-800  text-lg font-medium transition-all duration-300 hover:text-gray-900 hover:scale-105'>
          Services</Link>
          
          <Link href="/#CaseStudy" onClick={CloseNavBar} className='text-gray-800 text-lg font-medium transition-all duration-300 hover:text-gray-900 hover:scale-105'>
          Case Study</Link>
          
          <Link  href="/#Pricing" onClick={CloseNavBar} className='text-gray-800 text-lg font-medium transition-all duration-300 hover:text-gray-900 hover:scale-105'>
          Pricing</Link>
          
          <Link href="/#Contact" onClick={CloseNavBar} className='text-gray-800 text-lg font-medium transition-all duration-300 hover:text-gray-900 hover:scale-105'>
          Contact</Link>
        </div>
      )}
      
    </>
  )
}

export default Header