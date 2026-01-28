"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const leaseTypes = [
  {
    id: "acmi",
    label: "ACMI Lease",
    title: "ACMI Lease",
    description:
      "ACMI refers to an arrangement where the lessor agrees to provide an Aircraft, Crew, Maintenance and Insurance to the lessee. In return for payment based on the number of block hours operated.",
    detailTitle: "When to use ACMI Services:",
    detailContent:
      "ACMI or Aircraft, Crew Maintenance and Insurance is often deployed as a last-minute emergency service for established airlines or a helping hand for start-up airlines. An ACMI is a flight-ready aircraft deployed and integrated directly into your existing set-up. Leaning on ACMI is pertinent to reducing long-term financial liabilities while responding in real time to market demand.",
    buttonText: "Request ACMI Quote",
  },
  {
    id: "damp",
    label: "Damp Lease",
    title: "Damp Lease",
    description:
      "A damp lease is an arrangement where the lessor provides the aircraft and some crew members, typically the cockpit crew, while the lessee provides the cabin crew and handles operations.",
    detailTitle: "When to use Damp Lease Services:",
    detailContent:
      "Damp leasing is ideal for airlines that need additional capacity but want more operational control than an ACMI lease provides. It is particularly useful during seasonal peaks or when expanding routes while maintaining your brand service standards.",
    buttonText: "Request Damp Lease Quote",
  },
  {
    id: "dry",
    label: "Dry Lease",
    title: "Dry Lease",
    description:
      "A dry lease is an arrangement where the lessor provides only the aircraft without crew, maintenance, or insurance. The lessee is responsible for all operational aspects.",
    detailTitle: "When to use Dry Lease Services:",
    detailContent:
      "Dry leasing is suitable for established airlines with their own crew and maintenance capabilities. It offers maximum operational flexibility and control, making it ideal for long-term capacity expansion or fleet modernization programs.",
    buttonText: "Request Dry Lease Quote",
  },
  {
    id: "wet",
    label: "Wet Lease",
    title: "Wet Lease",
    description:
      "A wet lease is an arrangement where the lessor provides the aircraft, complete crew, maintenance, and insurance. The lessee typically provides fuel and pays for operational costs.",
    detailTitle: "When to use Wet Lease Services:",
    detailContent:
      "Wet leasing is perfect for short-term capacity needs, emergency replacements, or when testing new routes. It provides a complete turnkey solution with minimal operational burden on the lessee, allowing for quick deployment and flexibility.",
    buttonText: "Request Wet Lease Quote",
  },
];

export function LeaseTypesSection() {
  const [activeTab, setActiveTab] = useState("acmi");

  return (
    <section id="services" className="bg-white py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="text-[#003087] text-2xl md:text-3xl lg:text-4xl xl:text-[52px] leading-tight mb-4 whitespace-nowrap"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            A Simplified Guide to Aircraft Leasing
          </h2>

          <div className="w-[180px] h-[3px] bg-[#FFC61B] mx-auto mb-6" />

          <p
            className="text-gray-700 text-base leading-relaxed mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Choosing the best aircraft lease depends on your company&apos;s needs
            and finances. Klock Aviation can help you navigate the options: We
            provide lease solutions for both new and used aircraft together
            with lease management and other services to third parties.
          </p>
          <p
            className="text-gray-600 text-sm leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We specialize in turboprops and regional jet aircraft primarily
            due to their strong value retention characteristics, terrain
            adaptability, and robust, non-complex nature in the African landscape.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex flex-col items-center gap-8"
        >
          <div className="w-full overflow-x-auto pb-2 flex justify-center">
            <TabsList className="inline-flex h-auto items-center justify-center p-1 bg-white rounded-lg shadow-sm border border-gray-200">
              {leaseTypes.map((lease) => (
                <TabsTrigger
                  key={lease.id}
                  value={lease.id}
                  className="px-4 md:px-8 lg:px-12 py-2 rounded-md text-base md:text-lg lg:text-2xl whitespace-nowrap data-[state=active]:bg-[#FFC61B] data-[state=active]:text-[#0A2463] data-[state=active]:shadow-sm data-[state=inactive]:text-slate-500"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
                >
                  {lease.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {leaseTypes.map((lease) => (
            <TabsContent key={lease.id} value={lease.id} className="w-full mt-0">
              <Card className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <CardContent className="flex flex-col gap-4 p-6 md:p-8">
                  <h3
                    className="text-[#0A2463] text-xl md:text-2xl"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                  >
                    {lease.title}
                  </h3>

                  <p
                    className="text-gray-700 text-sm leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {lease.description}
                  </p>

                  {/* Light blue inner card */}
                  <Card className="bg-[#E1F0FF] rounded-lg border-0">
                    <CardContent className="p-6">
                      <h4
                        className="text-[#0A2463] text-xl md:text-2xl mb-3"
                        style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
                      >
                        {lease.detailTitle}
                      </h4>
                      <p
                        className="text-gray-700 text-base md:text-lg leading-relaxed"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {lease.detailContent}
                      </p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center pt-4">
                    <Button className="h-auto px-8 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg w-full max-w-[406px]">
                      <span
                        className="text-lg md:text-xl"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        {lease.buttonText}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom Text + CTA - Light blue background box */}
        <div className="bg-[#E1F0FF] rounded-lg py-8 px-4 mt-12 text-center">
          <p
            className="text-[#0A2463] text-base md:text-lg mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, lineHeight: 1.8 }}
          >
            At Klock Aviation, we facilitate the leasing process for our clients by performing a detailed needs assessment, identifying aircraft options to meet their specific requirements, and structuring an agreement amiable to their stipulations.
          </p>

          <Button className="h-auto px-8 py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg">
            <span
              className="text-lg md:text-xl"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Schedule a Consultation
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}