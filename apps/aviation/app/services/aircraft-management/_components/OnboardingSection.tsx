"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Phone, FileText, ClipboardList, FileCheck, Plane } from "lucide-react";

const onboardingSteps = [
  {
    icon: Phone,
    title: "Initial Contact",
    description: "Submit your aircraft information for initial evaluation",
  },
  {
    icon: ClipboardList,
    title: "Aircraft Assessment",
    description: "Comprehensive evaluation of your aircraft and needs",
  },
  {
    icon: FileText,
    title: "Custom Plan Creation",
    description: "Tailored management proposal for your aircraft",
  },
  {
    icon: FileCheck,
    title: "Contract Signing",
    description: "Finalize agreement and complete paperwork",
  },
  {
    icon: Plane,
    title: "Start of Services",
    description: "Begin enjoying comprehensive aircraft management",
  },
];

const requiredInfo = [
  "Aircraft type and model",
  "Year of Manufacture (YOM)",
  "Registration number",
  "Home base location",
  "Availability for charter (if interested)",
];

const aircraftConditions = ["New", "Excellent", "Good", "Requires Maintenance"];

const desiredServices = [
  "Charter Management",
  "Leasing",
  "Maintenance",
  "Staffing",
  "Full Service Management",
];

const availabilityOptions = [
  "Available Year Round",
  "Seasonal Availability",
  "Limited Availability",
];

export function OnboardingSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="flex w-full items-center justify-center px-4 py-16 bg-[#F8F9FA]">
      <div className="flex flex-col w-full max-w-[1200px] items-center gap-16">
        {/* Header */}
        <div className="flex flex-col w-full items-center gap-4">
          <h2 
            className="text-4xl md:text-5xl text-center leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Streamlined Onboarding Process
          </h2>

          {/* Gold underline */}
          <div className="w-[120px] h-[3px]" style={{ backgroundColor: '#EFBF04' }} />

          <p 
            className="text-lg text-center leading-relaxed max-w-3xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Joining the Klock Aviation management program is simple and
            hassle-free. Follow our easy 5-step process.
          </p>
        </div>

        {/* Steps Timeline - Icons light up based on active step */}
        <div className="flex flex-col items-center w-full">
          {/* Horizontal line behind steps */}
          <div className="relative w-full">
            <div className="absolute top-8 left-[12%] right-[12%] h-1 bg-[#E5E7EB] hidden lg:block" />
            {/* Progress line */}
            <div 
              className="absolute top-8 left-[12%] h-1 hidden lg:block transition-all duration-500"
              style={{ 
                backgroundColor: '#EFBF04',
                width: `${((activeStep - 1) / 4) * 76}%`
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
            {onboardingSteps.map((step, index) => {
              const IconComponent = step.icon;
              const stepNumber = index + 1;
              const isActive = stepNumber === activeStep;
              const isCompleted = stepNumber < activeStep;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(stepNumber)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Circle icon - lights up when active or completed */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive || isCompleted ? '#EFBF04' : '#FDF6E3',
                      border: isActive ? '3px solid #003087' : isCompleted ? 'none' : '2px solid #EFBF04',
                      transform: isActive ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <IconComponent 
                      className="w-7 h-7 transition-colors duration-300" 
                      style={{ color: isActive || isCompleted ? '#FFFFFF' : '#EFBF04' }}
                    />
                  </div>

                  <h3 
                    className="text-base mb-2 transition-colors duration-300"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: isActive ? '#EFBF04' : '#003087', 
                      fontWeight: 600 
                    }}
                  >
                    {step.title}
                  </h3>

                  <p 
                    className="text-sm leading-5 mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    {step.description}
                  </p>

                  {/* Step badge */}
                  <div 
                    className="px-4 py-1 rounded transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? '#EFBF04' : '#00113A',
                    }}
                  >
                    <span 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif', 
                        color: isActive ? '#00113A' : '#FFFFFF' 
                      }}
                    >
                      Step {stepNumber}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Onboarding Process Tabs */}
        <div className="flex flex-col w-full items-center">
          {/* Navy header bar with tabs */}
          <div className="w-full rounded-t-lg overflow-hidden" style={{ backgroundColor: '#00113A' }}>
            <h3 
              className="text-xl text-center py-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
            >
              Detailed Onboarding Process
            </h3>

            <div className="flex">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveStep(num)}
                  className="flex-1 py-3 border-b-4 transition-all duration-300"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontWeight: 600,
                    borderColor: activeStep === num ? '#EFBF04' : 'transparent',
                    color: '#FFFFFF'
                  }}
                >
                  Step {num}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content - Step 1 */}
          {activeStep === 1 && (
            <div className="w-full bg-white rounded-b-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Info */}
                <div className="lg:w-2/5">
                  <h3 
                    className="text-xl mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                  >
                    Submit Your Aircraft Information
                  </h3>

                  <p 
                    className="text-sm mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    The first step is to provide essential details about your
                    aircraft for our initial evaluation.
                  </p>

                  {/* Required Information */}
                  <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4">
                    <h4 
                      className="text-sm mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600 }}
                    >
                      Required Information
                    </h4>

                    <ul className="space-y-2">
                      {requiredInfo.map((info, index) => (
                        <li key={index} className="flex items-start">
                          <span style={{ color: '#EFBF04' }} className="mr-2">•</span>
                          <span 
                            className="text-sm"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                          >
                            {info}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeframe */}
                  <div className="bg-[#F8F9FA] rounded-lg p-4">
                    <h4 
                      className="text-sm mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 600 }}
                    >
                      Timeframe
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                    >
                      Estimated completion time: 10-15 minutes
                    </p>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="lg:w-3/5">
                  <h4 
                    className="text-lg mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 700 }}
                  >
                    Aircraft Information Form
                  </h4>

                  <form className="space-y-5">
                    {/* Aircraft Type/Model */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Aircraft Type/Model
                      </Label>
                      <Input
                        placeholder="e.g., Bombardier Global 6000"
                        className="border-[#E5E7EB]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    {/* Condition of the Aircraft */}
                    <div>
                      <Label 
                        className="text-sm mb-3 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Condition of the Aircraft
                      </Label>
                      <RadioGroup className="space-y-2">
                        {aircraftConditions.map((condition, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 rounded-lg border border-[#E5E7EB]"
                          >
                            <RadioGroupItem
                              value={condition.toLowerCase().replace(/\s+/g, "-")}
                              id={`condition-${index}`}
                            />
                            <Label
                              htmlFor={`condition-${index}`}
                              className="ml-3 text-sm cursor-pointer"
                              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                            >
                              {condition}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Registration Number */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Registration Number
                      </Label>
                      <Input
                        placeholder="e.g., N12345"
                        className="border-[#E5E7EB]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    {/* Desired Services */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Desired Services
                      </Label>
                      <p 
                        className="text-xs mb-3"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        Please select all that apply
                      </p>
                      <div className="space-y-2">
                        {desiredServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 rounded-lg border border-[#E5E7EB]"
                          >
                            <input
                              type="checkbox"
                              id={`service-${index}`}
                              className="w-4 h-4 rounded border-[#4B5563]"
                            />
                            <Label
                              htmlFor={`service-${index}`}
                              className="ml-3 text-sm cursor-pointer"
                              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Availability
                      </Label>
                      <p 
                        className="text-xs mb-3"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        Select One
                      </p>
                      <RadioGroup className="space-y-2">
                        {availabilityOptions.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 rounded-lg border border-[#E5E7EB]"
                          >
                            <RadioGroupItem
                              value={option.toLowerCase().replace(/\s+/g, "-")}
                              id={`availability-${index}`}
                            />
                            <Label
                              htmlFor={`availability-${index}`}
                              className="ml-3 text-sm cursor-pointer"
                              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Additional Notes (Optional)
                      </Label>
                      <p 
                        className="text-xs mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                      >
                        Please provide any specific requests, requirements, or further information
                      </p>
                      <Textarea
                        placeholder="Write Here...."
                        className="border-[#E5E7EB] min-h-[100px]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Maintenance History / Logbook (Optional)
                      </Label>
                      <div className="flex flex-col items-center p-6 rounded-lg border-2 border-dashed border-[#9CA3AF]">
                        <div className="w-12 h-12 rounded-full bg-[#FDF6E3] flex items-center justify-center mb-3">
                          <FileText className="w-6 h-6" style={{ color: '#EFBF04' }} />
                        </div>
                        <p 
                          className="text-sm mb-3"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                        >
                          Upload File Here
                        </p>
                        <Button 
                          type="button"
                          className="text-sm px-6 hover:opacity-90"
                          style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          Browse
                        </Button>
                      </div>
                    </div>

                    {/* Home Base Location */}
                    <div>
                      <Label 
                        className="text-sm mb-2 block"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563', fontWeight: 600 }}
                      >
                        Home Base Location
                      </Label>
                      <Input
                        placeholder="e.g., Lagos, Nigeria"
                        className="border-[#E5E7EB]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      className="w-full py-3 h-auto hover:opacity-90"
                      style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                      Submit Information
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder content for other steps */}
          {[2, 3, 4, 5].map((num) => (
            activeStep === num && (
              <div key={num} className="w-full bg-white rounded-b-lg p-8">
                <div className="text-center py-12">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: '#FDF6E3' }}
                  >
                    {num === 2 && <ClipboardList className="w-10 h-10" style={{ color: '#EFBF04' }} />}
                    {num === 3 && <FileText className="w-10 h-10" style={{ color: '#EFBF04' }} />}
                    {num === 4 && <FileCheck className="w-10 h-10" style={{ color: '#EFBF04' }} />}
                    {num === 5 && <Plane className="w-10 h-10" style={{ color: '#EFBF04' }} />}
                  </div>
                  <h3 
                    className="text-2xl mb-4"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
                  >
                    {onboardingSteps[num - 1]?.title}
                  </h3>
                  <p 
                    className="text-lg mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    {onboardingSteps[num - 1]?.description}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#9CA3AF' }}
                  >
                    Detailed content for Step {num} coming soon...
                  </p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* CTA Card */}
        <Card className="w-full rounded-xl overflow-hidden border-0" style={{ backgroundColor: '#00113A' }}>
          <CardContent className="flex flex-col items-center gap-4 p-8">
            <h3 
              className="text-2xl text-center"
              style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
            >
              Ready to Begin Your Aircraft Management Journey?
            </h3>

            <p 
              className="text-sm text-center max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
            >
              Submit your aircraft information today and discover how Klock
              Aviation can transform your ownership experience.
            </p>

            <Button 
              className="px-8 hover:opacity-90"
              style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Start the Onboarding Process
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}