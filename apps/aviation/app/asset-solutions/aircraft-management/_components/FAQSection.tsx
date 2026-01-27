"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "How does Klock Aviation ensure cost transparency?",
    answer:
      "We provide detailed monthly reports breaking down all operational costs, maintenance expenses, and any additional charges. Our client portal gives you 24/7 access to real-time financial data, ensuring complete visibility into your aircraft's operational costs.",
  },
  {
    question: "What is the revenue potential for leasing my aircraft?",
    answer:
      "Revenue potential varies based on aircraft type, condition, and market demand. Our team conducts a thorough assessment to provide you with realistic revenue projections. Many owners offset 30-70% of their operating costs through our charter program.",
  },
  {
    question: "How does Klock Aviation ensure aircraft compliance without an AOC?",
    answer:
      "We partner with certified Air Operator Certificate (AOC) holders across Africa and beyond. This allows us to operate your aircraft under established safety frameworks while handling all regulatory requirements on your behalf.",
  },
  {
    question: "What services does Klock Aviation offer as part of aircraft management?",
    answer:
      "Our comprehensive services include maintenance management, crew staffing and training, regulatory compliance, charter revenue optimization, insurance coordination, hangar arrangements, and 24/7 operational support.",
  },
  {
    question: "How does Klock Aviation ensure the safety and reliability of my aircraft?",
    answer:
      "Safety is our top priority. We maintain strict adherence to international standards including IS-BAO Stage II certification. Our maintenance programs follow manufacturer recommendations and regulatory requirements, with regular audits and inspections.",
  },
  {
    question: "Can Klock Aviation help with leasing or financing options?",
    answer:
      "Yes, we offer comprehensive leasing services and can connect you with trusted financing partners. Our team can guide you through lease structuring, valuation, and market positioning to maximize your aircraft's value.",
  },
  {
    question: "How is communication handled between Klock Aviation and aircraft owners?",
    answer:
      "Each client is assigned a dedicated account manager available 24/7. Communication channels include our secure client portal, direct phone lines, email, and WhatsApp. We provide regular updates on operations, maintenance, and financial performance.",
  },
  {
    question: "What if I need a customized service?",
    answer:
      "We understand that every aircraft owner has unique needs. Our team works closely with you to create tailored management solutions that align with your specific requirements, whether that's enhanced security protocols, specific crew preferences, or custom reporting.",
  },
  {
    question: "How does Klock Aviation optimize the revenue potential of my aircraft?",
    answer:
      "We leverage our extensive network of charter clients, corporate accounts, and travel agencies to maximize bookings. Our dynamic pricing strategy, combined with strategic positioning in high-demand markets, ensures optimal utilization and revenue generation.",
  },
  {
    question: "What are the costs associated with aircraft management services?",
    answer:
      "Management fees are structured based on your selected service level and aircraft type. Basic management starts from $5,000/month, while premium full-service packages include additional benefits. We provide detailed quotes during our consultation process.",
  },
];

export function FAQSection() {
  return (
    <>
      {/* FAQ Section */}
      <section className="w-full bg-white py-20">
        <div className="flex flex-col max-w-7xl w-full items-center gap-6 px-4 mx-auto">
          {/* Section Header */}
          <h2 
            className="text-4xl md:text-[52px] text-center leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
          >
            Frequently <span className="underline decoration-[#EFBF04] decoration-3 underline-offset-4">Asked</span> Questions
          </h2>
          
          <p 
            className="text-lg text-center max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Find answers to common questions about our aircraft management services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion - Gray background */}
      <section className="w-full bg-[#F8F9FA] py-12">
        <div className="flex flex-col max-w-4xl w-full items-center gap-12 px-4 mx-auto">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col items-start gap-3 w-full"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="flex flex-col items-start w-full rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm"
              >
                <AccordionTrigger className="flex items-center justify-between px-6 py-4 w-full hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span 
                    className="text-base md:text-lg text-left pr-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#003087', fontWeight: 500 }}
                  >
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p 
                    className="text-base leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
                  >
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Help CTA */}
          <div className="flex flex-col items-center gap-6 w-full">
            <p 
              className="text-lg text-center leading-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
            >
              Can&apos;t find the answer you&apos;re looking for? Contact our aircraft
              management experts for assistance.
            </p>

            <Button 
              className="px-6 py-2.5 h-auto rounded-md transition-colors hover:opacity-90"
              style={{ backgroundColor: '#EFBF04', color: '#003087', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="w-full py-12" style={{ backgroundColor: '#00113A' }}>
        <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-4">
          <h3 
            className="text-2xl md:text-3xl text-center"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 600 }}
          >
            Trusted by <span style={{ color: '#EFBF04' }}>Industry Leaders</span>
          </h3>

          {/* Logo placeholders */}
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div 
                key={num}
                className="text-xl md:text-2xl"
                style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}
              >
                Logo {num}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}