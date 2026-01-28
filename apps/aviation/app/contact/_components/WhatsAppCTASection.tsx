"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppCTASection() {
  return (
    <section className="w-full py-10 px-4" style={{ backgroundColor: "#16A34A" }}>
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2
          className="text-white text-2xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Need Immediate Assistance?
        </h2>

        <p
          className="text-white text-base mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Connect with our team instantly via WhatsApp for immediate responses to your aviation inquiries.
        </p>

        <Button
          className="h-auto px-6 py-3 bg-white hover:bg-gray-100 text-[#16A34A] rounded-full font-bold"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  );
}