"use client";

import { Check, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const benefits = [
  "Expert team with decades of industry experience",
  "Custom solutions tailored to your specific needs",
  "Access to exclusive market opportunities",
  "Comprehensive financial guidance and support",
  "Ongoing partnership throughout your aviation journey",
];

export function ContactSection() {
  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-24 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <Card className="overflow-hidden rounded-3xl shadow-2xl border-0">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Form Side */}
              <div className="flex flex-col gap-6 p-8 md:p-12">
                <div className="flex flex-col gap-4">
                  <h2
                    className="text-[#0A2463] text-3xl md:text-4xl leading-tight"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 700,
                    }}
                  >
                    Start Your Journey with
                    <br />
                    Klock Aviation
                  </h2>
                  <p
                    className="text-slate-500 text-base md:text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Get personalized consultation tailored to your aircraft
                    financing and management needs. Our experts are ready to
                    guide you through every step.
                  </p>
                </div>

                <form className="flex flex-col gap-5 pt-2">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="fullName"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="companyName"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Your Company"
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="email"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="phone"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="service"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Service of Interest
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acquisition">
                            Aircraft Acquisition
                          </SelectItem>
                          <SelectItem value="valuation">
                            Valuation &amp; Analysis
                          </SelectItem>
                          <SelectItem value="investment">
                            Investment Management
                          </SelectItem>
                          <SelectItem value="operations">
                            Operational Consulting
                          </SelectItem>
                          <SelectItem value="fleet">Fleet Planning</SelectItem>
                          <SelectItem value="compliance">
                            Regulatory Compliance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="budget"
                        className="text-[#0A2463]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Budget Range
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1m">Under $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                          <SelectItem value="over-25m">Over $25M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="message"
                      className="text-[#0A2463]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide any specific details about your requirements"
                      className="min-h-[120px] bg-gray-50 border-gray-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="h-auto bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463] rounded-xl px-8 py-3 shadow-lg transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    <span className="text-lg">Request Consultation</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Benefits Side */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12 bg-linear-to-br from-[#0a192f] to-[#0A2463]">
                <h3
                  className="text-white text-2xl md:text-3xl"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 700,
                  }}
                >
                  Why Consult With Us?
                </h3>

                <ul className="flex flex-col gap-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FFC61B]/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-[#FFC61B]" />
                      </div>
                      <span
                        className="text-white text-base md:text-[17px] leading-7"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="flex flex-col gap-3 pt-8 border-t border-white/20">
                  <h4
                    className="text-white text-xl mb-1"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Contact us directly
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFC61B]/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#FFC61B]" />
                    </div>
                    <span
                      className="text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      +254 725 332 222
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFC61B]/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#FFC61B]" />
                    </div>
                    <span
                      className="text-white"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      consulting@klockaviation.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}