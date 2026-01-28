"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Richardson",
    role: "Director, International Hospital Group",
    image: "/images/testimonial-michael.png",
    rating: 5,
    quote:
      "Their aviation consulting services are truly life-saving. The speed and professionalism of their consulting expertise is exceptional.",
  },
  {
    id: 2,
    name: "Saranya Kandara",
    role: "Director, International Hospital Group",
    image: "/images/testimonial-saranya.png",
    rating: 5,
    quote:
      "Their aviation consulting services are truly life-saving. The speed and professionalism of their consulting expertise is exceptional.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2
            className="text-[#003087] text-4xl md:text-5xl text-center"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Client Success Stories
          </h2>

          <div className="w-24 h-1 bg-[#FFC61B]" />

          <p
            className="text-slate-500 text-lg text-center max-w-2xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            See how we&apos;ve helped our clients achieve their aviation goals
            through strategic financing and expert consulting
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#0A2463]" />
          </button>

          {/* Testimonial Cards */}
          <div className="flex gap-8 overflow-hidden max-w-4xl px-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`shrink-0 w-full md:w-[calc(50%-16px)] bg-white rounded-2xl shadow-lg border-0 transition-opacity duration-300 ${
                  index === currentIndex ||
                  index === (currentIndex + 1) % testimonials.length
                    ? "opacity-100"
                    : "opacity-0 hidden md:block"
                }`}
              >
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FFC61B] text-[#FFC61B]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className="text-slate-600 text-base leading-relaxed mb-6 italic"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFC61B] rounded-full flex items-center justify-center text-[#0A2463] text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div>
                      <h4
                        className="text-[#0A2463] font-semibold"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-slate-500 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#0A2463]" />
          </button>
        </div>
      </div>
    </section>
  );
}