"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calculator, DollarSign, BarChart3, Shield, Clock, Globe, Check } from "lucide-react";

const aircraftTypes = [
  { value: "light-jet", label: "Light Jet" },
  { value: "midsize-jet", label: "Midsize Jet" },
  { value: "heavy-jet", label: "Heavy Jet" },
  { value: "turboprop", label: "Turboprop" },
  { value: "helicopter", label: "Helicopter" },
];

const leaseTypes = [
  { value: "dry-lease", label: "Dry Lease" },
  { value: "wet-lease", label: "Wet Lease" },
  { value: "damp-lease", label: "Damp Lease" },
  { value: "acmi-lease", label: "ACMI Lease" },
];

const advantages = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    description:
      "Our transparent pricing ensures you know exactly what you&apos;re paying for, with no surprise charges.",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description:
      "Customize your lease agreement with flexible terms that align with your operational needs.",
  },
  {
    icon: Globe,
    title: "African Expertise",
    description:
      "Benefit from our specialized knowledge of African aviation regulations, routes, and operating conditions.",
  },
];

const transparencyItems = [
  "No hidden fees",
  "All costs included in calculation",
  "Detailed breakdown provided with quote",
];

export function CostCalculatorSection() {
  const [selectedAircraft, setSelectedAircraft] = useState("light-jet");
  const [selectedLease, setSelectedLease] = useState("dry-lease");
  const [flightHours, setFlightHours] = useState([50]);
  const [leaseTerm, setLeaseTerm] = useState([12]);

  return (
    <section id="calculator" className="bg-linear-to-b from-gray-50 to-white py-16 w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-[#003087] text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Know Your Leasing Costs Instantly
          </h2>
          <p
            className="text-gray-700 text-base leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our interactive calculator helps you estimate the costs associated
            with different leasing options. Adjust the parameters below to see
            how they impact your monthly and annual expenses.
          </p>
        </div>

        {/* Calculator + Results Grid */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 mb-12">
          {/* Calculator Card */}
          <Card className="bg-white rounded-xl shadow-lg overflow-hidden border-0">
            <CardHeader className="bg-[#00113A] p-6">
              <div className="flex items-center gap-3">
                <Calculator className="w-7 h-7 text-[#EFBF04]" />
                <h3
                  className="text-white text-xl"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  Leasing Cost Calculator
                </h3>
              </div>
              <p
                className="text-white/80 text-sm mt-1"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Adjust the parameters to calculate your estimated leasing costs
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              {/* Aircraft Type */}
              <div className="space-y-3">
                <label
                  className="text-gray-700 text-sm block"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Aircraft Type
                </label>
                <ToggleGroup
                  type="single"
                  value={selectedAircraft}
                  onValueChange={(value) => value && setSelectedAircraft(value)}
                  className="flex flex-wrap gap-2 justify-start"
                >
                  {aircraftTypes.map((type) => (
                    <ToggleGroupItem
                      key={type.value}
                      value={type.value}
                      className="px-4 py-2 rounded-lg border data-[state=on]:bg-[#EFBF04]/10 data-[state=on]:border-[#EFBF04] data-[state=on]:text-[#00113A] data-[state=off]:border-gray-300 data-[state=off]:text-gray-600 hover:bg-gray-50 transition-colors"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "14px" }}
                    >
                      {type.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* Lease Type */}
              <div className="space-y-3">
                <label
                  className="text-gray-700 text-sm block"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Lease Type
                </label>
                <ToggleGroup
                  type="single"
                  value={selectedLease}
                  onValueChange={(value) => value && setSelectedLease(value)}
                  className="flex flex-wrap gap-2 justify-start"
                >
                  {leaseTypes.map((type) => (
                    <ToggleGroupItem
                      key={type.value}
                      value={type.value}
                      className="px-6 py-2 rounded-lg border data-[state=on]:bg-[#EFBF04]/10 data-[state=on]:border-[#EFBF04] data-[state=on]:text-[#00113A] data-[state=off]:border-gray-300 data-[state=off]:text-gray-600 hover:bg-gray-50 transition-colors"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "14px" }}
                    >
                      {type.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* Flight Hours Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label
                    className="text-gray-700 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Monthly Flight Hours: {flightHours[0]}
                  </label>
                  <span
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    (10-100 hours)
                  </span>
                </div>
                <Slider
                  value={flightHours}
                  onValueChange={setFlightHours}
                  min={10}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div
                  className="flex justify-between text-gray-500 text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>10 hrs</span>
                  <span>50 hrs</span>
                  <span>100 hrs</span>
                </div>
              </div>

              {/* Lease Term Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label
                    className="text-gray-700 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Lease Term: {leaseTerm[0]} months
                  </label>
                  <span
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    (3-36 months)
                  </span>
                </div>
                <Slider
                  value={leaseTerm}
                  onValueChange={setLeaseTerm}
                  min={3}
                  max={36}
                  step={1}
                  className="w-full"
                />
                <div
                  className="flex justify-between text-gray-500 text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span>3 months</span>
                  <span>18 months</span>
                  <span>36 months</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Column */}
          <div className="flex flex-col gap-6">
            {/* Estimated Costs Card */}
            <Card className="bg-white rounded-lg border-2 border-[#EFBF04] shadow-lg overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-[#EFBF04]" />
                  <h3
                    className="text-[#003087] text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    Estimated Costs
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Monthly Base Lease Cost
                    </p>
                    <p
                      className="text-[#003087] text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      $80,000
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Monthly Operational Costs
                    </p>
                    <p
                      className="text-[#003087] text-xl mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      $60,000
                    </p>
                    <p
                      className="text-gray-500 text-xs"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Includes fuel, maintenance, and crew
                    </p>
                  </div>

                  <div className="bg-[#EFBF04]/10 rounded-lg p-4">
                    <p
                      className="text-[#003087] text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Total Monthly Cost
                    </p>
                    <p
                      className="text-[#003087] text-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      $140,000
                    </p>
                  </div>

                  <div className="bg-[#003087]/10 rounded-lg p-4">
                    <p
                      className="text-[#003087] text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Annual Cost
                    </p>
                    <p
                      className="text-[#003087] text-xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      $1,680,000
                    </p>
                  </div>
                </div>

                {/* Transparency */}
                <div className="pt-2 space-y-2">
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Transparency Guarantee:
                  </p>
                  <div className="space-y-1">
                    {transparencyItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 shrink-0" />
                        <span
                          className="text-gray-600 text-xs"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Card */}
            <Card className="bg-white rounded-lg border-2 border-[#003087] shadow-lg overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-[#003087]" />
                  <h3
                    className="text-[#003087] text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    Ownership vs. Leasing
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Ownership Bar */}
                  <div className="bg-gray-100 rounded-full h-12 overflow-hidden">
                    <div
                      className="bg-[#003087] rounded-full h-full flex items-center justify-center"
                      style={{ width: "90%" }}
                    >
                      <span
                        className="text-white text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        Ownership: $2M/year
                      </span>
                    </div>
                  </div>

                  {/* Leasing Bar */}
                  <div className="bg-gray-100 rounded-full h-12 overflow-hidden">
                    <div
                      className="bg-[#EFBF04] rounded-full h-full flex items-center justify-center"
                      style={{ width: "82%" }}
                    >
                      <span
                        className="text-[#00113A] text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        Leasing: $1.84M/year
                      </span>
                    </div>
                  </div>

                  {/* Savings Box */}
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <p
                      className="text-green-800 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Potential Annual Savings
                    </p>
                    <p
                      className="text-green-700 text-2xl mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      $164,000
                    </p>
                    <p
                      className="text-green-600 text-xs"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Save approximately 9% compared to ownership
                    </p>
                  </div>
                </div>

                <Button className="w-full h-auto py-3 bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#00113A] rounded-lg">
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    Get an Instant Quote
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advantages Card */}
        <Card className="bg-white rounded-xl shadow-lg border-0">
          <CardContent className="p-6">
            <h3
              className="text-[#003087] text-xl mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              The Klock Aviation Advantage
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#EFBF04] rounded-lg flex items-center justify-center shrink-0">
                      <advantage.icon className="w-5 h-5 text-[#00113A]" />
                    </div>
                    <h4
                      className="text-[#003087] text-base"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      {advantage.title}
                    </h4>
                  </div>
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}