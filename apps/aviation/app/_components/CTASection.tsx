"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full bg-[#0A192F] border-b border-white/10">
      <div className="flex flex-col items-center gap-10 px-4 md:px-8 lg:px-16 py-16 md:py-20 max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>
          <span className="text-white">Ready to </span>
          <span className="text-[#EFBF04]">Experience Premium</span>
          <span className="text-white"> Aviation</span>
        </h2>

        <p className="text-white text-lg md:text-xl lg:text-2xl text-center leading-relaxed max-w-4xl whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Get a personalized quote for your next journey and discover the Klock Aviation difference.
        </p>

        <Button className="h-auto bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#003087] px-6 py-4 rounded-lg">
          <span className="text-xl md:text-2xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>Contact us</span>
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </section>
  );
}