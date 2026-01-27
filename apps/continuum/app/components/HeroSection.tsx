"use client";

import { PlayIcon, ChevronDownIcon } from "lucide-react";

export default function HeroSection() {
  const scrollToForces = () => {
    const element = document.getElementById("three-forces");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center px-6 lg:px-12 xl:px-20 overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-continuum.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a131f]/60 to-[#0a131f]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full max-w-6xl mx-auto items-center gap-6 text-center">
        {/* Subtitle */}
        <p className="text-[#EFBF04] text-sm md:text-base lg:text-lg tracking-[4px] uppercase">
          THE KLOCK CONTINUUM
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
          <span className="text-white">We don&apos;t just fly. </span>
          <span className="text-[#EFBF04]">We connect everything</span>
          <span className="text-white"> that makes flight possible.</span>
        </h1>

        {/* Description - Two lines */}
        <p className="text-[#8597ad] text-base md:text-lg lg:text-xl max-w-4xl leading-relaxed">
          From the jet to the journey, from insight to infrastructure — Klock Aviation integrates operations, intelligence, and sustainability into one seamless ecosystem.
        </p>

        {/* Tagline */}
        <p className="text-[#EFBF04] text-xs md:text-sm lg:text-base font-bold tracking-[2px] uppercase">
          ONE VISION. THREE DIMENSIONS. CONNECTING SKY, DATA, AND EARTH.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button className="h-14 px-8 bg-[#EFBF04] hover:bg-[#d4a84a] rounded-md flex items-center gap-2 transition-colors">
            <PlayIcon className="w-5 h-5 text-[#0A131F] fill-current" />
            <span className="text-[#0A131F] text-base font-semibold">WATCH OUR STORY</span>
          </button>
          <button 
            onClick={scrollToForces}
            className="h-14 px-8 border border-white/30 hover:bg-white/10 rounded-md flex items-center gap-2 transition-colors"
          >
            <span className="text-white text-base font-semibold">EXPLORE DIVISIONS</span>
            <ChevronDownIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}