"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Mwangi",
    position: "Operations Director, East African Airways",
    avatar: "/images/testimonials/leasing-john-mwangi.png",
    quote:
      "Klock Aviation's ACMI solution allowed us to expand our routes during peak tourism season without the long-term commitment of purchasing additional aircraft. Their streamlined process and expert team made implementation seamless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Okonkwo",
    position: "CEO, West Africa Charters",
    avatar: "/images/testimonials/testimonial-2.jpg",
    quote:
      "The flexibility of their leasing terms and deep understanding of African aviation regulations made Klock Aviation the perfect partner for our fleet expansion.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "Fleet Manager, North African Airlines",
    avatar: "/images/testimonials/testimonial-3.jpg",
    quote:
      "Outstanding service from start to finish. Their team guided us through every step of the wet lease process, ensuring minimal disruption to our operations.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  if (!current) return null;

  return (
    <section className="bg-[#0A2463] py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-white text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            What Our Clients Say About Us
          </h2>
          <p
            className="text-white/80 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hear from organizations across Africa who have transformed their
            aviation operations through our leasing solutions.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center px-12 md:px-16 lg:px-24">
            <Card className="max-w-4xl w-full bg-[#0A2463] border border-white/10">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Avatar */}
                  <div className="shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover bg-gray-600"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-3 flex-1">
                    {/* Rating - Yellow Stars */}
                    <div className="flex gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FFC61B] text-[#FFC61B]"
                        />
                      ))}
                    </div>

                    {/* Quote - Yellow/Gold Italic */}
                    <blockquote
                      className="text-[#FFC61B] text-lg md:text-xl italic leading-7"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      &quot;{current.quote}&quot;
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-start gap-1 pt-3">
                      <p
                        className="text-white text-base md:text-lg"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                      >
                        {current.name}
                      </p>
                      <p
                        className="text-white/60 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {current.position}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <Button
                        variant="outline"
                        className="h-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-4 py-2"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        <span
                          className="text-xs"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                        >
                          Watch Video Testimonial
                        </span>
                      </Button>

                      <Button className="h-auto bg-white text-[#0A2463] hover:bg-white/90 px-4 py-2">
                        <span
                          className="text-xs"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                        >
                          View Case Study
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator - Click to navigate */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-[#FFC61B] w-8" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto mt-12">
          <p
            className="text-white/80 text-base text-center leading-7"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Join the growing list of satisfied clients who have transformed
            their aviation operations with Klock Aviation&apos;s leasing solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-auto bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] px-6 py-3 rounded-md">
              <span
                className="text-sm"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Become Our Next Success Story
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-md"
            >
              <span
                className="text-sm"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Read More Client Testimonials
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}