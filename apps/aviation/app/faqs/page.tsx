import LegalPageTemplate, {
  ContentGrid,
  ContentCard,
  type LegalSection,
} from "@repo/ui/templates/LegalPageTemplate";

/** FAQ Item component for Q&A display */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-white/10 py-4 last:border-b-0">
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#D7B46A] text-xs font-bold text-[#0D1B2A]">
          Q
        </span>
        <p className="font-medium text-white">{question}</p>
      </div>
      <div className="mt-3 flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/10 text-xs font-bold text-[#D7B46A]">
          A
        </span>
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
}

const sections: LegalSection[] = [
  {
    id: "data-privacy",
    title: "Data Collection and Privacy Questions",
    variant: "highlight",
    content: (
      <div className="space-y-2">
        <FaqItem
          question="What data do you collect from me?"
          answer="We collect personal information such as name, email, phone number, booking details, and device information."
        />
        <FaqItem
          question="Why do you collect my data?"
          answer="To personalize your experience, process bookings, improve our services, and optimize marketing efforts."
        />
        <FaqItem
          question="How do you use my data for marketing?"
          answer="We use your data to send relevant promotions and service offerings based on your preferences and past activity."
        />
        <FaqItem
          question="How long will my data be stored?"
          answer="We retain your data for as long as necessary for our business purposes or as required by law."
        />
        <FaqItem
          question="Can I opt-out of receiving marketing communications?"
          answer="Yes, you can opt-out anytime via your account settings or by contacting us directly."
        />
        <FaqItem
          question="Is my data secure?"
          answer="Yes, we use encryption and secure servers to protect your personal information."
        />
        <FaqItem
          question="How can I update or delete my data?"
          answer="You can request updates or deletion of your data by contacting us through our customer service."
        />
        <FaqItem
          question="Do you share my data with third parties?"
          answer="We do not share your personal data with third parties unless necessary for fulfilling services (e.g., payment processing)."
        />
        <FaqItem
          question="Can I access my data?"
          answer="Yes, you have the right to request a copy of the data we hold about you."
        />
      </div>
    ),
  },
  {
    id: "aviation-services",
    title: "General Aviation Services FAQs",
    content: (
      <ContentGrid columns={2}>
        <ContentCard title="How do I book a charter flight?">
          You can book through our website, mobile app, or by contacting our
          customer service team directly. We&apos;ll work with you to customize
          your flight according to your needs.
        </ContentCard>
        <ContentCard title="What aircraft types are available?">
          We offer a diverse fleet including light jets, mid-size jets, heavy
          jets, and turboprops to meet various travel requirements and passenger
          capacities.
        </ContentCard>
        <ContentCard title="How far in advance should I book?">
          While we can accommodate last-minute requests, we recommend booking at
          least 24-48 hours in advance for the best aircraft availability and
          pricing.
        </ContentCard>
        <ContentCard title="What safety measures do you implement?">
          We maintain the highest safety standards with regular aircraft
          maintenance, certified pilots, comprehensive safety training, and
          compliance with all aviation regulations.
        </ContentCard>
        <ContentCard title="Can flights be cancelled or rescheduled?">
          Yes, flights can be cancelled or rescheduled subject to our terms and
          conditions. Specific policies vary depending on timing and aircraft
          type.
        </ContentCard>
        <ContentCard title="Do you offer international flights?">
          Yes, we provide international charter services across Africa and to
          global destinations, handling all necessary permits and customs
          procedures.
        </ContentCard>
      </ContentGrid>
    ),
  },
  {
    id: "sustainability",
    title: "Sustainability and Environmental FAQs",
    variant: "dark",
    content: (
      <div className="space-y-6">
        <ContentCard title="How does Klock Aviation offset carbon emissions?" variant="dark">
          We partner with verified organizations like Gold Standard and Verra to
          invest in African reforestation, clean energy, and conservation
          projects that offset our operational emissions.
        </ContentCard>
        <ContentCard title="Can passengers contribute to offset programs?" variant="dark">
          Yes, customers have the option to contribute to our offset programs
          with each booking, knowing their impact directly benefits African
          communities and ecosystems.
        </ContentCard>
        <ContentCard title="What sustainable aviation initiatives do you support?" variant="dark">
          We actively explore sustainable aviation fuel (SAF), electric and
          hybrid aircraft technologies, and implement fuel-efficient flight
          operations and route optimization.
        </ContentCard>
      </div>
    ),
  },
  {
    id: "payment-pricing",
    title: "Payment and Pricing FAQs",
    content: (
      <ContentGrid columns={2}>
        <ContentCard title="What payment methods are accepted?">
          We accept major credit cards, bank transfers, and corporate accounts.
          Payment terms are established during the booking process.
        </ContentCard>
        <ContentCard title="Are there any hidden fees?">
          No, we provide transparent pricing with all costs disclosed upfront.
          Any additional services will be clearly communicated before booking.
        </ContentCard>
        <ContentCard title="Do you offer corporate packages?">
          Yes, we offer customized corporate packages with preferred pricing,
          dedicated account management, and flexible payment terms.
        </ContentCard>
        <ContentCard title="What is your refund policy?">
          Refund policies vary by service type and timing. Full details are
          provided in our Terms and Conditions and at the time of booking.
        </ContentCard>
      </ContentGrid>
    ),
  },
  {
    id: "contact",
    title: "Still Have Questions?",
    variant: "bordered",
    content: (
      <>
        <p className="mb-6">
          If you can&apos;t find the answer you&apos;re looking for, our
          customer service team is here to help.
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Contact Information" variant="gold">
            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href="mailto:info@klockaviation.com"
                  className="text-[#D7B46A] hover:underline"
                >
                  info@klockaviation.com
                </a>
              </p>
              <p>
                <span className="text-gray-400">Phone:</span>{" "}
                <a
                  href="tel:+254725332222"
                  className="text-[#D7B46A] hover:underline"
                >
                  +254 725 332 222
                </a>
              </p>
              <p>
                <span className="text-gray-400">Privacy:</span>{" "}
                <a
                  href="mailto:info@klockaviation.africa"
                  className="text-[#D7B46A] hover:underline"
                >
                  info@klockaviation.africa
                </a>
              </p>
            </div>
          </ContentCard>
          <ContentCard title="Office Hours" variant="gold">
            <div className="space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p className="mt-4 font-medium text-[#D7B46A]">
                24/7 Emergency Support Available
              </p>
            </div>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
];

export default function FaqsPage() {
  return (
    <LegalPageTemplate
      title="Frequently Asked Questions"
      subtitle="Find answers to commonly asked questions about Klock Aviation services, data privacy, and more."
      lastUpdated="January 2026"
      sections={sections}
    />
  );
}