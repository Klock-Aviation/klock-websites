import LegalPageTemplate, {
  BulletList,
  BulletItem,
  ContentGrid,
  ContentCard,
  BorderedItem,
  type LegalSection,
} from "@repo/ui/templates/LegalPageTemplate";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using the services provided by Klock Aviation Limited
          (&quot;Klock Aviation,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), including our website, mobile applications, and
          aviation services, you agree to be bound by these Terms and
          Conditions.
        </p>
        <p className="mt-4">
          If you do not agree to these terms, please do not use our services.
          Your continued use of our services constitutes acceptance of any
          updates or modifications to these terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Services Description",
    content: (
      <>
        <p className="mb-4">
          Klock Aviation provides comprehensive aviation services across Africa,
          including:
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Charter Services">
            Private jet charter, corporate flights, medical evacuation, safari
            aviation, and helicopter services.
          </ContentCard>
          <ContentCard title="Asset Solutions">
            Aircraft management, sales, leasing, and crew staffing services for
            aircraft owners and operators.
          </ContentCard>
          <ContentCard title="Intelligence Platforms">
            KACT corporate travel platform, aviation analytics, and passenger
            experience solutions.
          </ContentCard>
          <ContentCard title="Sustainability">
            ESG consulting, carbon offsetting, and sustainable aviation
            infrastructure solutions.
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "booking",
    title: "3. Booking and Reservations",
    variant: "highlight",
    content: (
      <>
        <BulletList>
          <BulletItem>
            All bookings are subject to aircraft availability and confirmation
            by Klock Aviation.
          </BulletItem>
          <BulletItem>
            A deposit may be required to secure your booking. Deposit amounts
            and payment terms will be communicated at the time of booking.
          </BulletItem>
          <BulletItem>
            Final payment is due prior to departure unless otherwise agreed in
            writing.
          </BulletItem>
          <BulletItem>
            Quotes are valid for 24 hours unless otherwise specified.
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "4. Cancellation Policy",
    content: (
      <>
        <p className="mb-4">
          Cancellation fees may apply based on the timing of your cancellation:
        </p>
        <div className="space-y-3">
          <BorderedItem title="More than 7 days before departure">
            Full refund minus administrative fees
          </BorderedItem>
          <BorderedItem title="3-7 days before departure">
            50% of the total booking amount
          </BorderedItem>
          <BorderedItem title="Less than 3 days before departure">
            No refund available
          </BorderedItem>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Note: Cancellation policies for charter services may vary based on the
          specific aircraft and operator requirements.
        </p>
      </>
    ),
  },
  {
    id: "passenger",
    title: "5. Passenger Responsibilities",
    content: (
      <>
        <BulletList>
          <BulletItem>
            Passengers must provide valid identification and travel documents as
            required for their journey.
          </BulletItem>
          <BulletItem>
            Passengers must comply with all applicable aviation regulations and
            instructions from the flight crew.
          </BulletItem>
          <BulletItem>
            Dangerous goods, weapons, and prohibited items are not permitted on
            board.
          </BulletItem>
          <BulletItem>
            Passengers must declare any medical conditions that may affect their
            ability to fly.
          </BulletItem>
          <BulletItem>
            Klock Aviation reserves the right to refuse carriage to any
            passenger who poses a safety risk.
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    variant: "dark",
    content: (
      <>
        <p>
          Klock Aviation&apos;s liability is limited to the extent permitted by
          applicable law. We shall not be liable for:
        </p>
        <BulletList className="mt-4">
          <BulletItem>
            Delays or cancellations due to weather, air traffic control, or
            other circumstances beyond our control.
          </BulletItem>
          <BulletItem>
            Loss of or damage to baggage unless caused by our negligence.
          </BulletItem>
          <BulletItem>
            Indirect, consequential, or special damages arising from the use of
            our services.
          </BulletItem>
        </BulletList>
        <p className="mt-4">
          Our liability for personal injury or death is governed by applicable
          international conventions and Kenyan law.
        </p>
      </>
    ),
  },
  {
    id: "intellectual",
    title: "7. Intellectual Property",
    content: (
      <p>
        All content on our website and platforms, including logos, text, images,
        and software, is the property of Klock Aviation Limited or its licensors
        and is protected by intellectual property laws. You may not reproduce,
        distribute, or create derivative works without our prior written
        consent.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "8. Privacy and Data Protection",
    content: (
      <>
        <p>
          Your privacy is important to us. Our collection and use of personal
          data is governed by our Privacy Policy, which forms part of these
          Terms and Conditions. We comply with the Kenya Data Protection Act,
          2019 and applicable international data protection standards.
        </p>
        <p className="mt-4">
          By using our services, you consent to the collection and processing of
          your personal data as described in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "governing",
    title: "9. Governing Law",
    variant: "bordered",
    content: (
      <p>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of the Republic of Kenya. Any disputes arising
        from these terms shall be subject to the exclusive jurisdiction of the
        courts of Kenya, unless otherwise agreed through arbitration.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    content: (
      <p>
        Klock Aviation reserves the right to modify these Terms and Conditions
        at any time. Changes will be effective immediately upon posting to our
        website. Your continued use of our services after any changes indicates
        your acceptance of the modified terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms &amp; Conditions"
      subtitle="Please read these terms carefully before using our services"
      lastUpdated="January 2026"
      effectiveDate="January 1, 2026"
      sections={sections}
    />
  );
}