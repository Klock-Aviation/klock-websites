"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Phone,
  Building2,
  Shield,
  Send,
  MapPin,
  MessageSquare,
  Video,
  HelpCircle,
} from "lucide-react";

const formFields = [
  {
    id: "fullName",
    label: "Full Name *",
    placeholder: "John Smith",
    icon: User,
  },
  {
    id: "email",
    label: "Email Address *",
    placeholder: "johnsmith@example.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "+1 (123) 456-7890",
    icon: Phone,
  },
  {
    id: "company",
    label: "Company/Organization",
    placeholder: "Your Company Ltd.",
    icon: Building2,
  },
];

const contactInfo = [
  {
    icon: Phone,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Phone",
    value: "+123 456 7890",
    subtitle: "Mon-Fri: 8:00 AM - 6:00 PM (EAT)",
  },
  {
    icon: Mail,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Email",
    value: "leasing@klockaviation.com",
    subtitle: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Headquarters",
    value: "123 Aviation Way, Nairobi, Kenya",
    subtitle: "Regional offices in Lagos, Johannesburg, and Cairo",
  },
];

const faqItems = [
  "What documentation is required for leasing?",
  "How long does the leasing process take?",
  "What happens in case of maintenance issues?",
  "View all FAQs",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section className="bg-linear-to-b from-[#0A2463]/5 to-white py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#003087] text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Start Your Journey with Klock Aviation
          </h2>
          <p
            className="text-gray-600 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Whether you&apos;re looking to lease an aircraft or have questions about
            our services, our dedicated team is here to help. Reach out today
            and experience the Klock difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-slate-200 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#0A2463] text-white p-6">
              <h3
                className="text-lg"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
              >
                Get in Touch
              </h3>
              <p
                className="text-white/80 text-sm"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Fill out the form below and our team will respond within 24 hours
              </p>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {formFields.map((field) => (
                <div key={field.id} className="space-y-1">
                  <Label
                    htmlFor={field.id}
                    className="text-gray-700 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {field.label}
                  </Label>
                  <div className="relative">
                    <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="pl-12 border-gray-300"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    />
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-2">
                <Button className="h-auto px-6 py-2 bg-[#0A2463] hover:bg-[#0A2463]/90 text-white">
                  <span
                    className="text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Next Step
                  </span>
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Your information is secure and encrypted
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Contact Info Card */}
            <Card className="border-slate-200 shadow-lg overflow-hidden">
              <CardHeader className="bg-[#0A2463] text-white p-6">
                <h3
                  className="text-lg"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  Contact Information
                </h3>
                <p
                  className="text-white/80 text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Reach out to us directly through any of these channels
                </p>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-10 h-10 ${info.iconBg} rounded-lg flex items-center justify-center shrink-0`}>
                      <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <h4
                        className="text-[#0A2463] text-base"
                        style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}
                      >
                        {info.title}
                      </h4>
                      <p
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {info.value}
                      </p>
                      <p
                        className="text-gray-400 text-xs pt-1"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Options */}
            <Card className="border-slate-200 shadow-lg overflow-hidden">
              <CardHeader className="bg-[#FFC61B]/10 p-4">
                <h3
                  className="text-[#0A2463] text-lg"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  Quick Response Options
                </h3>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Button
                  variant="outline"
                  className="h-10 w-full justify-center gap-2 border-gray-300 text-[#0A2463] hover:bg-gray-50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    Start Live Chat
                  </span>
                </Button>

                <Button className="h-10 w-full justify-center gap-2 bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-4 h-4" />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    WhatsApp Support
                  </span>
                </Button>

                <Button className="h-10 w-full justify-center gap-2 bg-[#FFC61B] hover:bg-[#FFC61B]/90 text-[#0A2463]">
                  <Video className="w-4 h-4" />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    Schedule a Video Call
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Card */}
            <Card className="bg-gray-50 border-0 shadow-sm">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#0A2463]" />
                  <h4
                    className="text-[#0A2463] text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Frequently Asked Questions
                  </h4>
                </div>
                <ul className="space-y-2">
                  {faqItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">•</span>
                      <span
                        className="text-gray-600 text-sm hover:text-[#0A2463] cursor-pointer"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}