"use client";

import { ArrowRight, DollarSign, Headphones, Plane, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { title: "Cost-Effectiveness", description: "Transparent pricing, competitive rates, and exclusive loyalty perks for exceptional value.", benefit: "Benefit: Save money while enjoying luxury, customized private travel.", icon: DollarSign },
  { title: "Customer Service", description: "Dedicated 24/7 concierge, multilingual staff, and personalized travel solutions.", benefit: "Benefit: Experience unparalleled attention to your needs and preferences.", icon: Headphones },
  { title: "Fleet Diversity", description: "Modern, versatile aircraft tailored to every trip, from short regional hops to global journeys.", benefit: "Benefit: Fly your way with flexible options designed to match your needs.", icon: Plane },
  { title: "Sustainability", description: "Carbon-neutral operations powered by sustainable fuel and eco-friendly practices.", benefit: "Benefit: Travel responsibly with a focus on environmental impact.", icon: Leaf },
];

export function WhyChooseUsSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 bg-[#0A192F] flex flex-col items-center w-full relative overflow-hidden">
      <div className="absolute left-[-200px] bottom-[-200px] w-[400px] h-[400px] bg-[#003087] rounded-full blur-[150px] opacity-30" />

      <div className="flex flex-col items-center gap-10 relative z-10 max-w-[1400px] w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 className="text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>
            <span className="text-white">Why </span>
            <span className="text-[#EFBF04]">Choose Us</span>
          </h2>
          <p className="text-white text-xl md:text-2xl text-center leading-relaxed max-w-3xl whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>Experience the Klock Aviation difference with our commitment to excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#003087]/30 border border-white/10 backdrop-blur-sm hover:bg-[#003087]/40 transition-colors">
              <CardContent className="flex flex-col gap-5 p-6">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#EFBF04] rounded-2xl -rotate-3 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-[#003087] rotate-3" />
                  </div>
                  <h3 className="text-white text-xl whitespace-nowrap" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{benefit.description}</p>
                </div>
                <div className="flex flex-col pt-4 border-t border-white/10">
                  <p className="text-[#EFBF04] text-base leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>{benefit.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="h-auto bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#003087] px-6 py-4 rounded-lg">
          <span className="text-xl md:text-2xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>Contact us</span>
          <ArrowRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </section>
  );
}