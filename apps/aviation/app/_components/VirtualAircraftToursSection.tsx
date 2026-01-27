"use client";

import { ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const aircraftTours = [
  { title: "Global 7500 Interior", description: "Experience our flagship long-range business jet with unprecedented space and comfort.", image: "/images/tour-global-7500.png" },
  { title: "Challenger 350 Cabin", description: "Tour the spacious cabin of our super mid-size jet with exceptional amenities.", image: "/images/tour-challenger-350.png" },
  { title: "Air Ambulance Equipment", description: "View our state-of-the-art medical equipment and specially configured medevac aircraft.", image: "/images/tour-air-ambulance.png" },
  { title: "Legacy 650 Workspace", description: "Discover the productive environment of our large-cabin business jet.", image: "/images/tour-legacy-650.png" },
];

export function VirtualAircraftToursSection() {
  return (
    <section className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-20 w-full bg-gray-50">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-center gap-10 mb-12">
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>Virtual Aircraft Tours</h2>
              <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
            </div>
            <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>Experience our luxury aircraft interiors through immersive virtual tours</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {aircraftTours.map((tour, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-[192px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt={tour.title} src={tour.image} />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-[#003087] text-lg" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{tour.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-[#003087]/10 text-[#003087]">360° View</Badge>
                    <button className="flex items-center gap-1 text-[#003087] text-sm hover:underline" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                      Start Tour
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-auto bg-[#003087] hover:bg-[#003087]/90 text-white px-6 py-4 rounded-lg">
            <Plane className="w-6 h-6 mr-2" />
            <span className="text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>View All Aircrafts</span>
          </Button>
        </div>
      </div>
    </section>
  );
}