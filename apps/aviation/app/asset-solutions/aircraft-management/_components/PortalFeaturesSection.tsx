"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Bell, CheckCircle2 } from "lucide-react";

const featuresList1 = [
  "Live flight tracking and status updates",
  "Financial performance metrics and reporting",
  "Maintenance schedules and compliance tracking",
];

const featuresList2 = [
  "Personalized catering and in-flight experiences",
  "Ground transportation arrangements",
  "Luxury accommodations and activity bookings",
];

const featuresList3 = [
  "Preferential fuel rates at global FBOs",
  "Discounted insurance premiums through fleet policies",
  "Priority maintenance slots at service centers",
];

const portalFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    title: "Real-time Financial Reports",
    description: "Access up-to-date financial statements, revenue tracking, and expense reports",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Maintenance Scheduler",
    description: "View upcoming maintenance events, compliance status, and service history",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Charter Management",
    description: "Review charter bookings, availability calendar, and revenue forecasts",
  },
];

export function PortalFeaturesSection() {
  const [activeTab, setActiveTab] = useState("tracking");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Here you would send to your backend
    console.log("Waitlist signup:", email);
    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20" style={{ backgroundColor: '#E1F0FF' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            More Than Just Management
          </h2>
          
          {/* Gold underline */}
          <div className="w-[120px] h-[3px] mx-auto mb-6" style={{ backgroundColor: '#EFBF04' }} />
          
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Experience the Klock Aviation difference with our value-added services and features.
          </p>
        </div>

        {/* Main Content - Dashboard Preview + Features */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 mb-16">
          {/* Left - Dashboard Preview with Tabs */}
          <div className="w-full lg:w-[660px]">
            <Card className="overflow-hidden border-0 shadow-xl">
              {/* Tabs Header */}
              <div className="p-4" style={{ backgroundColor: '#00113A' }}>
                <div className="flex rounded-md overflow-hidden" style={{ backgroundColor: 'rgba(10, 36, 99, 0.5)' }}>
                  {[
                    { id: "dashboard", label: "Dashboard" },
                    { id: "reports", label: "Reports" },
                    { id: "tracking", label: "Tracking" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? "text-[#00113A]"
                          : "text-white hover:bg-white/10"
                      }`}
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        backgroundColor: activeTab === tab.id ? '#EFBF04' : 'transparent'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Dashboard Preview - Coming Soon with Waitlist */}
              <CardContent className="p-0">
                <div className="bg-[#F8F9FA] aspect-[4/3] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  {/* Animated background dots */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-[#EFBF04] animate-pulse" />
                    <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#003087] animate-pulse delay-300" />
                    <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-[#EFBF04] animate-pulse delay-500" />
                    <div className="absolute bottom-10 right-1/3 w-2 h-2 rounded-full bg-[#003087] animate-pulse delay-700" />
                  </div>

                  {/* Placeholder circles - matching Figma */}
                  <div className="relative w-48 h-48 mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-[#E5E7EB] animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 rounded-full border-2 border-[#E5E7EB] animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-8 rounded-full border-2 border-[#E5E7EB] animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EFBF04] to-[#D4A04A] flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {!submitted ? (
                    <>
                      {/* Coming Soon Badge */}
                      <div 
                        className="flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{ backgroundColor: 'rgba(239, 191, 4, 0.15)', border: '1px solid rgba(239, 191, 4, 0.3)' }}
                      >
                        <Sparkles className="w-4 h-4" style={{ color: '#EFBF04' }} />
                        <span 
                          className="text-sm font-semibold"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#EFBF04' }}
                        >
                          Coming Soon
                        </span>
                      </div>

                      <p 
                        className="text-xl mb-2"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                      >
                        Owner Dashboard
                      </p>
                      <p 
                        className="text-sm mb-6 text-center max-w-sm"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        Be the first to access our comprehensive aircraft management portal. Get notified when we launch!
                      </p>
                      
                      {/* Waitlist Form */}
                      <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                        <div className="relative flex-1">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 border-[#E5E7EB] pl-10"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          />
                          <Bell className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        </div>
                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="hover:opacity-90 whitespace-nowrap min-w-[130px]"
                          style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Joining...
                            </span>
                          ) : (
                            "Join Waitlist"
                          )}
                        </Button>
                      </form>

                      <p 
                        className="text-xs mt-4"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#9CA3AF' }}
                      >
                        🔒 No spam. Unsubscribe anytime.
                      </p>
                    </>
                  ) : (
                    <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div 
                        className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: '#EFBF04' }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <p 
                        className="text-2xl mb-2"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                      >
                        You&apos;re on the list!
                      </p>
                      <p 
                        className="text-sm mb-4"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        We&apos;ll notify you when the Owner Portal launches.
                      </p>
                      <div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ backgroundColor: 'rgba(0, 48, 135, 0.1)' }}
                      >
                        <span 
                          className="text-sm"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087' }}
                        >
                          ✨ Early access confirmed for <strong>{email}</strong>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Features List */}
          <div className="w-full lg:w-[660px] space-y-8">
            {/* Feature 1: Real-Time Owner Dashboard */}
            <div className="flex gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#FDF6E3' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              
              <div>
                <h3 
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                >
                  Real-Time Owner Dashboard
                </h3>
                <p 
                  className="text-base mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Access comprehensive insights into your aircraft&apos;s performance, financials, and operational status through our intuitive owner portal.
                </p>
                <ul className="space-y-1">
                  {featuresList1.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span style={{ color: '#EFBF04' }}>•</span>
                      <span 
                        className="text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#020817' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Premium Concierge Services */}
            <div className="flex gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#FDF6E3' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              
              <div>
                <h3 
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                >
                  Premium Concierge Services
                </h3>
                <p 
                  className="text-base mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Enhance your travel experience with our exclusive concierge services tailored to your preferences.
                </p>
                <ul className="space-y-1">
                  {featuresList2.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span style={{ color: '#EFBF04' }}>•</span>
                      <span 
                        className="text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#020817' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Exclusive Industry Benefits */}
            <div className="flex gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#FDF6E3' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EFBF04" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              
              <div>
                <h3 
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                >
                  Exclusive Industry Benefits
                </h3>
                <p 
                  className="text-base mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Take advantage of Klock Aviation&apos;s industry relationships for exceptional cost savings and perks.
                </p>
                <ul className="space-y-1">
                  {featuresList3.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span style={{ color: '#EFBF04' }}>•</span>
                      <span 
                        className="text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#020817' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button 
              className="hover:opacity-90"
              style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Explore Premium Features
            </Button>
          </div>
        </div>

        {/* Client Portal Access Section */}
        <Card className="border-0 shadow-lg overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left - Portal Info */}
              <div className="lg:w-1/2 p-8">
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                >
                  Client Portal Access
                </h3>
                <p 
                  className="text-base mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                >
                  Our secure client portal gives you 24/7 access to all aspects of your aircraft&apos;s operations, performance, and financial data.
                </p>

                <div className="space-y-4">
                  {portalFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: '#FDF6E3' }}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h4 
                          className="text-sm mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600 }}
                        >
                          {feature.title}
                        </h4>
                        <p 
                          className="text-sm"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  className="mt-6 hover:opacity-90"
                  style={{ backgroundColor: '#00113A', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  Request Portal Demo
                </Button>
              </div>

              {/* Right - Portal Preview Placeholder */}
              <div className="lg:w-1/2 bg-[#F0F4F8] flex items-center justify-center p-8 min-h-[300px] relative overflow-hidden">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-50" style={{ 
                  backgroundImage: 'radial-gradient(circle, #D1D5DB 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                
                {/* Concentric circles placeholder */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-2 border-[#D1D5DB]" />
                  <div className="absolute inset-6 rounded-full border-2 border-[#D1D5DB]" />
                  <div className="absolute inset-12 rounded-full border-2 border-[#D1D5DB]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded bg-[#E5E7EB] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#9CA3AF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
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