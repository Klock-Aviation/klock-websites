"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const whiteFeatures = [
  {
    icon: "https://c.animaapp.com/mkie4nq4HsepCv/img/overlay-2.svg",
    title: "Tailored for Your Needs",
    description:
      "From basic management to premium full-service options, we craft solutions that align with your goals.",
    bullets: [
      "Customized plans for every aircraft owner",
      "Flexible packages to match your requirements",
    ],
  },
  {
    icon: "https://c.animaapp.com/mkie4nq4HsepCv/img/overlay-1.svg",
    title: "Hassle-Free Ownership",
    description:
      "Enjoy the benefits of ownership without the operational burdens—let our experts handle the details.",
    bullets: [
      "Comprehensive operational management",
      "Reduced administrative workload for owners",
    ],
  },
  {
    icon: "https://c.animaapp.com/mkie4nq4HsepCv/img/overlay.svg",
    title: "Maximize Revenue",
    description:
      "Increase your aircraft&apos;s profitability by making it available for charter services or leasing under our trusted global network.",
    bullets: [
      "Access to premium charter clients",
      "Optimized scheduling for maximum returns",
    ],
  },
];

const blueFeatures = [
  {
    title: "Cost-Effectiveness",
    bullets: [
      "Transparent Pricing: Know exactly what you&apos;re paying with no hidden fees",
      "Optimized Maintenance: Save on operational costs with streamlined scheduling",
    ],
  },
  {
    title: "Premium Services",
    bullets: [
      "Global Charter Network Access: Maximize revenue opportunities",
      "Exclusive Concierge Services: Enhance your ownership experience",
    ],
  },
  {
    title: "Advanced Technology",
    bullets: [
      "Real-Time Tracking: Monitor your aircraft&apos;s operations and performance",
      "Custom Reporting: Stay informed with detailed insights",
    ],
  },
  {
    title: "24/7 Support",
    bullets: [
      "Dedicated account managers for personalized service",
      "Global support network for immediate assistance",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="flex flex-col w-full items-center px-4 py-20 bg-white">
      <div className="flex flex-col max-w-[1400px] w-full items-center gap-12">
        {/* Header */}
        <div className="flex flex-col w-full items-center gap-6">
          <h2 
            className="text-4xl md:text-5xl lg:text-[52px] text-center leading-tight whitespace-nowrap"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Experience Seamless Aircraft Ownership
          </h2>

          {/* Gold underline - FIXED */}
          <div className="w-[120px] h-[3px]" style={{ backgroundColor: '#EFBF04' }} />

          <p 
            className="text-xl md:text-2xl text-center leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Why Choose Aircraft Management by Klock Aviation?
          </p>
        </div>

        {/* White Feature Cards - subtle/no border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {whiteFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg border-0 shadow-sm"
            >
              <CardContent className="flex flex-col p-8 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-16 h-16"
                  alt={feature.title}
                  src={feature.icon}
                />

                <h3 
                  className="text-xl leading-7"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>

                <p 
                  className="text-base leading-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  {feature.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span style={{ color: '#EFBF04', fontFamily: 'Montserrat, sans-serif' }}>
                        •
                      </span>
                      <span 
                        className="text-sm leading-6"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blue Feature Cards - Navy #00113A background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blueFeatures.map((feature, index) => (
            <Card
              key={index}
              className="rounded-lg border-0"
              style={{ backgroundColor: '#00113A' }}
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <h3 
                  className="text-base leading-7"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span 
                        className="shrink-0"
                        style={{ color: '#EFBF04', fontFamily: 'Montserrat, sans-serif' }}
                      >
                        •
                      </span>
                      <span 
                        className="text-sm leading-6"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center w-full">
          <Button 
            className="h-auto w-full max-w-[370px] rounded-md px-6 py-3.5 transition-colors hover:opacity-90"
            style={{ backgroundColor: '#EFBF04' }}
          >
            <span 
              className="text-lg text-center leading-5"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
            >
              Learn More About Our Services
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}