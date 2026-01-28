"use client";

import { Card, CardContent } from "@/components/ui/card";

export function FAQSection() {
  return (
    <section className="w-full py-16 px-4 bg-[#F0F2F5]">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#091D42] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* FAQ 1 */}
          <Card className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <h3
                className="text-[#091D42] text-lg font-semibold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                What types of charter services does Klock Aviation offer?
              </h3>
              <p className="text-gray-600 text-base leading-6">
                Klock Aviation provides air charter flights, aircraft management, leasing, air ambulance, mining logistics, and aviation consulting.
              </p>
            </CardContent>
          </Card>

          {/* FAQ 2 */}
          <Card className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <h3
                className="text-[#091D42] text-lg font-semibold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                How can I book a charter flight with Klock Aviation?
              </h3>
              <p className="text-gray-600 text-base leading-6">
                Booking is simple! Clients can reach out via our website or contact our dedicated customer service team. We will assist you in selecting the right aircraft, planning your itinerary, and customizing your flight experience.
              </p>
            </CardContent>
          </Card>

          {/* FAQ 3 */}
          <Card className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <h3
                className="text-[#091D42] text-lg font-semibold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                What safety measures does Klock Aviation implement?
              </h3>
              <p className="text-gray-600 text-base leading-6">
                We adhere to the highest international aviation safety standards, including ICAO and IATA guidelines, ensuring a safe, compliant journey. We conduct thorough pre-flight inspections.
              </p>
            </CardContent>
          </Card>

          {/* FAQ 4 */}
          <Card className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6">
              <h3
                className="text-[#091D42] text-lg font-semibold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                How is the pricing structured for charter flights?
              </h3>
              <p className="text-gray-600 text-base leading-6">
                Our pricing is transparent and depends on several factors, including aircraft type, flight distance, and any additional services requested. Clients receive a detailed quote with no hidden fees, ensuring they understand the total cost upfront.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href="/faqs"
            className="text-[#091D42] text-base hover:text-[#091D42]/80 transition-colors"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
