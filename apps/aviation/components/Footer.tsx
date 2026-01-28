"use client";

import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const charterServices = [
  { label: "Safari", href: "/charters/safari" },
  { label: "Executive", href: "/charters/executive" },
  { label: "Fleet", href: "/charters/fleet" },
];

const assetSolutions = [
  { label: "Aircraft Management", href: "/services/aircraft-management" },
  { label: "Aviation Leasing", href: "/services/aviation-leasing" },
  { label: "Aviation Consulting", href: "/services/aviation-consulting" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full" style={{ backgroundColor: '#0A192F' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/klock-logo-white.png"
                alt="Klock Aviation"
                style={{ height: "48px", width: "auto" }}
              />
            </Link>
            <p 
              className="text-sm mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#EFBF04', fontStyle: 'italic' }}
            >
              Where Flight Begins
            </p>
            <p 
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)' }}
            >
              Premium charter services and aircraft management across Africa.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FacebookIcon, href: "https://facebook.com/klockaviation" },
                { icon: TwitterIcon, href: "https://twitter.com/klockaviation" },
                { icon: LinkedinIcon, href: "https://linkedin.com/company/klockaviation" },
                { icon: InstagramIcon, href: "https://instagram.com/klockaviation" },
                { icon: YoutubeIcon, href: "https://youtube.com/klockaviation" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-[#EFBF04] hover:text-[#0D1B2A]"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Charter Services Column */}
          <div>
            <h4 
              className="text-sm mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              Charter Services
            </h4>
            <ul className="space-y-3">
              {charterServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-[#EFBF04]"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: '#EFBF04' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Asset Solutions + Company Column */}
          <div>
            <h4 
              className="text-sm mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              Asset Solutions
            </h4>
            <ul className="space-y-3">
              {assetSolutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-[#EFBF04]"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: '#EFBF04' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 
              className="text-sm mt-6 mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-[#EFBF04]"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: '#EFBF04' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 
              className="text-sm mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors hover:text-[#EFBF04]"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: '#EFBF04' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 
              className="text-sm mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#EFBF04' }} />
                <span 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
                >
                  P.O. Box 2200-00606,
                  <br />
                  Nairobi, Kenya
                </span>
              </div>
              <a
                href="tel:+254725332222"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#EFBF04]"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
              >
                <Phone className="w-4 h-4" style={{ color: '#EFBF04' }} />
                +254 725 332 222
              </a>
              <a
                href="mailto:fly@klockaviation.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#EFBF04]"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
              >
                <Mail className="w-4 h-4" style={{ color: '#EFBF04' }} />
                fly@klockaviation.com
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/254725332222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-4 py-2.5 rounded-md transition-colors text-sm mt-2 hover:opacity-90 whitespace-nowrap"
                style={{ backgroundColor: '#078800', fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.4)' }}
            >
              © {currentYear} Klock Aviation Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm transition-colors hover:text-white"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.4)' }}
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm transition-colors hover:text-white"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.4)' }}
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm transition-colors hover:text-white"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.4)' }}
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #0EA5E9 0%, #EFBF04 100%)' }}
      />
    </footer>
  );
}