"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPin,
  Phone,
  Mail,
  Plane,
  BarChart3,
  Leaf,
} from "lucide-react";

const businessLines = [
  {
    name: "Aviation Services",
    description:
      "Premium charter flights and comprehensive aircraft management solutions across Africa.",
    href: "https://fly.klockaviation.com",
    icon: Plane,
    iconBg: "bg-[#EFBF04]/20",
    iconColor: "text-[#EFBF04]",
  },
  {
    name: "Intelligence",
    description:
      "Data-driven analytics and corporate travel platforms that transform operations.",
    href: "https://intelligence.klockaviation.com",
    icon: BarChart3,
    iconBg: "bg-[#06B6D4]/20",
    iconColor: "text-[#06B6D4]",
  },
  {
    name: "Sustainable",
    description:
      "ESG solutions and carbon offsetting for responsible aviation practices.",
    href: "https://sustainable.klockaviation.com",
    icon: Leaf,
    iconBg: "bg-[#10B981]/20",
    iconColor: "text-[#10B981]",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A131F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-12">
        {/* Top Row: Logo & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/klock-logo-white.png"
              alt="Klock Aviation"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-[#EFBF04] text-sm italic">
                Connecting Sky, Data, and Earth
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/klockaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#EFBF04] hover:text-[#0A131F] transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/klockaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#EFBF04] hover:text-[#0A131F] transition-all"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/company/klockaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#EFBF04] hover:text-[#0A131F] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/klockaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#EFBF04] hover:text-[#0A131F] transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/klockaviation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#EFBF04] hover:text-[#0A131F] transition-all"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Tagline */}
        <p className="text-[#EFBF04] text-sm italic text-center mt-6 sm:hidden">
          Connecting Sky, Data, and Earth
        </p>

        {/* Business Lines Section */}
        <div className="py-10">
          <h4 className="text-center text-white text-sm uppercase tracking-wider font-semibold mb-8">
            Explore Our Business Lines
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessLines.map((line) => {
              const IconComponent = line.icon;
              return (
                <a
                  key={line.name}
                  href={line.href}
                  className="group bg-[#111D2C] rounded-xl p-6 text-center border border-transparent hover:border-[#EFBF04] transition-all hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${line.iconBg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`w-7 h-7 ${line.iconColor}`} />
                  </div>
                  <h5 className="text-white font-semibold text-base mb-2">
                    {line.name}
                  </h5>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {line.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4 text-[#EFBF04]" />
            <span>Nairobi, Kenya</span>
          </div>
          <a
            href="tel:+254725332222"
            className="flex items-center gap-2 text-white/60 hover:text-[#EFBF04] transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-[#EFBF04]" />
            <span>+254 725 332 222</span>
          </a>
          <a
            href="mailto:info@klockaviation.com"
            className="flex items-center gap-2 text-white/60 hover:text-[#EFBF04] transition-colors text-sm"
          >
            <Mail className="w-4 h-4 text-[#EFBF04]" />
            <span>info@klockaviation.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Klock Aviation Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/cookies"
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}