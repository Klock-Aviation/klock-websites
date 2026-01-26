"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Start Your Journey with Klock Aviation
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Our aircraft management specialists are ready to assist you with any
            questions and guide you through our services.
          </p>
        </div>

        {/* Contact Cards - 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Call Us Card */}
          <Card className="border-0 rounded-xl overflow-hidden" style={{ backgroundColor: '#00113A' }}>
            <CardContent className="flex flex-col items-center p-8 text-center">
              {/* Gold outlined circle with gold icon */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ border: '2px solid #EFBF04', backgroundColor: 'transparent' }}
              >
                <Phone className="w-6 h-6" style={{ color: '#EFBF04' }} />
              </div>

              <h3 
                className="text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 700 }}
              >
                Call Us
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
              >
                Our specialists are ready to assist
              </p>

              <div className="space-y-3 w-full">
                <div>
                  <p 
                    className="text-base"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 600 }}
                  >
                    +254 725 332 222
                  </p>
                  <p 
                    className="text-xs"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                  >
                    Kenya Office
                  </p>
                </div>
                <div>
                  <p 
                    className="text-base"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 600 }}
                  >
                    +254 725 332 222
                  </p>
                  <p 
                    className="text-xs"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                  >
                    International
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Us Card */}
          <Card className="border-0 rounded-xl overflow-hidden" style={{ backgroundColor: '#00113A' }}>
            <CardContent className="flex flex-col items-center p-8 text-center">
              {/* Gold outlined circle with gold icon */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ border: '2px solid #EFBF04', backgroundColor: 'transparent' }}
              >
                <Mail className="w-6 h-6" style={{ color: '#EFBF04' }} />
              </div>

              <h3 
                className="text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 700 }}
              >
                Email Us
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
              >
                Send us your inquiry anytime
              </p>

              <div className="space-y-3 w-full">
                <div>
                  <p 
                    className="text-base"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 600 }}
                  >
                    fly@klockaviation.com
                  </p>
                  <p 
                    className="text-xs"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                  >
                    For Management Inquiries
                  </p>
                </div>
                <div>
                  <p 
                    className="text-base"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 600 }}
                  >
                    info@klockaviation.com
                  </p>
                  <p 
                    className="text-xs"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                  >
                    For Existing Clients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat With Us Card */}
          <Card className="border-0 rounded-xl overflow-hidden" style={{ backgroundColor: '#00113A' }}>
            <CardContent className="flex flex-col items-center p-8 text-center">
              {/* Gold outlined circle with gold icon */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ border: '2px solid #EFBF04', backgroundColor: 'transparent' }}
              >
                <MessageSquare className="w-6 h-6" style={{ color: '#EFBF04' }} />
              </div>

              <h3 
                className="text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 700 }}
              >
                Chat With Us
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.7)' }}
              >
                Direct messaging for quick responses
              </p>

              <div className="space-y-3 w-full mt-auto">
                <Button 
                  className="w-full font-semibold hover:opacity-90"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}
                >
                  WhatsApp
                </Button>
                <Button
                  className="w-full font-semibold hover:bg-gray-100"
                  style={{ backgroundColor: '#FFFFFF', color: '#00113A', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule a Consultation */}
        <Card className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left - Blue Info Panel */}
              <div className="lg:w-2/5 p-8 lg:p-10" style={{ backgroundColor: '#00113A' }}>
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
                >
                  Schedule a Consultation
                </h3>
                <p 
                  className="text-sm mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
                >
                  Book a personalized consultation with our aircraft management
                  experts to discuss your specific needs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EFBF04' }}
                    >
                      <span 
                        className="text-xs"
                        style={{ color: '#00113A', fontWeight: 700 }}
                      >
                        1
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                    >
                      Custom assessment of your aircraft&apos;s potential
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EFBF04' }}
                    >
                      <span 
                        className="text-xs"
                        style={{ color: '#00113A', fontWeight: 700 }}
                      >
                        2
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                    >
                      Detailed management options tailored to your goals
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EFBF04' }}
                    >
                      <span 
                        className="text-xs"
                        style={{ color: '#00113A', fontWeight: 700 }}
                      >
                        3
                      </span>
                    </div>
                    <p 
                      className="text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                    >
                      Personalized financial projection and ROI analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/20">
                  <Phone className="w-5 h-5" style={{ color: '#EFBF04' }} />
                  <span 
                    className="text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF' }}
                  >
                    Call now: +254 725 332 222
                  </span>
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:w-3/5 p-8 lg:p-10 bg-white">
                <form className="space-y-4">
                  <div>
                    <Label 
                      className="mb-2 block text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Full Name
                    </Label>
                    <Input
                      placeholder="John Doe"
                      className="border-[#E5E7EB] focus:border-[#003087]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <div>
                    <Label 
                      className="mb-2 block text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-[#E5E7EB] focus:border-[#003087]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <div>
                    <Label 
                      className="mb-2 block text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      className="border-[#E5E7EB] focus:border-[#003087]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <div>
                    <Label 
                      className="mb-2 block text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Preferred Date
                    </Label>
                    <Input
                      type="date"
                      className="border-[#E5E7EB] focus:border-[#003087]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <div>
                    <Label 
                      className="mb-2 block text-sm"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#00113A', fontWeight: 600 }}
                    >
                      Message (Optional)
                    </Label>
                    <Textarea
                      placeholder="Tell us about your aircraft and management needs"
                      className="border-[#E5E7EB] focus:border-[#003087] min-h-[80px]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  <Button 
                    className="w-full py-3 h-auto hover:opacity-90"
                    style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                  >
                    Schedule Consultation
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}