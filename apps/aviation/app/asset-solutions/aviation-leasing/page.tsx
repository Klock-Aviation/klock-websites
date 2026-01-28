import Header from "@/components/Header";
import { HeroSection } from "./_components/HeroSection";
import { LeaseTypesSection } from "./_components/LeaseTypesSection";
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection";
import { AircraftShowcaseSection } from "./_components/AircraftShowcaseSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { ResourcesSection } from "./_components/ResourcesSection";
import { PackagesSection } from "./_components/PackagesSection";
import { ContactSection } from "./_components/ContactSection";
import { TrustFooterSection } from "./_components/TrustFooterSection";

export default function AviationLeasingPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* 1. Hero: "Your Trusted Partner in Aircraft Leasing..." */}
        <HeroSection />

        {/* 2. "A Simplified Guide to Aircraft Leasing" - 4 Tabs */}
        <LeaseTypesSection />

        {/* 3. "Experience Africa's Leading Aviation Partner" + Trust */}
        <WhyChooseUsSection />

        {/* 4. Aircraft Grid + Cost Calculator */}
        <AircraftShowcaseSection />

        {/* 5. "What Our Clients Say About Us" */}
        <TestimonialsSection />

        {/* 6. "Your Guide to Aircraft Leasing" + Newsletter */}
        <ResourcesSection />

        {/* 7. "Exclusive Leasing Packages" + Referral */}
        <PackagesSection />

        {/* 8. "Start Your Journey" - Contact Form */}
        <ContactSection />

        {/* 9. "Trusted by Industry Leaders" + Footer */}
        <TrustFooterSection />
      </main>
    </>
  );
}