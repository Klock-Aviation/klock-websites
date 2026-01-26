"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroImageSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/aircraft-management-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-[#00113A]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Wider container for text to spread out */}
        <div className="max-w-4xl lg:max-w-5xl">
          {/* Content container - no border */}
          <div className="pl-0">
            {/* Heading - NO italic, just Playfair Display regular */}
            <h1 
              className="text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.1] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-white">
                Entrusted by Aircraft Owners Across Africa and Beyond—
              </span>{" "}
              <span style={{ color: '#EFBF04' }}>
                Klock Aviation Turns Your Asset Into an Opportunity.
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Exclusive aircraft management services designed to optimize performance, minimize costs, and unlock revenue potential.
            </p>

            {/* CTA Buttons - single row */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
              {/* Button 1: Yellow fill, dark text */}
              <Link href="/contact?service=consultation">
                <Button 
                  className="h-12 px-6 text-sm font-semibold rounded whitespace-nowrap hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#EFBF04', 
                    color: '#00113A',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Request a Free Consultation
                </Button>
              </Link>

              {/* Button 2: Navy fill, white text */}
              <Link href="/quote">
                <Button 
                  className="h-12 px-6 text-sm font-semibold rounded whitespace-nowrap hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#00113A', 
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Get a Personalized Quote
                </Button>
              </Link>

              {/* Button 3: White fill, navy text */}
              <Link href="#services">
                <Button 
                  className="h-12 px-6 text-sm font-semibold rounded whitespace-nowrap hover:opacity-90 transition-opacity"
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    color: '#00113A',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Learn More About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}