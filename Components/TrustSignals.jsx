"use client";
import React from "react";
import { FaCloud,FaBalanceScale,FaBuilding} from "react-icons/fa";
import { MdTrendingUp, MdWorkspacePremium,MdHomeRepairService  } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const TrustSignals = () => {
  return (
    <div className="w-full bg-[#eff4f7] py-10 px-6">
      {/* Heading */}
      <h2 className="text-center  text-[#12002A] text-2xl sm:text-3xl font-extrabold mb-8">
        Trusted by Industry Leaders Across the US
      </h2>

      {/* Industries Section */}
      <div className="max-w-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        <div className="bg-[#d9d9e1] p-6 rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500">
          <MdHomeRepairService  className="text-gray-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-black">Home Services</h3>
          <p className="text-sm text-black mt-1">Contractors, Roofers, Cleaning, HVAC</p>
        </div>

        <div className="bg-[#d9d9e1] p-6 rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500">
          <FaCloud className="text-gray-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-black">POS SaaS</h3>
          <p className="text-sm text-black mt-1">POS Systems, SaaS Subscriptions</p>
        </div>
        <div className="bg-[#d9d9e1] p-6 rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500">
          <FaBalanceScale  className="text-gray-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-black">Law Firms</h3>
          <p className="text-sm text-black mt-1">Family Law, Lawyers, Attorneys</p>
        </div>

        <div className="bg-[#d9d9e1] p-6 rounded-xl shadow-lg border border-purple-700/20 hover:scale-105 transition duration-500">
          <FaBuilding  className="text-gray-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-black">Property Management</h3>
          <p className="text-sm text-black mt-1">Real Estate & Rental Agencies</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-screen mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
        <div className="bg-[#d9d9e1] p-6 rounded-xl text-center border border-purple-700/20 hover:scale-105 transition duration-500">
          <MdTrendingUp className="text-gray-400 text-4xl mb-3 mx-auto" />
          <h3 className="text-2xl font-bold text-black">$100k+ Revenue</h3>
          <p className="text-sm text-black mt-1">Generated for US Clients</p>
        </div>

        <div className="bg-[#d9d9e1] p-6 rounded-xl text-center border border-purple-700/20 hover:scale-105 transition duration-500">
          <MdWorkspacePremium className="text-gray-400 text-4xl mb-3 mx-auto" />
          <h3 className="text-2xl font-bold text-black">$10–$20 CPL</h3>
          <p className="text-sm text-black mt-1">Average Cost Per Lead</p>
        </div>

        <div className="bg-[#d9d9e1] p-6 rounded-xl text-center border border-purple-700/20 hover:scale-105 transition duration-500">
          <RiVerifiedBadgeFill className="text-gray-400 text-4xl mb-3 mx-auto" />
          <h3 className="text-2xl font-bold text-black">Meta Certified</h3>
          <p className="text-sm text-black mt-1">Professional Ads Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
