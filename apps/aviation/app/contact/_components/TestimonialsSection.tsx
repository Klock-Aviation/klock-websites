"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    title: "CEO, Mining Corp",
    image: "/images/testimonials/testimonial-john.jpg",
    testimonial:
      "Klock Aviation has redefined luxury travel for me! Their attention to detail and commitment to safety is unparalleled in the industry.",
    initials: "JS",
    bgColor: "bg-[#091D42]",
  },
  {
    name: "Sarah Johnson",
    title: "Director, Global Logistics",
    image: "/images/testimonials/testimonial-sarah.jpg",
    testimonial:
      "The team at Klock Aviation consistently delivers exceptional service. Their ability to manage complex logistics for our mining operations has been invaluable.",
    initials: "SJ",
    bgColor: "bg-[#FFB81C]",
  },
  {
    name: "David Richardson",
    title: "Private Aircraft Owner",
    image: "/images/testimonials/testimonial-david.jpg",
    testimonial:
      "Since entrusting Klock with the management of my aircraft, I have experienced a significant improvement in operational efficiency and cost management.",
    initials: "DR",
    bgColor: "bg-[#16A34A]",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#091D42] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Hear what our clients have to say about their experience with Klock Aviation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#F0F2F5] border-none shadow-none"
            >
              <CardContent className="p-6">
                {/* Avatar and Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden ${testimonial.bgColor} flex items-center justify-center shrink-0`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <span className="text-white font-semibold text-sm absolute">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-[#091D42] font-bold"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFB81C] text-[#FFB81C]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base italic leading-6">
                  &quot;{testimonial.testimonial}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}