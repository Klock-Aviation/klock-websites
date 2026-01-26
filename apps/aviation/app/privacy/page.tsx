import LegalPageTemplate, {
  BulletList,
  BulletItem,
  ContentGrid,
  ContentCard,
  type LegalSection,
} from "@repo/ui/templates/LegalPageTemplate";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Klock Aviation Limited (&quot;Klock Aviation,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
          privacy and personal data. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our services.
        </p>
        <p className="mt-4">
          We comply with the Kenya Data Protection Act, 2019, and applicable
          international data protection standards including GDPR where
          applicable.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect information that you provide directly and information
          collected automatically:
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Personal Information" variant="gold">
            Name, email address, phone number, passport details, travel
            preferences, and payment information.
          </ContentCard>
          <ContentCard title="Travel Data" variant="gold">
            Flight history, destination preferences, booking details, and
            special service requests.
          </ContentCard>
          <ContentCard title="Technical Data" variant="gold">
            IP address, browser type, device information, and usage patterns on
            our platforms.
          </ContentCard>
          <ContentCard title="Communication Data" variant="gold">
            Correspondence with our team, feedback, and support requests.
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    variant: "highlight",
    content: (
      <>
        <p className="mb-4">We use your information for the following purposes:</p>
        <BulletList>
          <BulletItem>
            Processing and managing your flight bookings and reservations
          </BulletItem>
          <BulletItem>
            Providing customer support and responding to inquiries
          </BulletItem>
          <BulletItem>
            Sending booking confirmations, updates, and service notifications
          </BulletItem>
          <BulletItem>
            Improving our services and personalizing your experience
          </BulletItem>
          <BulletItem>
            Complying with legal obligations and aviation regulations
          </BulletItem>
          <BulletItem>
            Marketing communications (with your consent)
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. Information Sharing",
    content: (
      <>
        <p className="mb-4">
          We may share your information with the following parties:
        </p>
        <BulletList>
          <BulletItem>
            <strong>Aviation Partners:</strong> Aircraft operators, handling
            agents, and airport authorities as required for your flight
          </BulletItem>
          <BulletItem>
            <strong>Service Providers:</strong> Payment processors, IT service
            providers, and customer support platforms
          </BulletItem>
          <BulletItem>
            <strong>Regulatory Authorities:</strong> Immigration, customs, and
            aviation authorities as required by law
          </BulletItem>
          <BulletItem>
            <strong>Business Partners:</strong> Hotels, ground transportation,
            and other travel service providers (with your consent)
          </BulletItem>
        </BulletList>
        <p className="mt-4 text-sm text-gray-400">
          We do not sell your personal information to third parties.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "5. Data Security",
    variant: "dark",
    content: (
      <>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. These measures include:
        </p>
        <BulletList className="mt-4">
          <BulletItem>
            Encryption of data in transit and at rest
          </BulletItem>
          <BulletItem>
            Secure access controls and authentication
          </BulletItem>
          <BulletItem>
            Regular security assessments and audits
          </BulletItem>
          <BulletItem>
            Staff training on data protection practices
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: (
      <p>
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected, comply with legal obligations,
        resolve disputes, and enforce our agreements. Flight booking records are
        typically retained for 7 years in accordance with aviation regulations.
      </p>
    ),
  },
  {
    id: "rights",
    title: "7. Your Rights",
    variant: "bordered",
    content: (
      <>
        <p className="mb-4">
          Under the Kenya Data Protection Act and applicable laws, you have the
          following rights:
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Access">
            Request a copy of the personal data we hold about you
          </ContentCard>
          <ContentCard title="Rectification">
            Request correction of inaccurate or incomplete data
          </ContentCard>
          <ContentCard title="Erasure">
            Request deletion of your data (subject to legal requirements)
          </ContentCard>
          <ContentCard title="Portability">
            Request transfer of your data in a machine-readable format
          </ContentCard>
          <ContentCard title="Objection">
            Object to processing of your data for marketing purposes
          </ContentCard>
          <ContentCard title="Restriction">
            Request limitation of processing in certain circumstances
          </ContentCard>
        </ContentGrid>
        <p className="mt-4">
          To exercise these rights, contact our Data Protection Officer at{" "}
          <a
            href="mailto:privacy@klockaviation.com"
            className="text-[#D7B46A] hover:underline"
          >
            privacy@klockaviation.com
          </a>
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "8. International Transfers",
    content: (
      <p>
        As an aviation company operating across Africa and internationally, we
        may transfer your data to countries outside Kenya. When we do, we ensure
        appropriate safeguards are in place to protect your data in accordance
        with applicable data protection laws.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: (
      <>
        <p>
          Our website uses cookies and similar technologies to enhance your
          browsing experience. For detailed information about the cookies we use
          and how to manage them, please see our{" "}
          <a href="/cookies" className="text-[#D7B46A] hover:underline">
            Cookie Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        material changes by posting the updated policy on our website and, where
        appropriate, by email.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="January 2026"
      effectiveDate="January 1, 2026"
      sections={sections}
    />
  );
}