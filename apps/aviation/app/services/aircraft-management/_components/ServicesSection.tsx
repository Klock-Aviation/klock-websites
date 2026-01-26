"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Settings, TrendingUp, Users, ClipboardCheck, BadgeCheck } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Maintenance Management",
    description:
      "Ensure your aircraft operates at peak performance with our expert maintenance oversight.",
  },
  {
    icon: TrendingUp,
    title: "Charter Revenue",
    description:
      "Turn downtime into income by chartering your aircraft through our global network.",
  },
  {
    icon: Users,
    title: "Crew Staffing",
    description:
      "Access highly trained pilots and crew tailored to your preferences.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
    description: "Stay compliant with global aviation standards effortlessly.",
  },
  {
    icon: BadgeCheck,
    title: "Cost Management",
    description:
      "Leverage exclusive deals for fuel, insurance, and operational expenses.",
  },
];

const basicFeatures = [
  "Flight scheduling and crew coordination",
  "Maintenance and compliance monitoring",
  "Transparent cost reporting",
  "Ideal for owners seeking essential support while retaining control",
];

const packageHighlights = [
  "Monthly maintenance scheduling",
  "Quarterly performance reports",
  "Standard crew management",
];

export function ServicesSection() {
  return (
    <section className="flex flex-col w-full items-center pt-20 pb-32 px-4 bg-[#F8F9FA]">
      <div className="flex flex-col max-w-[1400px] w-full items-center gap-12">
        {/* Header */}
        <header className="flex flex-col w-full items-center gap-4">
          <h2 
            className="text-4xl md:text-[52px] leading-tight text-center whitespace-nowrap"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Comprehensive Aircraft Management Services
          </h2>

          {/* Gold underline - FIXED */}
          <div className="w-[120px] h-[3px]" style={{ backgroundColor: '#EFBF04' }} />

          <p 
            className="text-lg text-center leading-6 max-w-[830px]"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Our extensive range of services ensures your aircraft operates at
            peak efficiency while maximizing its potential.
          </p>
        </header>

        {/* Service Cards Grid - White cards with cream icon backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white overflow-hidden shadow-sm border-0 transition-transform hover:scale-105"
              >
                <CardContent className="flex flex-col items-start gap-3 p-6">
                  {/* Cream/beige circular background with gold icon */}
                  <div className="w-14 h-14 rounded-full bg-[#FDF6E3] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-[#EFBF04]" />
                  </div>
                  <h3 
                    className="text-lg leading-7"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-base leading-5"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Management Tabs - Navy #00113A background */}
        <div className="w-full flex flex-col items-center gap-10">
          <Tabs defaultValue="basic" className="w-full">
            {/* Tab bar - Dark Navy #00113A */}
            <div className="flex flex-col items-center px-6 py-4 w-full bg-[#00113A] rounded-t-lg">
              <TabsList className="inline-flex h-auto items-center justify-center p-1 bg-[#00113A] rounded-md flex-wrap gap-2">
                <TabsTrigger
                  value="basic"
                  className="px-6 md:px-12 py-3 text-lg md:text-2xl text-center leading-5 whitespace-nowrap rounded-md data-[state=active]:bg-[#EFBF04] data-[state=active]:text-[#00113A] data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
                >
                  Basic Management
                </TabsTrigger>
                <TabsTrigger
                  value="premium"
                  className="px-6 md:px-12 py-3 text-lg md:text-2xl text-center leading-5 whitespace-nowrap rounded-md data-[state=active]:bg-[#EFBF04] data-[state=active]:text-[#00113A] data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
                >
                  Premium Full-Service
                </TabsTrigger>
                <TabsTrigger
                  value="leasing"
                  className="px-6 md:px-12 py-3 text-lg md:text-2xl text-center leading-5 whitespace-nowrap rounded-md data-[state=active]:bg-[#EFBF04] data-[state=active]:text-[#00113A] data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
                >
                  Aircraft Leasing
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="basic" className="mt-10">
              <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full">
                {/* Left Column - Description */}
                <div className="flex flex-col w-full lg:w-[636px] items-start gap-4">
                  <h3 
                    className="text-2xl leading-8"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                  >
                    Basic Aircraft Management
                  </h3>

                  <p 
                    className="text-base leading-6"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    Our essential management package provides fundamental
                    support while allowing you to retain control over your
                    aircraft operations.
                  </p>

                  <div className="flex flex-col items-start gap-3 pt-2 pb-4 w-full">
                    {basicFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 w-full">
                        {/* Simple gold checkmark - no circle background */}
                        <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                          <path 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            fill="#EFBF04"
                          />
                        </svg>
                        <p 
                          className="text-sm leading-6"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="h-auto px-4 py-2 rounded-md transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#EFBF04' }}
                  >
                    <span 
                      className="text-base text-center leading-5"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Learn more about basic management
                    </span>
                  </Button>
                </div>

                {/* Right Column - Pricing Card */}
                <div className="flex flex-col w-full lg:w-[636px] items-start gap-6 p-8 bg-white rounded-lg border border-[#F3F4F6]">
                  <Card className="w-full shadow-sm border-[#F3F4F6]">
                    <CardContent className="flex flex-col items-start gap-3 p-6">
                      <h4 
                        className="text-lg leading-7"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                      >
                        Package Highlights
                      </h4>

                      <div className="flex flex-col items-start gap-3 w-full">
                        {packageHighlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2 w-full">
                            {/* Simple gold checkmark - no circle background */}
                            <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                              <path 
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                fill="#EFBF04"
                              />
                            </svg>
                            <p 
                              className="text-sm leading-6"
                              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                            >
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col items-center gap-1 w-full">
                    <p 
                      className="text-xs text-center leading-5"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                    >
                      Starting from
                    </p>

                    <div className="flex items-baseline justify-center w-full h-12">
                      <span 
                        className="text-3xl text-center leading-9"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                      >
                        $5,000
                      </span>
                      <span 
                        className="text-xs text-center leading-5 ml-2"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        /month
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      className="h-10 px-4 py-2 bg-white border-[#00113A] hover:bg-[#F8F9FA] transition-colors"
                    >
                      <span 
                        className="text-xs text-center leading-5"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600 }}
                      >
                        Get a custom quote
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-10">
              <div className="flex items-center justify-center w-full p-8">
                <p 
                  className="text-lg text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Premium Full-Service content coming soon...
                </p>
              </div>
            </TabsContent>

            <TabsContent value="leasing" className="mt-10">
              <div className="flex items-center justify-center w-full p-8">
                <p 
                  className="text-lg text-center"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Aircraft Leasing content coming soon...
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}