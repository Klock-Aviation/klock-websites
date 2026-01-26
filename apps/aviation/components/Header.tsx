"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Charter Experiences dropdown - ONLY 3 items
const charterDropdown = [
  { name: "Safari & Lifestyle", href: "/charter/safari" },
  { name: "Executive & Diplomatic", href: "/charter/executive" },
  { name: "Fleet", href: "/fleet" },
];

// Asset Solutions dropdown
const assetDropdown = [
  { name: "Aircraft Management", href: "/services/aircraft-management" },
  { name: "Aviation Leasing", href: "/services/aviation-leasing" },
  { name: "Aviation Consulting", href: "/services/aviation-consulting" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [charterOpen, setCharterOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar - Navy left + Gold diagonal right */}
      <div className="w-full h-10 relative overflow-hidden">
        {/* Navy background - full width base */}
        <div className="absolute inset-0 bg-[#00113A]" />
        
        {/* Gold diagonal section on right */}
        <div 
          className="absolute top-0 bottom-0 right-0 bg-[#EFBF04]"
          style={{
            width: '45%',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full text-sm">
            {/* Contact Info - Left (on navy) */}
            <div className="flex items-center gap-4 text-white/90">
              <span>+254 725 332 222</span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="hidden sm:inline">fly@klockaviation.com</span>
              <span className="hidden md:inline text-white/40">|</span>
              <span className="hidden md:inline">Nairobi, Kenya</span>
            </div>
            
            {/* Right side - Login + Social Icons (on gold) */}
            <div className="flex items-center gap-4">
              {/* Login */}
              <Link 
                href="/login" 
                className="flex items-center gap-1.5 text-[#00113A] font-medium hover:text-[#00113A]/70 transition-colors"
              >
                <User className="w-4 h-4" />
                Login / Register
              </Link>
              
              {/* Divider */}
              <span className="hidden md:inline text-[#00113A]/40">|</span>
              
              {/* Follow Us + Social Icons */}
              <div className="hidden md:flex items-center gap-3">
                <span className="text-[#00113A]">Follow Us:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com/klockaviation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00113A] hover:text-[#00113A]/70 transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://twitter.com/klockaviation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00113A] hover:text-[#00113A]/70 transition-colors"
                  >
                    <FaTwitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/klockaviation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00113A] hover:text-[#00113A]/70 transition-colors"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://instagram.com/klockaviation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00113A] hover:text-[#00113A]/70 transition-colors"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/254725332222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00113A] hover:text-[#00113A]/70 transition-colors"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - White */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://c.animaapp.com/mka8pwc5Z213Gu/img/png-1-1.png"
                alt="Klock Aviation"
                width={160}
                height={53}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* 1. Home */}
              <Link 
                href="/" 
                className="text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors"
              >
                Home
              </Link>

              {/* 2. Charter Experiences Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCharterOpen(true)}
                onMouseLeave={() => setCharterOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors">
                  Charter Experiences
                  <ChevronDown className={`w-4 h-4 transition-transform ${charterOpen ? "rotate-180" : ""}`} />
                </button>
                
                {charterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#F3F4F6] py-2 z-50">
                    {charterDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-[#4B5563] hover:bg-[#00113A] hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Asset Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAssetOpen(true)}
                onMouseLeave={() => setAssetOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors">
                  Asset Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${assetOpen ? "rotate-180" : ""}`} />
                </button>
                
                {assetOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#F3F4F6] py-2 z-50">
                    {assetDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-[#4B5563] hover:bg-[#00113A] hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Blog */}
              <Link 
                href="/blog" 
                className="text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors"
              >
                Blog
              </Link>

              {/* 5. About Us */}
              <Link 
                href="/about" 
                className="text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors"
              >
                About Us
              </Link>

              {/* 6. Contact Us */}
              <Link 
                href="/contact" 
                className="text-[#00113A] font-medium text-sm hover:text-[#EFBF04] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Button - NAVY #00113A with WHITE text */}
            <div className="hidden lg:block">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center h-10 px-6 bg-[#00113A] hover:bg-[#001a4d] text-white font-semibold text-sm rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#00113A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#00113A]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#F3F4F6]">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" className="block py-2 text-[#00113A] font-medium">
                Home
              </Link>
              
              {/* Charter Experiences */}
              <div>
                <button 
                  onClick={() => setCharterOpen(!charterOpen)}
                  className="flex items-center justify-between w-full py-2 text-[#00113A] font-medium"
                >
                  Charter Experiences
                  <ChevronDown className={`w-4 h-4 transition-transform ${charterOpen ? "rotate-180" : ""}`} />
                </button>
                {charterOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {charterDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1.5 text-sm text-[#4B5563] hover:text-[#00113A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Asset Solutions */}
              <div>
                <button 
                  onClick={() => setAssetOpen(!assetOpen)}
                  className="flex items-center justify-between w-full py-2 text-[#00113A] font-medium"
                >
                  Asset Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${assetOpen ? "rotate-180" : ""}`} />
                </button>
                {assetOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {assetDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-1.5 text-sm text-[#4B5563] hover:text-[#00113A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className="block py-2 text-[#00113A] font-medium">
                Blog
              </Link>

              <Link href="/about" className="block py-2 text-[#00113A] font-medium">
                About Us
              </Link>

              <Link href="/contact" className="block py-2 text-[#00113A] font-medium">
                Contact Us
              </Link>

              {/* Mobile CTA - NAVY with WHITE text */}
              <Link
                href="/get-started"
                className="block w-full text-center py-3 bg-[#00113A] text-white font-semibold rounded-full mt-4"
              >
                Get Started
              </Link>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                <a href="https://facebook.com/klockaviation" target="_blank" rel="noopener noreferrer" className="text-[#00113A]">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://twitter.com/klockaviation" target="_blank" rel="noopener noreferrer" className="text-[#00113A]">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/klockaviation" target="_blank" rel="noopener noreferrer" className="text-[#00113A]">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://instagram.com/klockaviation" target="_blank" rel="noopener noreferrer" className="text-[#00113A]">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/254725332222" target="_blank" rel="noopener noreferrer" className="text-[#00113A]">
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}