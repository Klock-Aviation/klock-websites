"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Info, Gift } from "lucide-react";

const pricingPackages = [
  {
    borderColor: "border-[#EFBF04]",
    gradientBg: "bg-linear-to-r from-[#00113A] to-[#060F2E]",
    title: "New Client Special",
    subtitle: "Perfect for first-time lessees",
    discount: "10% OFF",
    discountColor: "text-[#00113A]",
    description: "First Year Management Fees",
    bulletColor: "text-[#EFBF04]",
    features: [
      "Applicable to any aircraft type in our fleet",
      "Complimentary lease structure consultation",
      "24/7 priority support for first 30 days",
      "Flexible duration options available",
    ],
    disclaimer: "Offer valid for new clients only. Expires in 30 days.",
    buttonBg: "bg-[#EFBF04]",
    buttonText: "text-[#00113A]",
    buttonLabel: "Claim This Offer",
  },
  {
    borderColor: "border-green-600",
    gradientBg: "bg-linear-to-r from-green-700 to-green-600",
    title: "Fleet Expansion Bundle",
    subtitle: "Ideal for growing operators",
    discount: "15% OFF",
    discountColor: "text-green-600",
    description: "When Leasing Multiple Aircraft",
    bulletColor: "text-green-600",
    features: [
      "Lease 2+ aircraft and save 15% on each",
      "Consolidated crew training programs",
      "Bulk fuel purchase arrangements",
      "Unified maintenance scheduling",
    ],
    disclaimer: "Must sign agreements within 30 days of initial lease.",
    buttonBg: "bg-green-600",
    buttonText: "text-white",
    buttonLabel: "Explore Fleet Options",
  },
  {
    borderColor: "border-purple-600",
    gradientBg: "bg-linear-to-r from-purple-700 to-purple-500",
    title: "Loyalty Rewards",
    subtitle: "For our valued existing clients",
    discount: "PREMIUM",
    discountColor: "text-purple-600",
    description: "Exclusive Benefits Package",
    bulletColor: "text-purple-600",
    features: [
      "Complimentary cabin upgrade on renewal",
      "Priority access to new aircraft acquisitions",
      "10 hours of free flight time annually",
      "Dedicated account manager",
    ],
    disclaimer: "Available for clients with 12+ months of history.",
    buttonBg: "bg-purple-600",
    buttonText: "text-white",
    buttonLabel: "Activate Rewards",
  },
];

const referralBenefits = [
  { highlight: "5% credit", text: " towards your next lease payment" },
  { highlight: "Complimentary upgrade", text: " on in-flight services" },
  { highlight: "VIP lounge access", text: " at partner airports" },
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Share Your Referral Link",
    description:
      "Send your unique referral link to colleagues and partners in the aviation industry.",
  },
  {
    number: "2",
    title: "They Sign a Lease",
    description:
      "When your referral signs a qualifying lease agreement with Klock Aviation.",
  },
  {
    number: "3",
    title: "Both of You Get Rewarded",
    description:
      "You receive your referral benefits, and they get an additional 5% off their first payment.",
  },
];

export function PackagesSection() {
  const [countdown, setCountdown] = useState({
    days: 29,
    hours: 23,
    minutes: 58,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-16 w-full">
      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="h-auto bg-[#EFBF04]/20 text-[#00113A] hover:bg-[#EFBF04]/20 px-4 py-1 mb-4">
            <span
              className="text-xl"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              LIMITED TIME
            </span>
          </Badge>

          <h2
            className="text-[#003087] text-4xl md:text-[52px] leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Exclusive Leasing Packages
          </h2>

          <p
            className="text-gray-600 text-base max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Take advantage of our special promotional offers designed to help
            you access premium aircraft at exceptional rates. Act fast—these
            deals won&apos;t last long!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 bg-[#00113A] rounded-lg flex items-center justify-center">
                  <span
                    className="text-white text-2xl"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="text-gray-600 text-base capitalize"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-2 ${pkg.borderColor} shadow-lg`}
            >
              <CardHeader className={`relative gap-2 ${pkg.gradientBg} p-6`}>
                <div className="absolute -top-6 right-[16%] w-24 h-24 rounded-full bg-white/10" />
                <h3
                  className="text-white text-xl z-10"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  {pkg.title}
                </h3>
                <p
                  className="text-white/80 text-lg z-10"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {pkg.subtitle}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <h4
                    className={`text-3xl ${pkg.discountColor}`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                  >
                    {pkg.discount}
                  </h4>
                  <p
                    className="text-gray-600 text-base"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`${pkg.bulletColor} text-base pt-1`}>•</span>
                      <span
                        className="text-gray-600 text-base"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2 p-4 bg-gray-50 rounded-lg mb-6">
                  <Info className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {pkg.disclaimer}
                  </p>
                </div>

                <Button
                  className={`h-auto w-full px-4 py-2 ${pkg.buttonBg} hover:opacity-90`}
                >
                  <span
                    className={`${pkg.buttonText} text-base`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {pkg.buttonLabel}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Referral Program */}
        <Card className="bg-[#00113A]/5 rounded-xl overflow-hidden border-0 relative">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#EFBF04]/10 rounded-full" />
          <div className="absolute -left-20 -bottom-16 w-64 h-64 bg-[#00113A]/10 rounded-full" />

          <CardContent className="p-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Referral Benefits */}
              <div className="flex flex-col gap-4">
                <h3
                  className="text-[#00113A] text-2xl"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  Referral Program
                </h3>

                <p
                  className="text-gray-600 text-base leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Know someone who could benefit from our leasing services? Refer
                  them to Klock Aviation and earn exclusive rewards when they sign
                  a lease agreement.
                </p>

                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-5 h-5 text-[#EFBF04]" />
                      <h4
                        className="text-[#00113A] text-base"
                        style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                      >
                        Referral Benefits
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {referralBenefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#EFBF04] text-base pt-1">•</span>
                          <p
                            className="text-sm"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            <span className="font-semibold text-[#00113A]">
                              {benefit.highlight}
                            </span>
                            <span className="text-gray-600">{benefit.text}</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Button className="h-auto w-fit px-4 py-2 bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#00113A]">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    Refer a Friend
                  </span>
                </Button>
              </div>

              {/* Right - How It Works */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h4
                    className="text-[#00113A] text-2xl mb-6"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                  >
                    How It Works
                  </h4>

                  <div className="space-y-6">
                    {howItWorksSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#00113A] rounded-full flex items-center justify-center shrink-0">
                          <span
                            className="text-white text-base"
                            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
                          >
                            {step.number}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5
                            className="text-[#00113A] text-base mb-1"
                            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                          >
                            {step.title}
                          </h5>
                          <p
                            className="text-gray-600 text-sm"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Referral Link */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-2 bg-gray-50 rounded border border-gray-200">
                        <span
                          className="text-gray-700 text-sm"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          https://klock.co/ref/12345
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="h-9 text-[#00113A]"
                      >
                        <span
                          className="text-xs"
                          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                        >
                          Copy
                        </span>
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      className="h-10 text-[#00113A]"
                    >
                      <span
                        className="text-xs"
                        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                      >
                        Get Link
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}