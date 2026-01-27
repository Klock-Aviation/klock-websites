"use client";

import { Check, TreePine, Droplets, Sun, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const commitmentPoints = [
  "We calculate the carbon footprint of each flight",
  "Investments in certified carbon reduction projects",
  "Regular auditing and transparent reporting",
  "Continuous improvement of operational efficiency",
];

const carbonProjects = [
  { title: "Reforestation", description: "Supporting tree planting and forest conservation initiatives in Kenya and Madagascar.", stat: "11,247 trees planted in 2023", icon: TreePine, bgColor: "bg-green-100", iconColor: "text-green-600" },
  { title: "Clean Water", description: "Funding water purification projects in developing communities across Africa.", stat: "127 communities supported", icon: Droplets, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
  { title: "Renewable Energy", description: "Investing in wind and solar power development in South Africa and Egypt.", stat: "2,300 MWh generated annually", icon: Sun, bgColor: "bg-yellow-100", iconColor: "text-yellow-600" },
  { title: "Certification", description: "All our offset programs are certified by recognized international environmental standards.", stat: "Gold Standard & Verified Carbon Standard", icon: Award, bgColor: "bg-purple-100", iconColor: "text-purple-600" },
];

const stats = [
  { value: "100%", label: "Flights Carbon Offset" },
  { value: "14,580", label: "Tons CO₂ Offset in 2023" },
  { value: "5", label: "Environmental Projects Funded" },
];

export function CarbonOffsettingSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-20 bg-white overflow-hidden flex flex-col items-center w-full relative">
      <div className="relative max-w-[1400px] w-full">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-[#003087] text-4xl md:text-5xl text-center leading-tight" style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}>Our Carbon Offsetting Program</h2>
            <div className="w-[180px] h-[3px] bg-[#EFBF04]" />
          </div>
          <p className="text-gray-600 text-xl md:text-2xl text-center leading-relaxed max-w-3xl whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>Fly with confidence knowing your journey supports environmental sustainability</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Card className="lg:col-span-2 bg-gray-50 shadow-lg">
            <CardContent className="p-8 flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#003087] text-xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>Our Commitment</h3>
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>At Klock Aviation, we&apos;re committed to reducing our environmental impact through comprehensive carbon offsetting initiatives that support global sustainability projects.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pl-16">
                <h4 className="text-[#003087] text-base" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>How It Works</h4>
                <div className="flex flex-col gap-3">
                  {commitmentPoints.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 flex items-center justify-center bg-green-500 rounded-full">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-8">
            {carbonProjects.slice(0, 2).map((project, index) => (
              <Card key={index} className="border-gray-100 shadow-lg">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className={`w-14 h-14 flex items-center justify-center ${project.bgColor} rounded-full`}>
                    <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                  </div>
                  <h3 className="text-[#003087] text-xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{project.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{project.description}</p>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>{project.stat}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {carbonProjects.slice(2, 4).map((project, index) => (
            <Card key={index} className="border-gray-100 shadow-lg">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className={`w-14 h-14 flex items-center justify-center ${project.bgColor} rounded-full`}>
                  <project.icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>
                <h3 className="text-[#003087] text-xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{project.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>{project.description}</p>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>{project.stat}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-[#003087] shadow-xl mb-10">
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-white text-4xl md:text-5xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>{stat.value}</span>
                <span className="text-blue-100 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>{stat.label}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full max-w-[684px] h-auto" alt="Carbon offset visualization" src="/images/carbon-plane.png" />
        </div>
      </div>
    </section>
  );
}