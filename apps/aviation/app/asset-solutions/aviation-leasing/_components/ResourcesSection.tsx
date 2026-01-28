"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Video, BookOpen } from "lucide-react";

const tabItems = [
  { value: "guides", label: "Guides", icon: FileText },
  { value: "blog", label: "Blog", icon: BookOpen },
  { value: "webinars", label: "Webinars", icon: Video },
];

const resourceCards = [
  {
    id: "aircraft-leasing-101",
    gradient: "bg-linear-to-r from-[#00113A] to-[#060F2E]",
    icon: FileText,
    title: "Aircraft Leasing 101",
    subtitle: "Everything You Need to Know",
    description:
      "A comprehensive guide to understanding different leasing options, contract terms, and financial considerations for businesses and individuals.",
    features: [
      "Types of aircraft leases explained",
      "Financial implications & tax benefits",
      "Contract negotiation strategies",
    ],
    buttonText: "Download Guide",
    buttonBg: "bg-[#00113A]",
    buttonTextColor: "text-white",
  },
  {
    id: "aviation-trends",
    gradient: "bg-linear-to-r from-[#EFBF04] to-[#F59E0B]",
    icon: FileText,
    title: "Aviation Trends in Africa",
    subtitle: "Market Insights 2025",
    description:
      "Explore the latest trends, growth opportunities, and regulatory developments shaping the African aviation landscape.",
    features: [
      "Regional market analysis",
      "Emerging route opportunities",
      "Regulatory evolution across the continent",
    ],
    buttonText: "Download Report",
    buttonBg: "bg-[#EFBF04]",
    buttonTextColor: "text-[#00113A]",
  },
  {
    id: "cost-optimization",
    gradient: "bg-linear-to-r from-[#0EA5E9] to-[#2563EB]",
    icon: FileText,
    title: "Cost Optimization Guide",
    subtitle: "Maximizing ROI on Aircraft Leases",
    description:
      "Practical strategies to minimize costs and maximize returns on your aircraft leasing investments.",
    features: [
      "Maintenance cost reduction strategies",
      "Fuel efficiency optimization",
      "Revenue generation opportunities",
    ],
    buttonText: "Download Guide",
    buttonBg: "bg-blue-600",
    buttonTextColor: "text-white",
  },
];

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState("guides");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#003087] text-4xl md:text-[52px] leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Your Guide to Aircraft Leasing
          </h2>
          <div className="w-[180px] h-[3px] bg-[#EFBF04] mx-auto mb-6" />
          <p
            className="text-gray-600 text-sm max-w-2xl mx-auto"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Access our expert resources to better understand aviation leasing
            options, industry trends, and strategies to maximize your operational
            efficiency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-lg w-full">
            <TabsList className="flex w-full h-10 items-center justify-center p-1 bg-slate-100 rounded-md">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center gap-2 px-6 md:px-12 py-1.5 rounded data-[state=active]:bg-[#EFBF04] data-[state=active]:shadow-sm data-[state=active]:text-[#00113A] data-[state=inactive]:text-slate-500"
                >
                  <tab.icon className="w-4 h-4" />
                  <span
                    className="text-base"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {tab.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resourceCards.map((card) => (
            <Card
              key={card.id}
              className="overflow-hidden border border-gray-100 shadow-lg rounded-lg"
            >
              {/* Header with Gradient */}
              <div
                className={`flex flex-col h-48 items-center justify-center p-6 ${card.gradient}`}
              >
                <card.icon className="w-16 h-16 text-white mb-4" />
                <h3
                  className="text-white text-xl text-center"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h4
                  className="text-[#00113A] text-lg mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                >
                  {card.subtitle}
                </h4>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {card.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#EFBF04] text-sm">•</span>
                      <span
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`h-auto px-4 py-2 w-full rounded-md ${card.buttonBg} hover:opacity-90`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span
                    className={`text-sm ${card.buttonTextColor}`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {card.buttonText}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <Card className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Form */}
              <div className="flex flex-col gap-4">
                <h3
                  className="text-[#00113A] text-xl"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                >
                  Subscribe to Our Newsletter
                </h3>

                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Stay updated with the latest insights, market trends, and
                  exclusive resources for aviation leasing in Africa. No spam,
                  just valuable content delivered monthly.
                </p>

                <form className="flex w-full items-center gap-3 pt-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-10 bg-white rounded-lg border-gray-300"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  />
                  <Button
                    type="submit"
                    className="h-10 px-4 py-2 bg-[#EFBF04] hover:bg-[#EFBF04]/90 rounded-md"
                  >
                    <span
                      className="text-[#00113A] text-xs"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                    >
                      Subscribe
                    </span>
                  </Button>
                </form>

                <p
                  className="text-gray-500 text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  By subscribing, you agree to receive marketing emails from
                  Klock Aviation. You can unsubscribe at any time.
                </p>
              </div>

              {/* Right - Preview Card */}
              <div className="relative">
                <div className="absolute w-[83%] h-[83%] top-0 left-[17%] bg-[#00113A]/5 rounded-xl" />
                <div className="absolute w-[83%] h-[83%] top-[17%] left-0 bg-[#EFBF04]/10 rounded-xl" />
                <Card className="relative w-[80%] mx-auto bg-white rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-1 bg-[#EFBF04] mb-4" />
                    <h4
                      className="text-[#00113A] text-base mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                    >
                      Monthly Aviation Insights
                    </h4>
                    <p
                      className="text-gray-600 text-xs"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Exclusive analysis and trends
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}