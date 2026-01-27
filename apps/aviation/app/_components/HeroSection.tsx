"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full h-[899px] flex flex-col items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        <h1
          className="text-white text-6xl md:text-7xl text-center tracking-tight leading-tight"
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
        >
          Your Story is Our Story
        </h1>

        <p
          className="text-white text-xl md:text-2xl text-center leading-8 max-w-[1096px]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Experience unparalleled luxury and reliability with Klock Aviation&apos;s premier aviation services
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="ghost"
            className="h-auto bg-black/20 hover:bg-black/40 rounded-lg backdrop-blur-md px-6 py-3 gap-2.5 transition-colors border-0"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span
              className="text-white text-lg leading-6 whitespace-nowrap"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Watch Our Story
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto bg-black/20 hover:bg-black/40 rounded-lg backdrop-blur-md px-6 py-3 transition-colors border-0"
          >
            <span
              className="text-white text-lg leading-6 whitespace-nowrap"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Request Quote
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}