import { ArrowRightIcon } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-12 xl:px-20 bg-[#0a131f]">
      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 lg:w-32 h-px bg-linear-to-r from-transparent to-[#ce9d22]/30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-24 lg:w-32 h-px bg-linear-to-l from-transparent to-[#ce9d22]/30" />

      <div className="flex flex-col max-w-7xl mx-auto items-center gap-6 md:gap-8">
        {/* Section Label */}
        <p className="text-[#EFBF04] text-sm md:text-base tracking-[4px] uppercase">
          THE KLOCK VISION
        </p>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-[1.15]">
          <span className="text-white">At Klock, every flight tells a larger story —</span>
          <br />
          <span className="text-[#EFBF04]">of ownership, insight, and impact.</span>
        </h2>

        {/* Description */}
        <p className="text-[#8597ad] text-base md:text-lg lg:text-xl text-center max-w-3xl leading-relaxed">
          We unite aviation expertise, intelligence innovation, and sustainability leadership 
          to redefine what&apos;s possible in the skies of Africa and beyond.
        </p>

        {/* Tagline */}
        <p className="font-serif italic text-[#EFBF04] text-lg md:text-xl lg:text-2xl text-center">
          Explore how each pillar powers the next — and how together, they form the future of aviation.
        </p>

        {/* CTA Button */}
        <a 
          href="https://fly.klockaviation.com"
          className="mt-4 h-14 px-10 bg-[#EFBF04] hover:bg-[#d4a84a] rounded-md flex items-center gap-2 transition-colors"
        >
          <span className="text-[#0A131F] text-base font-semibold">Enter Klock Aviation</span>
          <ArrowRightIcon className="w-5 h-5 text-[#0A131F]" />
        </a>
      </div>
    </section>
  );
}