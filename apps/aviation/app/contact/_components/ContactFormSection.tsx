"use client";

import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactFormSection() {
  const [selectedFile, setSelectedFile] = useState("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <Card className="bg-white rounded-[20px] shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2
                className="text-[#091D42] text-2xl font-bold mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Send Us an Inquiry
              </h2>

              <form className="flex flex-col gap-4">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="h-10 bg-white border-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="h-10 bg-white border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="h-10 bg-white border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="contact-method" className="text-gray-700 text-sm font-medium">
                      Preferred Contact Method
                    </Label>
                    <Select defaultValue="Email">
                      <SelectTrigger className="h-10 bg-white border-gray-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Email">Email</SelectItem>
                        <SelectItem value="Phone">Phone</SelectItem>
                        <SelectItem value="Text">Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="inquiry-type" className="text-gray-700 text-sm font-medium">
                    Inquiry Type
                  </Label>
                  <Select defaultValue="Charter Services">
                    <SelectTrigger className="h-10 bg-white border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Charter Services">Charter Services</SelectItem>
                      <SelectItem value="Aircraft Acquisition">Aircraft Acquisition</SelectItem>
                      <SelectItem value="Financing">Financing</SelectItem>
                      <SelectItem value="Investment Consulting">Investment Consulting</SelectItem>
                      <SelectItem value="Market Analysis">Market Analysis</SelectItem>
                      <SelectItem value="Fleet Management">Fleet Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <Label htmlFor="message" className="text-gray-700 text-sm font-medium">
                    Message / Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px] bg-white border-gray-300 resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-1">
                  <Label className="text-gray-700 text-sm font-medium">
                    Upload Documents (Optional)
                  </Label>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300">
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 border-2 border-gray-800 cursor-pointer hover:bg-gray-200 transition-colors text-sm"
                    >
                      Choose File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <span className="text-gray-600 text-sm">{selectedFile}</span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    For RFQs or specific requests (Max 5MB)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-10 bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-[#091D42] font-medium"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right - Map and Info */}
          <div className="flex flex-col gap-6">
            {/* Map Card */}
            <Card className="overflow-hidden shadow-md">
              <div className="h-64 relative bg-[#091D42]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/contact-map.jpg"
                  alt="Dubai Office Location"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Fallback content if image fails */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <MapPin className="w-8 h-8 mb-2" />
                  <p className="text-base">Interactive Map - Dubai Office Location</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3
                  className="text-[#091D42] text-xl font-bold mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our Offices
                </h3>

                <div className="space-y-4">
                  {/* Dubai Office */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFB81C] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#091D42] font-semibold">Dubai Headquarters</p>
                      <p className="text-gray-600 text-sm">123 Aviation Way, Dubai, UAE</p>
                      <a href="#" className="text-[#091D42] text-sm hover:underline">
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Johannesburg Office */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFB81C] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#091D42] font-semibold">Johannesburg Office</p>
                      <p className="text-gray-600 text-sm">456 Aviation Boulevard, Johannesburg, South Africa</p>
                      <a href="#" className="text-[#091D42] text-sm hover:underline">
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3
                  className="text-[#091D42] text-xl font-bold mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Business Hours
                </h3>

                <div className="space-y-3">
                  {/* Monday - Friday */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#FFB81C] shrink-0" />
                      <span className="text-[#091D42] font-medium text-sm">Monday - Friday</span>
                    </div>
                    <span className="text-gray-600 text-sm">8:00 AM - 6:00 PM</span>
                  </div>

                  {/* Saturday */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#FFB81C] shrink-0" />
                      <span className="text-[#091D42] font-medium text-sm">Saturday</span>
                    </div>
                    <span className="text-gray-600 text-sm">9:00 AM - 2:00 PM</span>
                  </div>

                  {/* Sunday */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#FFB81C] shrink-0" />
                      <span className="text-[#091D42] font-medium text-sm">Sunday</span>
                    </div>
                    <span className="text-gray-600 text-sm">Closed</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-500 text-sm">
                    Note: 24/7 emergency services are available for our clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}