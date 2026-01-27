"use client";

import { useState } from "react";
import { Search, Calendar, Users, MapPin, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const flightTypes = [
  { value: "private", title: "Private Jet Charter", description: "Book an entire Aircraft" },
  { value: "shared", title: "Shared Seat Flight", description: "Purchase Individual Seats" },
  { value: "corporate", title: "Corporate Flights", description: "Fly at Discounted Rate" },
];

const tripTypes = [
  { value: "oneway", label: "One Way" },
  { value: "roundtrip", label: "Round Trip" },
  { value: "multileg", label: "Multi-Leg" },
];

export function SearchFilterSection() {
  const [selectedFlightType, setSelectedFlightType] = useState("private");
  const [selectedTripType, setSelectedTripType] = useState("roundtrip");

  return (
    <section className="w-full flex justify-center px-4 -mt-24 relative z-20">
      <Card className="w-full max-w-[1712px] bg-[#00113A] border-0 rounded-[30px] shadow-xl">
        <CardContent className="p-6 md:p-8 flex flex-col gap-6 md:gap-8">
          <Tabs value={selectedFlightType} onValueChange={setSelectedFlightType} className="w-full">
            <TabsList className="w-full h-auto bg-transparent gap-4 md:gap-6 p-0 flex flex-col md:flex-row">
              {flightTypes.map((type) => (
                <TabsTrigger
                  key={type.value}
                  value={type.value}
                  className={`flex-1 h-auto md:h-[100px] flex flex-col items-start justify-center gap-2.5 px-5 py-4 md:py-2.5 bg-white/10 rounded-[10px] data-[state=active]:bg-white/10 transition-all hover:scale-[1.02] ${
                    selectedFlightType === type.value ? "border border-white" : "border border-transparent"
                  }`}
                >
                  <span
                    className={`text-xl md:text-2xl text-left ${selectedFlightType === type.value ? "text-white" : "text-white/50"}`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                  >
                    {type.title}
                  </span>
                  <span
                    className={`text-sm md:text-base text-left ${selectedFlightType === type.value ? "text-white" : "text-white/50"}`}
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {type.description}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col p-4 bg-white/10 rounded-[10px] cursor-pointer hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#EFBF04]" />
                <span className="text-[#8e96a8] text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>From</span>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>Lagos, Nigeria</span>
            </div>

            <button className="hidden lg:flex absolute top-1/2 left-[19%] -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#EFBF04] rounded-full items-center justify-center hover:rotate-180 transition-transform z-10">
              <ArrowRightLeft className="w-5 h-5 text-[#00113A]" />
            </button>

            <div className="flex flex-col p-4 bg-white/10 rounded-[10px] border border-white cursor-pointer hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#EFBF04]" />
                <span className="text-[#8e96a8] text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>To</span>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>California, USA</span>
            </div>

            <div className="flex flex-col p-4 bg-white/10 rounded-[10px] cursor-pointer hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-[#EFBF04]" />
                <span className="text-[#8e96a8] text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Departure</span>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>20-July-2025</span>
            </div>

            <div className="flex flex-col p-4 bg-white/10 rounded-[10px] cursor-pointer hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-[#EFBF04]" />
                <span className="text-[#8e96a8] text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Return</span>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>23-July-2025</span>
            </div>

            <div className="flex flex-col p-4 bg-white/10 rounded-[10px] cursor-pointer hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#EFBF04]" />
                <span className="text-[#8e96a8] text-sm" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Passengers</span>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}>10</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <RadioGroup value={selectedTripType} onValueChange={setSelectedTripType} className="flex flex-wrap items-center gap-4">
              {tripTypes.map((type) => (
                <div
                  key={type.value}
                  className="flex items-center p-3 rounded-lg border border-slate-200/30 cursor-pointer hover:bg-white/5 transition-colors"
                  onClick={() => setSelectedTripType(type.value)}
                >
                  <RadioGroupItem value={type.value} id={type.value} className="w-5 h-5 border-white text-white" />
                  <Label
                    htmlFor={type.value}
                    className="pl-3 text-white text-lg leading-6 whitespace-nowrap cursor-pointer"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
                  >
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <Button className="h-16 md:h-[78px] px-8 md:px-10 bg-[#EFBF04] hover:bg-[#EFBF04]/90 rounded-[10px] transition-transform hover:scale-[1.02]">
              <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
              <span className="ml-2.5 text-white text-xl md:text-2xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}>Explore</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}