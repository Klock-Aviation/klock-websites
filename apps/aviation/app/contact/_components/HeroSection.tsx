"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/blog-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 py-20 text-center">
        <h1
          className="text-4xl md:text-5xl mb-4 font-bold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <span className="text-white">Contact </span>
          <span className="text-[#FFB81C]">Us</span>
        </h1>

        <p
          className="text-white text-lg md:text-2xl leading-7 mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Your Gateway to Seamless Aviation Services. Reach Us Anytime, Anywhere.
        </p>

        <Button className="h-auto px-5 py-2 bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-[#091D42] rounded font-medium">
          Get a Quote
        </Button>
      </div>
    </section>
  );
}