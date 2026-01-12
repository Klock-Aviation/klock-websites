import { ArrowRightIcon } from "lucide-react";

const ecosystemCards = [
  {
    icon: "https://c.animaapp.com/mka8pwc5Z213Gu/img/overlay-2.svg",
    title: "Aviation Services & Asset Solutions",
    tagline: "Where flight begins and performance is perfected.",
    description:
      "Comprehensive aircraft management, charter services, and asset optimization for discerning owners and operators across Africa.",
    link: "Learn More",
    url: "https://fly.klockaviation.com",
  },
  {
    icon: "https://c.animaapp.com/mka8pwc5Z213Gu/img/overlay-1.svg",
    title: "Analytics, Intelligence & Experience Platforms",
    tagline: "Where data becomes a competitive edge.",
    description:
      "Cutting-edge aviation analytics, real-time intelligence, and passenger experience platforms that transform operations.",
    link: "Learn More",
    url: "https://intelligence.klockaviation.com",
  },
  {
    icon: "https://c.animaapp.com/mka8pwc5Z213Gu/img/overlay.svg",
    title: "Infrastructure, Sustainability & ESG Solutions",
    tagline: "Where aviation meets the planet responsibly.",
    description:
      "Sustainable airport infrastructure, carbon offsetting programs, and ESG compliance solutions for forward-thinking aviation.",
    link: "Learn More",
    url: "https://sustainable.klockaviation.com",
  },
];

export default function ThreeForcesSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-linear-to-b from-[#0a131f] to-[#111d2c]">
      <div className="absolute w-full top-0 left-0 h-px bg-linear-to-r from-transparent via-[#ce9d22]/30 to-transparent" />

      <div className="flex flex-col max-w-7xl mx-auto items-start gap-16">
        <header className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center w-full">
            <h3 className="font-normal text-[#efbf04] text-2xl text-center tracking-[4.20px] leading-5 whitespace-nowrap">
              THE KLOCK ECOSYSTEM
            </h3>
          </div>

          <div className="flex flex-col items-center w-full">
            <h2 className="font-serif font-normal text-5xl md:text-7xl text-center tracking-[0] leading-tight">
              <span className="text-[#f8f6f2]">Three Forces of </span>
              <span className="text-[#efbf04]">Klock</span>
            </h2>
          </div>

          <div className="flex flex-col max-w-2xl items-center pt-2">
            <p className="font-normal text-[#8597ad] text-base text-center tracking-[0] leading-6">
              Interconnected divisions working in harmony to shape Africa&apos;s aviation future
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {ecosystemCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111d2c]/50 rounded-2xl border border-[#2d3e53]/50 backdrop-blur-sm p-8 flex flex-col gap-4 hover:border-[#efbf04]/50 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-14 h-14" 
                alt={card.title}
                src={card.icon} 
              />

              <h3 className="font-serif font-normal text-[#f8f6f2] text-2xl tracking-[0] leading-8">
                {card.title}
              </h3>

              <p className="font-normal italic text-[#efbf04] text-xl tracking-[0] leading-5">
                {card.tagline}
              </p>

              <p className="font-normal text-[#8597ad] text-lg tracking-[0] leading-relaxed">
                {card.description}
              </p>

              <a 
                href={card.url}
                className="inline-flex items-center gap-2 mt-2 group"
              >
                <span className="font-medium text-[#efbf04] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {card.link}
                </span>
                <ArrowRightIcon className="w-4 h-4 text-[#efbf04] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}