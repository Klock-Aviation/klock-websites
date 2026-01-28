"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Users, Plane, Building2, Check, BarChart3 } from "lucide-react";

const aircraftCategories = [
  { id: "all", label: "All Types" },
  { id: "light", label: "Light Jets" },
  { id: "midsize", label: "Midsize Jets" },
  { id: "heavy", label: "Heavy Jets" },
  { id: "turboprops", label: "Turboprops" },
  { id: "helicopters", label: "Helicopters" },
];

const aircraftData = [
  {
    id: 1,
    name: "Gulfstream G650",
    category: "heavy",
    image: "/images/leasing-gulfstream-g650.png",
    description: "Ideal for international travel with luxury accommodations",
    passengers: "16 Passengers",
    range: "6,750 nm",
    type: "Heavy Jet",
    year: "2018",
  },
  {
    id: 2,
    name: "Cessna Citation Latitude",
    category: "midsize",
    image: "/images/leasing-cessna-citation.png",
    description: "Perfect balance of efficiency and comfort for regional travel",
    passengers: "9 Passengers",
    range: "2,700 nm",
    type: "Midsize Jet",
    year: "2020",
  },
  {
    id: 3,
    name: "Pilatus PC-12",
    category: "turboprops",
    image: "/images/leasing-pilatus-pc12.png",
    description: "Versatile single-engine turboprop with excellent short-field capability",
    passengers: "9 Passengers",
    range: "1,800 nm",
    type: "Turboprop",
    year: "2021",
  },
  {
    id: 4,
    name: "Bell 429",
    category: "helicopters",
    image: "/images/leasing-bell-429.png",
    description: "Modern light twin-engine helicopter with versatile configurations",
    passengers: "7 Passengers",
    range: "411 nm",
    type: "Helicopter",
    year: "2020",
  },
  {
    id: 5,
    name: "Embraer Phenom 300",
    category: "light",
    image: "/images/leasing-embraer-phenom.png",
    description: "Best-selling light jet with exceptional performance and comfort",
    passengers: "8 Passengers",
    range: "2,010 nm",
    type: "Light Jet",
    year: "2022",
  },
  {
    id: 6,
    name: "Airbus H145",
    category: "helicopters",
    image: "/images/leasing-airbus-h145.png",
    description: "Twin-engine helicopter ideal for VIP transport and emergency services",
    passengers: "8 Passengers",
    range: "370 nm",
    type: "Helicopter",
    year: "2019",
  },
];

const aircraftTypes = [
  { id: "light", label: "Light Jet", baseLease: 80000, operational: 60000 },
  { id: "midsize", label: "Midsize Jet", baseLease: 120000, operational: 80000 },
  { id: "heavy", label: "Heavy Jet", baseLease: 180000, operational: 120000 },
  { id: "turboprop", label: "Turboprop", baseLease: 50000, operational: 40000 },
  { id: "helicopter", label: "Helicopter", baseLease: 60000, operational: 45000 },
];

const leaseTypeOptions = [
  { id: "dry", label: "Dry Lease", multiplier: 1 },
  { id: "wet", label: "Wet Lease", multiplier: 1.4 },
  { id: "damp", label: "Damp Lease", multiplier: 1.2 },
  { id: "acmi", label: "ACMI Lease", multiplier: 1.6 },
];

export function AircraftShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAircraftType, setSelectedAircraftType] = useState("light");
  const [selectedLeaseType, setSelectedLeaseType] = useState("dry");
  const [flightHours, setFlightHours] = useState([50]);
  const [leaseTerm, setLeaseTerm] = useState([12]);

  const filteredAircraft =
    selectedCategory === "all"
      ? aircraftData
      : aircraftData.filter((a) => a.category === selectedCategory);

  const calculateCosts = () => {
    const aircraft = aircraftTypes.find((a) => a.id === selectedAircraftType);
    const lease = leaseTypeOptions.find((l) => l.id === selectedLeaseType);

    if (!aircraft || !lease) return { baseLease: 0, operational: 0, total: 0, annual: 0, ownership: 0, savings: 0 };

    const baseLease = Math.round(aircraft.baseLease * lease.multiplier);
    const operational = Math.round(aircraft.operational * lease.multiplier);
    const total = baseLease + operational;
    const annual = total * 12;
    const ownership = Math.round(annual * 1.1);
    const savings = ownership - annual;

    return { baseLease, operational, total, annual, ownership, savings };
  };

  const costs = calculateCosts();

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Aircraft Showcase Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#003087] text-3xl md:text-4xl lg:text-[52px] leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Discover the Perfect Aircraft for Your Needs
          </h2>
          <div className="w-[180px] h-[3px] bg-[#FFC61B] mx-auto mb-6" />
          <p
            className="text-gray-600 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Explore our exclusive selection of aircraft available for lease. From light jets to turboprops, we
            have the perfect aircraft for your operational requirements across Africa and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {aircraftCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={`h-auto px-4 md:px-6 py-2 rounded-full ${
                selectedCategory === cat.id
                  ? "bg-[#FFC61B] text-[#0A2463] hover:bg-[#FFC61B]/90 border-[#FFC61B]"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
                {cat.label}
              </span>
            </Button>
          ))}
        </div>

        {/* Aircraft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAircraft.map((aircraft) => (
            <Card
              key={aircraft.id}
              className="overflow-hidden border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={aircraft.image}
                  alt={aircraft.name}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Text on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className="text-white text-xl mb-1"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                  >
                    {aircraft.name}
                  </h3>
                  <p
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {aircraft.description}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-5">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {aircraft.passengers}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Plane className="w-4 h-4" />
                    <span style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {aircraft.range}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4 text-gray-500" />
                      <span
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {aircraft.type}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[#0A2463] border-[#0A2463]"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Year: {aircraft.year}
                    </Badge>
                  </div>
                </div>

                {/* Yellow View Details Button */}
                <Button className="w-full h-auto py-2 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg">
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    View Details
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search CTA */}
        <div className="text-center mb-16">
          <p
            className="text-gray-600 text-base mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Can&apos;t find what you&apos;re looking for? We have access to a global network of aircraft beyond our listed fleet.
          </p>
          <Button
            variant="outline"
            className="h-auto px-6 py-3 border-[#FFC61B] text-[#0A2463] hover:bg-[#FFC61B]/10 rounded-lg"
          >
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              Request Custom Aircraft Search
            </span>
          </Button>
        </div>

        {/* Blue Divider */}
        <div className="w-full h-2 bg-[#003087] mb-16" />

        {/* Cost Calculator Section */}
        <div id="calculator" className="mb-16">
          <div className="text-center mb-12">
            <h2
              className="text-[#003087] text-3xl md:text-4xl lg:text-[52px] leading-tight mb-4"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
            >
              Know Your Leasing Costs Instantly
            </h2>
            <p
              className="text-gray-600 text-base max-w-2xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our interactive calculator helps you estimate the costs associated with different leasing options.
              Adjust the parameters below to see how they impact your monthly and annual expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {/* Navy Header */}
              <div className="bg-[#0A2463] p-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#FFC61B] rounded flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-[#0A2463]" />
                  </div>
                  <h3
                    className="text-white text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    Leasing Cost Calculator
                  </h3>
                </div>
                <p
                  className="text-white/70 text-sm mt-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Adjust the parameters to calculate your estimated leasing costs
                </p>
              </div>

              <CardContent className="p-6">
                {/* Aircraft Type */}
                <div className="mb-6">
                  <label
                    className="block text-[#0A2463] text-sm mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Aircraft Type
                  </label>
                  <ToggleGroup
                    type="single"
                    value={selectedAircraftType}
                    onValueChange={(value: string) => value && setSelectedAircraftType(value)}
                    className="flex flex-wrap gap-2"
                  >
                    {aircraftTypes.map((type) => (
                      <ToggleGroupItem
                        key={type.id}
                        value={type.id}
                        className="h-auto px-3 md:px-4 py-2 rounded-lg border text-sm data-[state=on]:bg-[#FFC61B] data-[state=on]:text-[#0A2463] data-[state=on]:border-[#FFC61B]"
                      >
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
                          {type.label}
                        </span>
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                {/* Lease Type */}
                <div className="mb-6">
                  <label
                    className="block text-[#0A2463] text-sm mb-3"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Lease Type
                  </label>
                  <ToggleGroup
                    type="single"
                    value={selectedLeaseType}
                    onValueChange={(value: string) => value && setSelectedLeaseType(value)}
                    className="flex flex-wrap gap-2"
                  >
                    {leaseTypeOptions.map((type) => (
                      <ToggleGroupItem
                        key={type.id}
                        value={type.id}
                        className="h-auto px-3 md:px-4 py-2 rounded-lg border text-sm data-[state=on]:bg-[#FFC61B] data-[state=on]:text-[#0A2463] data-[state=on]:border-[#FFC61B]"
                      >
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>
                          {type.label}
                        </span>
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                {/* Flight Hours Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label
                      className="text-[#0A2463] text-sm"
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
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10 hrs</span>
                    <span>50 hrs</span>
                    <span>100 hrs</span>
                  </div>
                </div>

                {/* Lease Term Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label
                      className="text-[#0A2463] text-sm"
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
                    step={3}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 months</span>
                    <span>18 months</span>
                    <span>36 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <div className="flex flex-col gap-4">
              {/* Estimated Costs Card */}
              <Card className="border-2 border-[#FFC61B] rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[#FFC61B] text-xl">$</span>
                    <h3
                      className="text-[#0A2463] text-xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Estimated Costs
                    </h3>
                  </div>

                  {/* Monthly Base Lease Cost */}
                  <div className="mb-4">
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Monthly Base Lease Cost
                    </p>
                    <p
                      className="text-[#0A2463] text-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      ${costs.baseLease.toLocaleString()}
                    </p>
                  </div>

                  {/* Monthly Operational Costs */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <p
                      className="text-gray-500 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Monthly Operational Costs
                    </p>
                    <p
                      className="text-[#0A2463] text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      ${costs.operational.toLocaleString()}
                    </p>
                    <p
                      className="text-gray-400 text-xs mt-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Includes fuel, maintenance, and crew
                    </p>
                  </div>

                  {/* Total Monthly Cost */}
                  <div className="mb-4 p-4 bg-[#0A2463] rounded-lg">
                    <p
                      className="text-white/70 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Total Monthly Cost
                    </p>
                    <p
                      className="text-white text-3xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      ${costs.total.toLocaleString()}
                    </p>
                  </div>

                  {/* Annual Cost */}
                  <div className="mb-6 p-4 bg-[#0A2463]/80 rounded-lg">
                    <p
                      className="text-white/70 text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Annual Cost
                    </p>
                    <p
                      className="text-white text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      ${costs.annual.toLocaleString()}
                    </p>
                  </div>

                  {/* Transparency Guarantee */}
                  <div className="mb-4">
                    <p
                      className="text-gray-600 text-sm mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Transparency Guarantee:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          No hidden fees
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          All costs included in calculation
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                          Detailed breakdown provided with quote
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ownership vs Leasing Comparison */}
              <Card className="border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-[#0A2463]" />
                    <h4
                      className="text-[#0A2463] text-lg"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Ownership vs. Leasing
                    </h4>
                  </div>

                  {/* Ownership Bar */}
                  <div className="mb-4">
                    <div className="w-full h-12 bg-[#0A2463] rounded-lg flex items-center justify-center">
                      <span
                        className="text-white text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        Ownership: ${(costs.ownership / 1000000).toFixed(1)}M/year
                      </span>
                    </div>
                  </div>

                  {/* Leasing Bar */}
                  <div className="mb-4">
                    <div
                      className="h-12 bg-[#FFC61B] rounded-lg flex items-center justify-center"
                      style={{ width: `${Math.min((costs.annual / costs.ownership) * 100, 100)}%`, minWidth: "60%" }}
                    >
                      <span
                        className="text-[#0A2463] text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        Leasing: ${(costs.annual / 1000000).toFixed(1)}M/year
                      </span>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p
                      className="text-[#FFC61B] text-sm mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Potential Annual Savings
                    </p>
                    <p
                      className="text-[#FFC61B] text-2xl"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      ${costs.savings.toLocaleString()}
                    </p>
                    <p
                      className="text-gray-500 text-xs mt-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Save approximately {Math.round((costs.savings / costs.ownership) * 100)}% compared to ownership
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full mt-4 h-auto py-3 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-lg">
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                      Get an Instant Quote
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}