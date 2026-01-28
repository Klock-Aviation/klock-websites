"use client";

import { useState } from "react";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const timeSlots = [
  { time: "9:00 AM", id: "9am" },
  { time: "10:00 AM", id: "10am" },
  { time: "11:00 AM", id: "11am" },
  { time: "1:00 PM", id: "1pm" },
  { time: "2:00 PM", id: "2pm" },
  { time: "3:00 PM", id: "3pm" },
];

const consultationOptions = [
  {
    title: "Initial Consultation",
    description: "A 30-minute introduction to our services and how we can meet your aviation needs.",
    duration: "30 Minutes",
    price: "Free",
    popular: false,
  },
  {
    title: "Charter Assessment",
    description: "Detailed discussion about your charter needs with personalized recommendations.",
    duration: "45 Minutes",
    price: "$150",
    popular: true,
  },
  {
    title: "Comprehensive Strategy",
    description: "In-depth consultation for complex aviation needs and long-term solutions.",
    duration: "60 Minutes",
    price: "$250",
    popular: false,
  },
];

export function ConsultationSection() {
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedTime, setSelectedTime] = useState("11am");

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#091D42] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Book a Consultation
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Schedule a video call with our aviation experts to discuss your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Calendar */}
          <Card className="bg-[#F0F2F5] border-0 shadow-none">
            <CardContent className="p-6 md:p-8">
              <h3
                className="text-[#091D42] text-2xl font-bold mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Select a Date &amp; Time
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Calendar */}
                <Card className="shadow-md bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronLeft className="w-4 h-4 text-[#091D42]" />
                      </button>
                      <h4
                        className="text-[#091D42] font-semibold"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        April 2025
                      </h4>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronRight className="w-4 h-4 text-[#091D42]" />
                      </button>
                    </div>

                    {/* Week days */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {weekDays.map((day, index) => (
                        <div
                          key={index}
                          className="text-center text-gray-500 text-sm font-medium py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar days */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`py-2 rounded-full text-sm transition-colors ${
                            selectedDay === day
                              ? "bg-[#091D42] text-white"
                              : "bg-gray-100 text-[#091D42] hover:bg-gray-200"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Time Slots */}
                <Card className="shadow-md bg-white">
                  <CardContent className="p-4">
                    <h4
                      className="text-[#091D42] font-semibold mb-4"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Available Time Slots
                    </h4>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedTime(slot.id)}
                          className={`py-2 px-3 rounded text-sm transition-colors ${
                            selectedTime === slot.id
                              ? "bg-[#091D42] text-white"
                              : "bg-gray-100 text-[#091D42] hover:bg-gray-200"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <h5
                        className="text-[#091D42] font-semibold mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Selected Slot
                      </h5>
                      <div className="flex items-center gap-2 p-3 bg-[#F0F2F5] rounded">
                        <CalendarIcon className="w-4 h-4 text-[#091D42]" />
                        <span className="text-[#091D42] text-sm">
                          April {selectedDay}, 2025 - {timeSlots.find(s => s.id === selectedTime)?.time}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button className="w-full h-10 bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-[#091D42] font-medium">
                Confirm Booking
              </Button>
            </CardContent>
          </Card>

          {/* Right - Options */}
          <div>
            <h3
              className="text-[#091D42] text-2xl font-bold mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Consultation Options
            </h3>

            <div className="flex flex-col gap-4">
              {consultationOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`${
                    option.popular
                      ? "border-2 border-[#FFB81C] shadow-md"
                      : "border border-gray-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {option.popular && (
                          <Badge className="bg-[#FFB81C] text-[#091D42] hover:bg-[#FFB81C] text-xs mb-2">
                            MOST POPULAR
                          </Badge>
                        )}
                        <h4
                          className="text-[#091D42] text-xl font-semibold mb-2"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {option.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {option.description}
                        </p>
                        <Badge variant="secondary" className="bg-[#F0F2F5] text-[#091D42]">
                          {option.duration}
                        </Badge>
                      </div>
                      <div className="text-[#091D42] text-xl font-bold ml-4">
                        {option.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}