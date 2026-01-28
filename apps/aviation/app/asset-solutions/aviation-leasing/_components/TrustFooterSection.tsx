"use client";

import Footer from "@/components/Footer";

const logos = [
  "Logo 1",
  "Logo 2",
  "Logo 3",
  "Logo 4",
  "Logo 5",
  "Logo 6",
  "Logo 7",
];

export function TrustFooterSection() {
  return (
    <>
      {/* Trusted by Industry Leaders */}
      <section className="w-full bg-[#0D2240] py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2
            className="text-center text-3xl mb-8"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
          >
            <span className="text-white">Trusted by </span>
            <span className="text-[#FFC61B]">Industry Leaders</span>
          </h2>

          {/* Logo Marquee */}
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex items-center justify-center text-white/50 text-2xl whitespace-nowrap"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {logo}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-duplicate-${index}`}
                  className="flex items-center justify-center text-white/50 text-2xl whitespace-nowrap"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </>
  );
}