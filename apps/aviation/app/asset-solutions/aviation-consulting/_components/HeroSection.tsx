"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/consulting-hero-bg.jpg"
          alt="Aviation consulting background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#060f2e]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 py-24">
        <div className="flex flex-col max-w-3xl items-start gap-4">
          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-[80px] tracking-tight leading-[1.1]"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            <span className="text-white">
              Elevate Your
              <br />
            </span>
            <span className="text-[#FFC61B]">Aviation</span>
            <span className="text-white"> Assets</span>
          </h1>

          {/* Subheading - w-full lets it flow naturally to 2 lines */}
          <p
            className="text-white/90 text-lg md:text-xl lg:text-2xl leading-7 w-full"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Expert financial strategies for aircraft acquisition, sale, leasing &amp; fleet management designed to maximize your investment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              className="h-auto px-8 py-4 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-full shadow-lg transition-transform hover:scale-105"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              <span className="text-lg">Get a Free Consultation</span>
            </Button>

            <Button
              variant="outline"
              className="h-auto px-8 py-4 bg-white hover:bg-white/90 text-[#0A2463] rounded-full border-0 transition-transform hover:scale-105"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              <span className="text-lg">Explore Services</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}