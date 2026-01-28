"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const partnerLogos = [
  "Logo 1",
  "Logo 2",
  "Logo 3",
  "Logo 4",
  "Logo 5",
  "Logo 6",
  "Logo 7",
];

export function CTASection() {
  useEffect(() => {
    const styleId = "marquee-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="w-full">
      {/* CTA Banner - #091D42 */}
      <div className="w-full py-16 px-4" style={{ backgroundColor: "#091D42" }}>
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl mb-4 font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-white">Ready to Experience </span>
            <span className="text-[#FFC61B]">Premium Aviation Services</span>
            <span className="text-white">?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how Klock Aviation can meet your aviation needs with our expert solutions and exceptional service.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-auto px-6 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#091D42] rounded">
              Contact Us Today
            </Button>

            <Button
              variant="outline"
              className="h-auto px-6 py-3 border-2 border-white bg-transparent hover:bg-white/10 text-white rounded"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Logo Strip - #0E2241 */}
      <div className="w-full py-12 overflow-hidden" style={{ backgroundColor: "#0E2241" }}>
        <div className="max-w-7xl w-full mx-auto px-4 mb-8">
          <h3
            className="text-center text-2xl md:text-3xl font-semibold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-white">Trusted by </span>
            <span className="text-[#EFBF04]">Industry Leaders</span>
          </h3>
        </div>

        <div className="relative flex overflow-hidden">
          <div
            className="flex shrink-0 gap-16 md:gap-24"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center min-w-[150px]"
              >
                <span className="text-white text-2xl md:text-4xl whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
            {partnerLogos.map((partner, index) => (
              <div
                key={`logo-dup-${index}`}
                className="flex items-center justify-center min-w-[150px]"
              >
                <span className="text-white text-2xl md:text-4xl whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}