import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroImageSection } from "./_components/HeroImageSection";
import { FeaturesSection } from "./_components/FeaturesSection";
import { ServicesSection } from "./_components/ServicesSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { ValueAddedSection } from "./_components/ValueAddedSection";
import { PortalFeaturesSection } from "./_components/PortalFeaturesSection";
import { OnboardingSection } from "./_components/OnboardingSection";
import { CertificationsSection } from "./_components/CertificationsSection";
import { ContactSection } from "./_components/ContactSection";
import { OffersSection } from "./_components/OffersSection";
import { FAQSection } from "./_components/FAQSection";

export default function AircraftManagementPage() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Header */}
      <Header />

      <main className="relative w-full">
        {/* 1. Hero Banner with Video */}
        <HeroImageSection />

        {/* 2. "Experience Seamless Aircraft Ownership" - Why Choose */}
        <FeaturesSection />

        {/* 3. "Comprehensive Aircraft Management Services" - Tabs */}
        <ServicesSection />

        {/* 4. "Our Clients Say It Best" - Testimonials */}
        <TestimonialsSection />

        {/* 5. "See How Much You Could Save" - Value/Calculator */}
        <ValueAddedSection />

        {/* 6. "More Than Just Management" - Portal Features */}
        <PortalFeaturesSection />

        {/* 7. "Streamlined Onboarding Process" - 5 Steps */}
        <OnboardingSection />

        {/* 8. "Trusted by Aviation Experts Worldwide" - Certifications */}
        <CertificationsSection />

        {/* 9. "Start Your Journey with Klock Aviation" - Contact */}
        <ContactSection />

        {/* 10. "Exclusive Offer for New Clients" - Offers */}
        <OffersSection />

        {/* 11. "Frequently Asked Questions" */}
        <section className="flex flex-col w-full max-w-7xl items-center gap-5 mx-auto py-20 px-4">
          <div className="flex flex-col items-center w-full">
            <h2 
              className="text-4xl md:text-[52px] text-center leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: '#003087', fontWeight: 700 }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-[120px] h-[3px]" style={{ backgroundColor: '#EFBF04' }} />
          <p 
            className="text-lg text-center leading-6 max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#4B5563' }}
          >
            Find answers to common questions about our aircraft management services.
          </p>
        </section>

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}