"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Michael Richardson", role: "Director, International Hospital Group", quote: "Their medical evacuation services are truly life-saving. The speed and professionalism of their team during emergencies is exceptional.", image: "/images/testimonial-michael.png", rating: 5 },
  { name: "Saranya Kuntara", role: "Director, International Hospital Group", quote: "Their medical evacuation services are truly life-saving. The speed and professionalism of their team during emergencies is exceptional.", image: "/images/testimonial-saranya.png", rating: 5 },
];

export function ClientTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-20 w-full bg-gray-50">
      <div className="flex flex-col items-center gap-10 max-w-[1400px] w-full">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>Client Testimonials</h2>
            <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
          </div>
          <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>Hear from our satisfied clients about their exceptional experiences</p>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex items-center gap-4 md:gap-8 w-full justify-center">
            <Button variant="ghost" size="icon" onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="shrink-0 w-12 h-12 bg-white/80 rounded-full shadow-lg backdrop-blur-sm hover:bg-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-8 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className={`shrink-0 w-full max-w-[696px] bg-white rounded-2xl overflow-hidden shadow-lg transition-opacity ${index === activeIndex ? "opacity-100" : "opacity-50 hidden md:block"}`}>
                  <CardContent className="p-0 h-full flex flex-col md:flex-row">
                    <div className="flex items-center justify-center p-8 md:p-0 md:m-[77px_0_0_50px]">
                      <div className="w-[120px] h-[120px] md:w-[149px] md:h-[150px] rounded-full overflow-hidden border-[6px] border-[#EFBF04]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="w-full h-full object-cover" alt={testimonial.name} src={testimonial.image} />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-4 p-6 md:p-[37px_24px_24px_24px]">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#EFBF04] text-[#EFBF04]" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-base md:text-lg leading-8 italic" style={{ fontFamily: "Playfair Display, serif" }}>&quot;{testimonial.quote}&quot;</p>
                      <div className="flex flex-col">
                        <h4 className="text-[#003087] text-lg" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{testimonial.name}</h4>
                        <p className="text-gray-600 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} className="shrink-0 w-12 h-12 bg-white/80 rounded-full shadow-lg backdrop-blur-sm hover:bg-white">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setActiveIndex(index)} className={`rounded-full transition-all ${index === activeIndex ? "w-6 h-3 bg-[#EFBF04]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}