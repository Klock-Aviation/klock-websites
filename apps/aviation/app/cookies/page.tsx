import LegalPageTemplate, {
  BulletList,
  BulletItem,
  ContentGrid,
  ContentCard,
  type LegalSection,
} from "@repo/ui/templates/LegalPageTemplate";

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that are placed on your device when you
          visit our website. They help us provide you with a better experience
          by remembering your preferences, analyzing how you use our site, and
          enabling certain features.
        </p>
        <p className="mt-4">
          This policy explains what cookies we use, why we use them, and how you
          can manage your cookie preferences.
        </p>
      </>
    ),
  },
  {
    id: "types",
    title: "2. Types of Cookies We Use",
    content: (
      <>
        <ContentGrid columns={2}>
          <ContentCard title="Essential Cookies" variant="gold">
            <p className="mb-2">
              Required for the website to function properly. Cannot be disabled.
            </p>
            <p className="text-xs text-gray-400">
              Examples: Session management, security, load balancing
            </p>
          </ContentCard>
          <ContentCard title="Analytics Cookies" variant="light">
            <p className="mb-2">
              Help us understand how visitors interact with our website.
            </p>
            <p className="text-xs text-gray-400">
              Examples: Google Analytics, page views, traffic sources
            </p>
          </ContentCard>
          <ContentCard title="Functional Cookies" variant="light">
            <p className="mb-2">
              Remember your preferences and enhance functionality.
            </p>
            <p className="text-xs text-gray-400">
              Examples: Language preferences, saved searches, user settings
            </p>
          </ContentCard>
          <ContentCard title="Marketing Cookies" variant="light">
            <p className="mb-2">
              Track your activity to deliver relevant advertisements.
            </p>
            <p className="text-xs text-gray-400">
              Examples: Social media pixels, retargeting, ad measurement
            </p>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "essential",
    title: "3. Essential Cookies",
    variant: "highlight",
    content: (
      <>
        <p className="mb-4">
          These cookies are strictly necessary for the operation of our website.
          They include:
        </p>
        <BulletList>
          <BulletItem>
            <strong>Session cookies:</strong> Maintain your session while
            browsing and using our booking system
          </BulletItem>
          <BulletItem>
            <strong>Security cookies:</strong> Protect against cross-site
            request forgery and other security threats
          </BulletItem>
          <BulletItem>
            <strong>Authentication cookies:</strong> Keep you logged in to your
            account
          </BulletItem>
          <BulletItem>
            <strong>Load balancing cookies:</strong> Distribute traffic across
            our servers for optimal performance
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "analytics",
    title: "4. Analytics Cookies",
    content: (
      <>
        <p className="mb-4">
          We use analytics cookies to understand how visitors use our website.
          This helps us improve our services and user experience. Analytics data
          we collect includes:
        </p>
        <BulletList>
          <BulletItem>Pages visited and time spent on each page</BulletItem>
          <BulletItem>Traffic sources and referral information</BulletItem>
          <BulletItem>Device type, browser, and operating system</BulletItem>
          <BulletItem>Geographic location (country/city level)</BulletItem>
          <BulletItem>Interactions with website features</BulletItem>
        </BulletList>
        <p className="mt-4 text-sm text-gray-400">
          Analytics data is aggregated and does not personally identify you.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "5. Third-Party Cookies",
    variant: "dark",
    content: (
      <>
        <p className="mb-4">
          Some cookies are placed by third-party services that appear on our
          pages:
        </p>
        <div className="space-y-4">
          <ContentCard title="Google Analytics" variant="dark">
            Used for website analytics and performance monitoring. Data retained
            for 26 months.
          </ContentCard>
          <ContentCard title="Zoho" variant="dark">
            Used for CRM integration and form submissions. Helps us manage
            customer inquiries.
          </ContentCard>
          <ContentCard title="Social Media Platforms" variant="dark">
            Facebook, LinkedIn, and Twitter pixels for social sharing and
            marketing purposes.
          </ContentCard>
        </div>
      </>
    ),
  },
  {
    id: "manage",
    title: "6. Managing Your Cookies",
    variant: "bordered",
    content: (
      <>
        <p className="mb-4">You can control and manage cookies in several ways:</p>
        <BulletList>
          <BulletItem>
            <strong>Cookie Banner:</strong> When you first visit our site, you
            can accept or decline non-essential cookies
          </BulletItem>
          <BulletItem>
            <strong>Browser Settings:</strong> Most browsers allow you to refuse
            or delete cookies through their settings
          </BulletItem>
          <BulletItem>
            <strong>Opt-Out Links:</strong> Some third-party providers offer
            opt-out mechanisms on their websites
          </BulletItem>
        </BulletList>
        <p className="mt-4 text-sm text-gray-400">
          Note: Disabling certain cookies may affect the functionality of our
          website, including the booking system.
        </p>
      </>
    ),
  },
  {
    id: "browser",
    title: "7. Browser Cookie Settings",
    content: (
      <>
        <p className="mb-4">
          Here&apos;s how to manage cookies in popular browsers:
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Chrome">
            Settings → Privacy and security → Cookies and other site data
          </ContentCard>
          <ContentCard title="Firefox">
            Settings → Privacy &amp; Security → Cookies and Site Data
          </ContentCard>
          <ContentCard title="Safari">
            Preferences → Privacy → Manage Website Data
          </ContentCard>
          <ContentCard title="Edge">
            Settings → Cookies and site permissions → Cookies and site data
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. Cookie Retention",
    content: (
      <>
        <p className="mb-4">
          Different cookies are retained for different periods:
        </p>
        <BulletList>
          <BulletItem>
            <strong>Session cookies:</strong> Deleted when you close your
            browser
          </BulletItem>
          <BulletItem>
            <strong>Persistent cookies:</strong> Remain for a set period (varies
            by cookie)
          </BulletItem>
          <BulletItem>
            <strong>Analytics cookies:</strong> Typically 12-26 months
          </BulletItem>
          <BulletItem>
            <strong>Preference cookies:</strong> Up to 1 year
          </BulletItem>
        </BulletList>
      </>
    ),
  },
  {
    id: "updates",
    title: "9. Updates to This Policy",
    content: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, legislation, or our data practices. When we make significant
        changes, we will notify you by updating the &quot;Last Updated&quot;
        date and, where appropriate, through other communication channels.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalPageTemplate
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website"
      lastUpdated="January 2026"
      effectiveDate="January 1, 2026"
      sections={sections}
      showConsentBanner={false}
    />
  );
}