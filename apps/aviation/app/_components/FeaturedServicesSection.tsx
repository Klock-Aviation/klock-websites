"use client";

import { ArrowRight, Plane, Settings, FileText, Users, ShoppingCart, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "Air Charter Flights", description: "Bespoke private jet charter services tailored to your exact requirements and schedule.", image: "/images/service-charter.png", icon: Plane },
  { title: "Air Craft Management", description: "Comprehensive aircraft management solutions to maximize your aircraft investment.", image: "/images/service-management.png", icon: Settings },
  { title: "Aircraft Leasing", description: "Customized leasing options to maximize aircraft utility and client convenience.", image: "/images/service-leasing.png", icon: FileText },
  { title: "Aviation Consulting", description: "Expert guidance on fleet optimization, operations, and aviation business strategy.", image: "/images/service-consulting.png", icon: Headphones },
  { title: "Aircraft Sales", description: "Professional aircraft acquisition and sales services with global market expertise.", image: "/images/service-sales.png", icon: ShoppingCart },
  { title: "Crew Staffing", description: "Professional crew recruitment and staffing services with global market expertise.", image: "/images/service-crew.png", icon: Users },
];

export function FeaturedServicesSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-32 pb-16 px-4 bg-white">
      <div className="flex flex-col max-w-[597px] items-center gap-8">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>
            Featured Services
          </h2>
          <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
        </div>
        <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Comprehensive aviation solutions tailored to your needs
        </p>
      </div>

      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-slate-200 shadow-sm group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-[300px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="absolute inset-0 w-full h-full object-cover" alt={service.title} src={service.image} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Yellow Icon Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-[#EFBF04] rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-[#003087]" />
                  </div>

                  <h3 className="absolute bottom-20 left-6 text-white text-2xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{service.title}</h3>
                  <p className="absolute bottom-6 left-6 right-6 text-white/90 text-sm leading-5" style={{ fontFamily: "Montserrat, sans-serif" }}>{service.description}</p>
                </div>
                <div className="flex items-center gap-2 p-6 group-hover:gap-4 transition-all">
                  <span className="text-[#003087] text-base" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#003087]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-auto bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#003087] px-6 py-4 rounded-lg">
            <span className="text-xl md:text-2xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>Contact us</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}