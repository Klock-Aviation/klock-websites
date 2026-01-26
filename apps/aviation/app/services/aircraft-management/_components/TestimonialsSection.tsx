"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const testimonials = [
  {
    quote:
      "Since partnering with Klock Aviation, my operational costs have decreased by 25%, and I've earned consistent revenue through charters.",
    author: "Private Aircraft Owner",
    location: "Dubai",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    quote:
      "The team at Klock Aviation ensures my aircraft is always immaculately maintained and strategically chartered to generate maximum returns.",
    author: "Corporate Fleet Manager",
    location: "Lagos, Nigeria",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    quote:
      "Their attention to detail and commitment to safety gives me complete peace of mind. I would never trust my aircraft to anyone else.",
    author: "HNWI Client",
    location: "Johannesburg",
    image: "/images/testimonials/testimonial-3.jpg",
  },
];

const videoTestimonial = {
  title: "Watch How We Transformed Aircraft Ownership for John Reynolds",
  description:
    "John's Global 6000 went from a financial burden to a revenue-generating asset through our premium management services.",
  stats: [
    "Reduced annual operating costs by 30%",
    "Generated $400,000 in charter revenue",
    "Streamlined maintenance and compliance",
  ],
  thumbnail: "/images/testimonials/video-thumbnail.jpg",
};

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Our Clients Say It Best
          </h2>
          {/* Gold underline - FIXED */}
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#EFBF04' }} />
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Hear from aircraft owners who have experienced the Klock Aviation difference.
          </p>
        </div>

        {/* Testimonial Cards - Centered layout like Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* Image with quote badge - centered at top */}
                <div className="relative mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {/* Quote badge */}
                  <div 
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#EFBF04' }}
                  >
                    <span className="text-white font-bold text-sm">&quot;</span>
                  </div>
                </div>

                {/* Quote text - centered */}
                <p 
                  className="text-base leading-relaxed mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author info - centered */}
                <p 
                  className="font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A' }}
                >
                  {testimonial.author}
                </p>
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  {testimonial.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial - Text left, Video right (like Figma) */}
        <Card className="overflow-hidden border-0 rounded-2xl" style={{ backgroundColor: '#00113A' }}>
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left - Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* VIDEO TESTIMONIAL badge */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Video Testimonial
                  </span>
                </div>

                <h3 
                  className="text-2xl lg:text-3xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
                >
                  {videoTestimonial.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
                >
                  {videoTestimonial.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {videoTestimonial.stats.map((stat, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EFBF04' }} />
                      {stat}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button 
                    className="hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                  >
                    Watch Full Testimonial
                  </Button>
                </div>
              </div>

              {/* Right - Video/Image */}
              <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-[400px]">
                {/* Video element */}
                <video
                  className="w-full h-full object-cover"
                  poster={videoTestimonial.thumbnail}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/testimonial-video.mp4" type="video/mp4" />
                </video>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="w-16 h-16 rounded-full hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#EFBF04', color: '#00113A' }}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}