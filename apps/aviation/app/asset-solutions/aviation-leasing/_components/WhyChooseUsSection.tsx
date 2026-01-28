"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, TrendingUp } from "lucide-react";

const featureCards = [
  {
    icon: Clock,
    title: "Over 30 Years of Excellence",
    description:
      "With decades of combined experience in aviation leasing, our team brings unparalleled expertise to every partnership. Our deep understanding of Africa's unique aviation landscape ensures solutions tailored to regional needs.",
    highlight:
      "Our heritage of excellence has built a reputation of trust across the continent.",
  },
  {
    icon: Globe,
    title: "Africa's Strongest Network",
    description:
      "Our extensive network spans across major African hubs, connecting operators, regulators, and aviation service providers. This network gives our clients access to the best aircraft and operational support available on the continent.",
    highlight:
      "We leverage our connections to secure optimal leasing terms and conditions for our clients.",
  },
  {
    icon: TrendingUp,
    title: "Regional Economic Growth",
    description:
      "Our leasing solutions contribute to Africa's economic development by facilitating trade, tourism, and business growth. We take pride in our role as enablers of connectivity across the continent, supporting business and governmental operations.",
    highlight:
      "By choosing Klock Aviation, you support sustainable aviation growth in Africa.",
  },
];

const certifications = [
  "IS-BAO Registered",
  "EASA Compliant",
  "IATA Strategic Partner",
  "IOSA Registered",
];

const cities = ["Johannesburg", "Lagos", "Nairobi", "Cairo", "Addis Ababa"];

export function WhyChooseUsSection() {
  return (
    <section className="bg-[#0A2463] py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-white text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Experience Africa&apos;s Leading Aviation Partner
          </h2>
          <p
            className="text-white/80 text-base leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            With the varying and unpredictable demands of leisure and business,
            it is not always practical for an individual or company to commit
            their resources to an aircraft that may not meet their needs in 6
            months, one year or even ten years from now.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#0A2463] border border-[#FFC61B]/30 rounded-xl overflow-hidden"
            >
              <CardContent className="p-6 md:p-8 flex flex-col gap-6 min-h-[420px]">
                {/* Gold circle border icon */}
                <div className="w-14 h-14 rounded-full border-2 border-[#FFC61B] flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-[#FFC61B]" />
                </div>

                <h3
                  className="text-white text-xl md:text-2xl"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-white/80 text-base leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {card.description}
                </p>

                {/* Gold left border highlight box */}
                <div className="mt-auto p-4 border-l-4 border-[#FFC61B]">
                  <p
                    className="text-white text-base"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {card.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust & Certification Card */}
        <Card className="bg-[#0A2463] border border-[#FFC61B]/30 rounded-xl overflow-hidden">
          <CardContent className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                <h3
                  className="text-white text-2xl"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                >
                  Trust &amp; Certification
                </h3>

                <p
                  className="text-white/80 text-base leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Klock Aviation maintains the highest standards of safety and
                  operational excellence. Our commitment to international best
                  practices is evidenced by our certifications and compliance
                  with global aviation authorities.
                </p>

                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="h-auto px-4 py-2 bg-white/10 text-white hover:bg-white/20 rounded-md"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>

                <Button className="h-auto px-6 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg w-fit">
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    Learn More About Our Legacy
                  </span>
                </Button>
              </div>

              {/* Right Column - Map */}
              <div className="flex flex-col items-center gap-6">
                <Card className="w-full bg-[#0A2463] border border-[#FFC61B]/20 overflow-hidden rounded-lg">
                  <CardContent className="p-0 relative">
                    {/* ============================================================
                        IMAGE: /images/leasing-africa-map.png
                        Size: 600x400px
                        Description: Africa map with aviation hub cities highlighted
                        ============================================================ */}
                    <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/leasing-africa-map.png"
                        alt="Pan-African Aviation Network"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 bg-black/30">
                        <h4
                          className="text-white text-xl text-center mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                        >
                          Pan-African Presence
                        </h4>
                        <p
                          className="text-white/90 text-sm text-center"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          Serving major hubs across the continent
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {cities.map((city, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="h-auto px-3 py-1 bg-[#FFC61B]/20 text-[#FFC61B] hover:bg-[#FFC61B]/30 rounded-md"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      {city}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            For those individuals who require flexibility that an airline or
            aircraft ownership cannot reasonably provide, those who need to
            supplement a current aircraft fleet, or those who are simply not
            ready to purchase at the present time, aircraft leasing with Klock
            Aviation is your ideal solution.
          </p>

          <Button className="h-auto px-6 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg">
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              Contact Our Leasing Specialists
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}