"use client";

import { ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  { name: "Kilimanjaro", image: "/images/dest-kilimanjaro.png" },
  { name: "Victoria Falls", image: "/images/dest-victoria-falls.png" },
  { name: "Masai Mara", image: "/images/dest-masai-mara.png" },
  { name: "Zanzibar Town", image: "/images/dest-zanzibar.png" },
];

const galleryImages = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
  "/images/gallery-7.png",
  "/images/gallery-8.png",
];

export function PopularDestinationsSection() {
  return (
    <section className="flex flex-col items-center gap-16 px-4 py-24 w-full bg-[#f1f6ff]">
      <div className="flex flex-col items-center gap-8 max-w-[1544px] w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>
            Popular Charter Destinations
          </h2>
          <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
        </div>
        <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Comprehensive aviation solutions tailored to your needs
        </p>
      </div>

      <div className="flex items-center gap-4 md:gap-10 w-full max-w-[1600px] px-4">
        <Button variant="ghost" size="icon" className="shrink-0 w-12 h-12 md:w-[76px] md:h-[76px] bg-white rounded-full shadow-lg">
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </Button>

        <div className="flex gap-4 md:gap-10 overflow-x-auto flex-1">
          {destinations.map((destination, index) => (
            <Card key={index} className="shrink-0 w-[280px] md:w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center justify-center gap-6 p-6 md:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-20 h-20 md:w-[94px] md:h-[84px] rounded-xl object-cover" alt={destination.name} src={destination.image} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#003087] text-lg md:text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>{destination.name}</h3>
                  <button className="text-gray-600 text-sm md:text-base text-left underline hover:text-gray-800 transition-colors" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>Book Now</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="ghost" size="icon" className="shrink-0 w-12 h-12 md:w-[76px] md:h-[76px] bg-white rounded-full shadow-lg">
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
      </div>

      <div className="w-full max-w-[1644px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-auto" alt="Africa flight routes map" src="/images/map-section.png" />
      </div>

      <div className="flex flex-col gap-6 max-w-[1700px] w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div key={index} className="relative h-48 md:h-[300px] lg:h-[400px] rounded-[20px] overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={`Destination ${index + 1}`} src={image} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.slice(4, 8).map((image, index) => (
            <div key={index} className="relative h-48 md:h-[300px] lg:h-[400px] rounded-[20px] overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={`Destination ${index + 5}`} src={image} />
            </div>
          ))}
        </div>
      </div>

      <Button className="h-auto bg-[#003087] hover:bg-[#003087]/90 text-white px-6 py-4 rounded-lg">
        <Plane className="w-5 h-5 mr-2" />
        <span className="text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>View All Destinations</span>
      </Button>
    </section>
  );
}