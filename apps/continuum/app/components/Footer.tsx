import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1B2A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="https://c.animaapp.com/mka8pwc5Z213Gu/img/png-1-1.png"
              alt="Klock Aviation"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="text-[#EFBF04] text-sm italic">
              Connecting Sky, Data, and Earth
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FacebookIcon className="w-5 h-5 text-white/60 hover:text-[#EFBF04] cursor-pointer transition-colors" />
            <TwitterIcon className="w-5 h-5 text-white/60 hover:text-[#EFBF04] cursor-pointer transition-colors" />
            <LinkedinIcon className="w-5 h-5 text-white/60 hover:text-[#EFBF04] cursor-pointer transition-colors" />
            <InstagramIcon className="w-5 h-5 text-white/60 hover:text-[#EFBF04] cursor-pointer transition-colors" />
            <YoutubeIcon className="w-5 h-5 text-white/60 hover:text-[#EFBF04] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Klock Aviation Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}