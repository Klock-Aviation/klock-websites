"use client";

import { ArrowRight, Briefcase, Droplets, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { title: "Corporate Travel & Business", keyNeeds: "High-net-worth individuals, corporate executives, and business leaders rely on private aviation for seamless travel.", delivery: "Focus on luxury, discretion, and personalized experiences, redefining corporate travel with tailored services and unmatched privacy.", image: "/images/client-corporate.png", icon: Briefcase },
  { title: "Oil, Gas, and Mining Industries", keyNeeds: "Companies in remote and resource-rich regions require reliable transportation for personnel and equipment to operational sites.", delivery: "Reliable, secure, and tailored charter solutions to support the mining sector.", image: "/images/client-oil-gas.png", icon: Droplets },
  { title: "Healthcare and Medical Transport", keyNeeds: "Hospitals, NGOs, and governments depend on rapid and scalable air ambulance services for critical medical evacuations.", delivery: "Ensuring urgent medical access through scalable and reliable transport.", image: "/images/client-healthcare.png", icon: HeartPulse },
];

export function OurClientsSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 bg-white flex flex-col items-center w-full">
      <div className="max-w-[1400px] w-full">
        <div className="flex flex-col items-center gap-10 mb-12">
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>Our Clients</h2>
              <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
            </div>
            <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>Serving diverse industries with specialized aviation solutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <Card key={index} className="overflow-hidden border-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="absolute inset-0 w-full h-full object-cover" alt={client.title} src={client.image} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{client.title}</h3>
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-16 h-16 flex items-center justify-center bg-[#fff7e3] rounded-xl border border-[#ffb70066]">
                      <client.icon className="w-8 h-8 text-[#EFBF04]" />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <h4 className="text-[#003087] text-base" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>Key Needs</h4>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{client.keyNeeds}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-[#003087] text-base" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>How Klock Aviation Delivers</h4>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{client.delivery}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100 group cursor-pointer">
                    <span className="text-[#003087] text-base group-hover:underline" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>View Industry Solutions</span>
                    <ArrowRight className="w-4 h-4 text-[#003087] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-auto bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#003087] px-6 py-4 rounded-lg">
            <span className="text-xl md:text-2xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>View All Our Clients</span>
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}