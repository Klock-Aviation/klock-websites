"use client";

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

export function LogoStripSection() {
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
    <section className="w-full py-12 overflow-hidden" style={{ backgroundColor: "#0E2241" }}>
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
    </section>
  );
}