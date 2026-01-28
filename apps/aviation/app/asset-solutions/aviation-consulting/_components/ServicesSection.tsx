"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const servicesData = [
  {
    icon: "/images/consulting-icon-acquisition.png",
    title: "Aircraft Acquisition & Financing",
    description:
      "Expert guidance for aircraft purchases with tailored financing solutions designed for your specific needs.",
  },
  {
    icon: "/images/consulting-icon-valuation.png",
    title: "Valuation & Market Analysis",
    description:
      "Comprehensive market insights and accurate valuations to support informed decision making.",
  },
  {
    icon: "/images/consulting-icon-investment.png",
    title: "Investment Management",
    description:
      "Strategic asset management and investment consulting for optimal aviation portfolio performance.",
  },
  {
    icon: "/images/consulting-icon-operations.png",
    title: "Operational Consulting",
    description:
      "Optimize your fleet operations and reduce costs while maintaining highest safety standards.",
  },
  {
    icon: "/images/consulting-icon-fleet.png",
    title: "Fleet Planning",
    description:
      "Strategic fleet planning and expansion services tailored to your business growth objectives.",
  },
  {
    icon: "/images/consulting-icon-compliance.png",
    title: "Regulatory Compliance",
    description:
      "Expert guidance on aviation regulations and safety standards for seamless operations.",
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-24 px-4">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2
            className="text-[#003087] text-4xl md:text-5xl text-center"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Our Services
          </h2>

          <div className="w-24 h-1 bg-[#FFC61B]" />

          <p
            className="text-slate-500 text-lg md:text-xl text-center max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Comprehensive aviation finance and consulting solutions tailored to your needs, delivered by industry experts with decades of experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-start p-8">
                {/* Icon with circular border */}
                <div className="w-20 h-20 rounded-full border-2 border-[#FFC61B] flex items-center justify-center mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <h3
                  className="text-[#003087] text-xl md:text-2xl pb-4"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-slate-500 text-base leading-6"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            className="h-auto px-10 py-5 bg-[#0A2463] hover:bg-[#0A2463]/90 rounded-full shadow-lg"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
          >
            <span className="text-white text-lg">View All Services</span>
          </Button>
        </div>
      </div>
    </section>
  );
}