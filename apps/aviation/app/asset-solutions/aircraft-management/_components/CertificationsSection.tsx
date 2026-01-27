"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Globe, Award } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "IS-BAO Stage II",
    description: "International Standard for Business Aircraft Operations",
  },
  {
    icon: CheckCircle,
    title: "EASA Compliant",
    description: "European Union Aviation Safety Agency Standards",
  },
  {
    icon: Globe,
    title: "AFRAA Member",
    description: "African Airlines Association",
  },
  {
    icon: Award,
    title: "NBAA Member",
    description: "National Business Aviation Association",
  },
];

export function CertificationsSection() {
  return (
    <section className="flex flex-col items-center px-4 py-20 w-full bg-white">
      <div className="flex flex-col max-w-[1400px] w-full items-center gap-6">
        <h2 
          className="w-full max-w-[1072px] text-4xl md:text-[52px] text-center leading-tight"
          style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
        >
          Trusted by Aviation Experts Worldwide
        </h2>

        {/* Gold underline - FIXED */}
        <div className="w-[120px] h-[3px]" style={{ backgroundColor: '#EFBF04' }} />

        <p 
          className="w-full text-lg text-center leading-6"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
        >
          Klock Aviation adheres to the highest standards of safety,
          compliance, and service excellence.
        </p>

        {/* Certification Cards */}
        <div className="flex items-start justify-center gap-8 w-full flex-wrap pt-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="w-full sm:w-[280px] bg-white rounded-xl overflow-hidden border border-[#F3F4F6] shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="flex flex-col items-center p-6">
                  {/* Placeholder icon circle */}
                  <div className="w-20 h-20 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-4">
                    <IconComponent className="w-10 h-10 text-[#9CA3AF]" />
                  </div>

                  <h3 
                    className="pb-2 text-lg text-center leading-7"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                  >
                    {cert.title}
                  </h3>

                  <p 
                    className="w-full text-sm text-center leading-5"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partners Card */}
        <Card className="w-full bg-[#F8F9FA] rounded-xl shadow-sm mt-6 border border-[#F3F4F6]">
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <h3 
              className="w-full text-xl text-center leading-7"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
            >
              Our Premium Partners
            </h3>

            {/* Partner logo placeholders */}
            <div className="flex items-center justify-center gap-12 flex-wrap py-4">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className="w-20 h-12 bg-[#E5E7EB] rounded flex items-center justify-center"
                >
                  <span 
                    className="text-xs text-[#9CA3AF]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Logo {num}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}