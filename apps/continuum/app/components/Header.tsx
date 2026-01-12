import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  UserIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col w-full">
      {/* Top Bar - Navy left / Gold right */}
      <div className="w-full relative h-12">
        <div className="absolute inset-0 bg-[#EFBF04]" />
        <div 
          className="absolute top-0 left-0 h-full bg-[#0D1B2A]"
          style={{ 
            width: '65%',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
          }}
        />

        <div className="relative z-10 h-full w-full flex items-center justify-between px-6 lg:px-12 xl:px-20">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs lg:text-sm font-normal whitespace-nowrap">+254 725 332 222</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/40" />
            <div className="hidden sm:flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs lg:text-sm font-normal whitespace-nowrap">info@klockaviation.com</span>
            </div>
            <div className="hidden lg:block w-px h-4 bg-white/40" />
            <div className="hidden lg:flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xs lg:text-sm font-normal whitespace-nowrap">Nairobi, Kenya</span>
            </div>
          </div>

          {/* Right: Login & Social */}
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-[#0D1B2A]" />
              <span className="text-[#0D1B2A] text-xs lg:text-sm font-semibold whitespace-nowrap">Login / Register</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#0D1B2A]/30" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[#0D1B2A] text-xs lg:text-sm font-normal whitespace-nowrap">Follow Us:</span>
              <div className="flex items-center gap-1.5">
                <FacebookIcon className="w-3.5 h-3.5 text-[#0D1B2A] cursor-pointer hover:opacity-70" />
                <TwitterIcon className="w-3.5 h-3.5 text-[#0D1B2A] cursor-pointer hover:opacity-70" />
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0D1B2A] cursor-pointer hover:opacity-70" />
                <InstagramIcon className="w-3.5 h-3.5 text-[#0D1B2A] cursor-pointer hover:opacity-70" />
                <YoutubeIcon className="w-3.5 h-3.5 text-[#0D1B2A] cursor-pointer hover:opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar - White */}
      <div className="w-full bg-white">
        <div className="w-full flex items-center justify-between px-6 lg:px-12 xl:px-20 py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://c.animaapp.com/mka8pwc5Z213Gu/img/png-1-1.png"
              alt="Klock Aviation"
              width={170}
              height={56}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            <button className="text-[#4B5563] hover:text-[#0D1B2A] font-semibold text-base xl:text-lg transition-colors whitespace-nowrap">
              Aviation Services
            </button>
            <button className="text-[#4B5563] hover:text-[#0D1B2A] font-semibold text-base xl:text-lg transition-colors whitespace-nowrap">
              Analytics &amp; Intelligence
            </button>
            <button className="text-[#4B5563] hover:text-[#0D1B2A] font-semibold text-base xl:text-lg transition-colors whitespace-nowrap">
              Infrastructure &amp; ESG
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="h-12 px-8 bg-[#0D1B2A] hover:bg-[#1a2d42] rounded-lg transition-colors">
              <span className="text-white text-base font-medium">Contact Us</span>
            </button>
            <button className="h-12 px-8 bg-[#0D1B2A] hover:bg-[#1a2d42] rounded-lg transition-colors">
              <span className="text-white text-base font-medium">Book Now</span>
            </button>
          </div>

          <button className="lg:hidden p-2">
            <svg className="w-6 h-6 text-[#0D1B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}