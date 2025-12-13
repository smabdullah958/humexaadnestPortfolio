'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="bg-[#002D62] text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-1 sm:grid-cols-3 gap-8">
          <div>
            <Image src="/A1.png" alt="WorldLink Exports Logo" width={200} height={200} className="rounded-full shadow-lg border-2 border-[#D4AF37] bg-blue-200 mb-5"/>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">About Us</Link>
              <Link href="#services" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Services</Link>
              <Link href="#Pricing" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Pricing</Link>
              <Link href="#Projects" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Projects</Link>
              <Link href="#Contact" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <Link href="/Services/social-media-management" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Social Media Management</Link>
              <Link href="/Services/social-media-marketing-ads" className="block text-gray-300 hover:text-[#000000] transition-colors cursor-pointer">Social Media Marketing & Ads</Link>
              <Link href="/Services/website-development" className="block text-gray-300 
              hover:text-[#000000] transition-colors cursor-pointer">Website Development</Link>
              </div>
          </div>
        </div> 

        <div className="border-t border-white/20 mt-12 pt-8  ">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div className="flex flex-wrap items-center space-x-6 mb-4 lg:mb-0 gap-6">
              <div className="flex items-center space-x-2 pl-7">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-shield-check-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-award-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">WTO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <i className="ri-global-line text-sm"></i>
                </div>
                <span className="text-sm text-gray-300">Global Trade</span>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm">
                © 2025 humexaadnest. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mt-2">
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Terms of Service</Link>
                <Link href="/cookies" className="text-xs text-gray-400 hover:text-[#D4AF37] cursor-pointer">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}