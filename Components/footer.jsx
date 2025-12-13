'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#002D62] text-white">
      <div className="container mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <Image
              src="/A1.png"
              alt="Humexa AdNest Logo"
              width={200}
              height={200}
              className="rounded-full shadow-lg border-2 border-[#D4AF37] bg-blue-200 mb-5"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-[#8e8a8a] transition-colors">
                About Us
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-[#8e8a8a] transition-colors">
                Services
              </Link>
              <Link href="#Pricing" className="block text-gray-300 hover:text-[#8e8a8a] transition-colors">
                Pricing
              </Link>
              <Link href="#Projects" className="block text-gray-300 hover:text-[#8e8a8a] transition-colors">
                Projects
              </Link>
              <Link href="#Contact" className="block text-gray-300 hover:text-[#8e8a8a] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <Link
                href="/Services/social-media-management"
                className="block text-gray-300 hover:text-[#8e8a8a] transition-colors"
              >
                Social Media Management
              </Link>
              <Link
                href="/Services/social-media-marketing-ads"
                className="block text-gray-300 hover:text-[#8e8a8a] transition-colors"
              >
                Social Media Marketing & Ads
              </Link>
              <Link
                href="/Services/website-development"
                className="block text-gray-300 hover:text-[#8e8a8a] transition-colors"
              >
                Website Development
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/humexa.adnest"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-gradient-to-tr hover:from-pink-50 hover:to-purple-600
                hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-white text-lg" />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/Humexa.adnest"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/2 hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook className="text-white text-lg" />
              </Link>

            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm">
                © 2025 Humexa AdNest. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-4 mt-2">
                <Link href="/privacy" className="text-xs text-gray-400 hover:text-[#D4AF37]">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs text-gray-400 hover:text-[#D4AF37]">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-xs text-gray-400 hover:text-[#D4AF37]">
                  Cookie Policy
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
