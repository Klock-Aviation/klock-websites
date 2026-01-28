"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* ============================================================
          VIDEO: /videos/aviation-leasing-hero.mp4
          Format: MP4 (H.264 codec)
          Size: 1920x1080px
          ============================================================ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/aviation-leasing-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#00113A]/60" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto flex-1 flex items-center">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[60px] mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            <span className="text-white">
              Your Trusted Partner in
              <br className="hidden md:block" />
              Aircraft Leasing
            </span>
            <span className="text-[#EFBF04]">
              {" "}Across
              <br className="hidden md:block" />
              Africa and Beyond
            </span>
          </h1>

          <p
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Flexible, Transparent, and Tailored Leasing Solutions for
            Businesses, Governments, and Individuals.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="h-auto px-6 py-3 bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#00113A] rounded-lg"
            >
              <Link href="#calculator">
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                  Check Your Leasing Costs
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto px-6 py-3 border-white text-white hover:bg-white/10 rounded-lg"
            >
              <Link href="/fleet">
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                  Explore Our Fleet
                </span>
              </Link>
            </Button>

            <Button
              asChild
              className="h-auto px-6 py-3 bg-white hover:bg-white/90 text-[#00113A] rounded-lg"
            >
              <Link href="#services">
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                  Learn More About Our Services
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}