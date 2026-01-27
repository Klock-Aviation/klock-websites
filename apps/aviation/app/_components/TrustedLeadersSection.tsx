"use client";

export function TrustedLeadersSection() {
  const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6", "Logo 7"];

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#0d2240] overflow-hidden">
      <div className="text-center mb-10">
        <h2
          className="text-2xl md:text-3xl lg:text-[32px] leading-tight"
          style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
        >
          <span className="text-white">Trusted by </span>
          <span className="text-[#EFBF04]">Industry Leaders</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-16 md:gap-32">
          {logos.map((logo, index) => (
            <span
              key={`first-${index}`}
              className="text-white text-2xl md:text-3xl lg:text-[38px] text-center whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity shrink-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {logo}
            </span>
          ))}
          {logos.map((logo, index) => (
            <span
              key={`second-${index}`}
              className="text-white text-2xl md:text-3xl lg:text-[38px] text-center whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity shrink-0"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}