"use client";

import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="flex flex-col items-center w-full py-16">
      <div className="relative w-full max-w-[1680px] mx-4">
        <div className="absolute inset-0 md:top-3.5 md:left-0 w-full h-full md:h-[463px] rounded-[30px] bg-linear-to-r from-white to-gray-100" />

        <div className="relative flex flex-col lg:flex-row items-center">
          <div className="flex flex-col max-w-[854px] gap-5 p-8 lg:p-[75px_0_0_67px] z-10">
            <h2 className="text-[#121212] text-2xl md:text-3xl lg:text-[32px] leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              STAY IN THE LOOP &amp; FLY SMARTER!
            </h2>

            <p className="text-black text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Subscribe to our newsletter and get exclusive flight deals, priority booking offers, and travel insights delivered to your inbox.
            </p>

            <p className="text-[#003087] text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              Sign up now &amp; enjoy 10% off your first charter booking!
            </p>

            <Button className="h-auto w-fit bg-[#003087] hover:bg-[#003087]/90 text-white px-6 py-4 rounded-lg">
              <span className="text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Subscribe Now</span>
            </Button>
          </div>

          <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[943px] h-[300px] md:h-[400px] lg:h-[564px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover lg:object-contain" alt="Newsletter" src="/images/newsletter-plane.png" />
          </div>
        </div>
      </div>
    </section>
  );
}