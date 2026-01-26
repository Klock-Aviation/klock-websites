"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, PiggyBank, Clock } from "lucide-react";

export function ValueAddedSection() {
  const [activeTab, setActiveTab] = useState<"revenue" | "cost">("cost");
  const [aircraftType, setAircraftType] = useState("Light Jet");
  const [hoursPerMonth, setHoursPerMonth] = useState(50);

  // Calculate projections based on inputs
  const calculateProjections = () => {
    const baseRate = aircraftType === "Light Jet" ? 2800 : 
                     aircraftType === "Mid-Size Jet" ? 4500 : 
                     aircraftType === "Heavy Jet" ? 7500 : 2000;
    
    const revenuePotential = hoursPerMonth * baseRate;
    const operationalCosts = revenuePotential * 0.75;
    const costSavings = operationalCosts * 0.22;
    const netResult = revenuePotential - operationalCosts + costSavings;

    return {
      revenuePotential,
      operationalCosts,
      costSavings,
      netResult,
      annualRevenue: revenuePotential * 12,
      annualCosts: operationalCosts * 12,
      annualSavings: costSavings * 12,
      annualProfit: netResult * 12,
    };
  };

  const projections = calculateProjections();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            See How Much <span className="underline decoration-[#EFBF04] decoration-3 underline-offset-4">You Could</span> Save or Earn
          </h2>
          <p 
            className="text-lg max-w-4xl mx-auto whitespace-nowrap"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Discover the financial benefits of Klock Aviation&apos;s aircraft management services with our interactive calculator.
          </p>
        </div>

        {/* Calculator Card */}
        <Card className="border border-[#E5E7EB] shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Tabs Header - Navy background */}
            <div className="flex justify-center py-4 px-6" style={{ backgroundColor: '#00113A' }}>
              <div className="inline-flex rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab("revenue")}
                  className={`px-8 py-3 text-lg transition-colors ${
                    activeTab === "revenue"
                      ? "text-[#00113A]"
                      : "text-white"
                  }`}
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    backgroundColor: activeTab === "revenue" ? '#EFBF04' : 'transparent',
                    borderRadius: activeTab === "revenue" ? '8px' : '0',
                  }}
                >
                  Revenue Potential
                </button>
                <button
                  onClick={() => setActiveTab("cost")}
                  className={`px-8 py-3 text-lg transition-colors ${
                    activeTab === "cost"
                      ? "text-[#00113A]"
                      : "text-white"
                  }`}
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 600,
                    backgroundColor: activeTab === "cost" ? '#EFBF04' : 'transparent',
                    borderRadius: activeTab === "cost" ? '8px' : '0',
                  }}
                >
                  Cost Calculator
                </button>
              </div>
            </div>

            {/* Calculator Content */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left - Input Controls */}
                <div className="lg:w-1/3">
                  {/* Aircraft Type */}
                  <div className="mb-6">
                    <label 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151', fontWeight: 500 }}
                    >
                      Aircraft Type
                    </label>
                    <select
                      value={aircraftType}
                      onChange={(e) => setAircraftType(e.target.value)}
                      className="w-full p-3 border border-[#E5E7EB] rounded-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151' }}
                    >
                      <option>Light Jet</option>
                      <option>Mid-Size Jet</option>
                      <option>Heavy Jet</option>
                      <option>Turboprop</option>
                    </select>
                  </div>

                  {/* Hours Slider */}
                  <div className="mb-8">
                    <label 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#374151', fontWeight: 500 }}
                    >
                      Available Hours Per Month: <span style={{ fontWeight: 700 }}>{hoursPerMonth}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={hoursPerMonth}
                      onChange={(e) => setHoursPerMonth(parseInt(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ 
                        background: `linear-gradient(to right, #003087 0%, #003087 ${(hoursPerMonth - 10) / 90 * 100}%, #E5E7EB ${(hoursPerMonth - 10) / 90 * 100}%, #E5E7EB 100%)` 
                      }}
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>10h</span>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>55h</span>
                      <span className="text-xs" style={{ color: '#9CA3AF' }}>100h</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full py-3 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                  >
                    Get Detailed Analysis
                  </Button>
                </div>

                {/* Right - Financial Projection */}
                <div className="lg:w-2/3">
                  <div className="border border-[#E5E7EB] rounded-xl p-6">
                    <h3 
                      className="text-xl text-center mb-6"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                    >
                      Financial Projection
                    </h3>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {/* Revenue Potential */}
                      <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#FDF6E3] flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" style={{ color: '#EFBF04' }} />
                          </div>
                          <span 
                            className="text-xs"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280' }}
                          >
                            Revenue Potential
                          </span>
                        </div>
                        <p 
                          className="text-xl"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                        >
                          {formatCurrency(projections.revenuePotential)}
                        </p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>per month</p>
                      </div>

                      {/* Operational Costs */}
                      <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                            <TrendingDown className="w-4 h-4" style={{ color: '#EF4444' }} />
                          </div>
                          <span 
                            className="text-xs"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280' }}
                          >
                            Operational Costs
                          </span>
                        </div>
                        <p 
                          className="text-xl"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#EF4444', fontWeight: 700 }}
                        >
                          {formatCurrency(projections.operationalCosts)}
                        </p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>per month</p>
                      </div>

                      {/* Cost Savings */}
                      <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#FDF6E3] flex items-center justify-center">
                            <PiggyBank className="w-4 h-4" style={{ color: '#EFBF04' }} />
                          </div>
                          <span 
                            className="text-xs"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280' }}
                          >
                            Cost Savings
                          </span>
                        </div>
                        <p 
                          className="text-xl"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                        >
                          {formatCurrency(projections.costSavings)}
                        </p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>through optimization</p>
                      </div>

                      {/* Net Result */}
                      <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#FDF6E3] flex items-center justify-center">
                            <Clock className="w-4 h-4" style={{ color: '#EFBF04' }} />
                          </div>
                          <span 
                            className="text-xs"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280' }}
                          >
                            Net Result
                          </span>
                        </div>
                        <p 
                          className="text-xl"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                        >
                          {formatCurrency(projections.netResult)}
                        </p>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>estimated monthly profit</p>
                      </div>
                    </div>

                    {/* Annual Projection Summary */}
                    <div className="border border-[#E5E7EB] rounded-lg p-4">
                      <h4 
                        className="text-base mb-3"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                      >
                        Annual Projection Summary
                      </h4>
                      <p 
                        className="text-sm mb-4"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280' }}
                      >
                        Based on your selections, managing your {aircraftType} with Klock Aviation could generate:
                      </p>

                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-[#F3F4F6]">
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280', fontSize: '14px' }}>
                            Annual Revenue Potential:
                          </span>
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600, fontSize: '14px' }}>
                            {formatCurrency(projections.annualRevenue)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-[#F3F4F6]">
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280', fontSize: '14px' }}>
                            Annual Operational Costs:
                          </span>
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600, fontSize: '14px' }}>
                            {formatCurrency(projections.annualCosts)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-[#F3F4F6]">
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#6B7280', fontSize: '14px' }}>
                            Annual Cost Savings:
                          </span>
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600, fontSize: '14px' }}>
                            {formatCurrency(projections.annualSavings)}
                          </span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700, fontSize: '14px' }}>
                            Annual Net Profit:
                          </span>
                          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700, fontSize: '14px' }}>
                            {formatCurrency(projections.annualProfit)}
                          </span>
                        </div>
                      </div>

                      <p 
                        className="text-xs mt-4 italic"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#9CA3AF' }}
                      >
                        Note: These figures are estimates and may vary based on actual market conditions, aircraft availability, and other factors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Want a Personalized Financial Analysis?
          </h3>
          <p 
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Our aviation finance experts can provide a detailed analysis specific to your aircraft and operational needs.
          </p>
          <Button 
            className="px-8 py-3 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            Request Detailed Financial Analysis
          </Button>
        </div>
      </div>
    </section>
  );
}