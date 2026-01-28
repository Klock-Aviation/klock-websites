"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/images/consulting-icon-standards.png",
    title: "Setting the Bar",
    description:
      "We maintain the highest standards of service with complete transparency and dedication to excellence.",
  },
  {
    icon: "/images/consulting-icon-network.png",
    title: "Global Network",
    description:
      "Access our extensive network of brokers and market experts for unparalleled industry insights.",
  },
  {
    icon: "/images/consulting-icon-reach.png",
    title: "Worldwide Reach",
    description:
      "Connect with aircraft opportunities and buyers across the globe through our international presence.",
  },
  {
    icon: "/images/consulting-icon-response.png",
    title: "Swift Response",
    description:
      "Experience rapid, professional response times and dedicated support throughout your journey.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative w-full bg-[#060f2e] py-24 px-4 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white/30" />
        <div className="absolute top-40 right-20 w-60 h-60 rounded-full border-2 border-white/30" />
        <div className="absolute left-0 bottom-10 w-80 h-80 rounded-full border-2 border-white/30" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-2 border-white/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2
            className="text-white text-4xl md:text-5xl text-center"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Why Choose Klock Aviation
          </h2>

          <div className="w-24 h-1 bg-[#FFC61B]" />

          <p
            className="text-white/80 text-lg md:text-xl text-center max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
          >
            Experience excellence in aviation finance and consulting with our expert team dedicated to maximizing your aircraft investments
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                {/* Icon with circular border */}
                <div className="w-20 h-20 rounded-full border-2 border-[#FFC61B] flex items-center justify-center mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3
                  className="text-white text-xl md:text-2xl mb-4"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-white/80 text-base leading-7"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <Card className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h3
                className="text-white text-xl md:text-2xl"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 600,
                }}
              >
                Ready to elevate your aviation strategy?
              </h3>
              <p
                className="text-white/80 text-lg"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our team of experts is ready to guide you through every step
              </p>
            </div>

            <Button
              className="h-auto px-8 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-full shrink-0"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
            >
              <span className="text-lg">Schedule a Consultation</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}