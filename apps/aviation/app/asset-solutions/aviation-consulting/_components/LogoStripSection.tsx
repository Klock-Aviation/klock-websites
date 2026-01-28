"use client";

const partnerLogos = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
];

export function LogoStripSection() {
  return (
    <section className="w-full bg-[#0d2240] py-16 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 mb-12">
        <h2
          className="text-center text-2xl md:text-3xl"
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
        >
          <span className="text-white">Trusted by </span>
          <span className="text-[#FFC61B]">Industry Leaders</span>
        </h2>
      </div>

      {/* Marquee Animation */}
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-16 md:gap-24">
          {/* First set */}
          {partnerLogos.map((partner, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <span
                className="text-white/70 text-2xl md:text-3xl whitespace-nowrap"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partnerLogos.map((partner, index) => (
            <div
              key={`logo-dup-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <span
                className="text-white/70 text-2xl md:text-3xl whitespace-nowrap"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}