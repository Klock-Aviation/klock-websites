import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { SearchFilterSection } from "./_components/SearchFilterSection";
import { FeaturedServicesSection } from "./_components/FeaturedServicesSection";
import { ClientTestimonialsSection } from "./_components/ClientTestimonialsSection";
import { PopularDestinationsSection } from "./_components/PopularDestinationsSection";
import { OurClientsSection } from "./_components/OurClientsSection";
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection";
import { VirtualAircraftToursSection } from "./_components/VirtualAircraftToursSection";
import { CTASection } from "./_components/CTASection";
import { CarbonOffsettingSection } from "./_components/CarbonOffsettingSection";
import { NewsletterSection } from "./_components/NewsletterSection";
import { TrustedLeadersSection } from "./_components/TrustedLeadersSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative w-full min-h-screen bg-white">
        <HeroSection />
        <SearchFilterSection />
        <FeaturedServicesSection />
        <ClientTestimonialsSection />
        <PopularDestinationsSection />
        <OurClientsSection />
        <WhyChooseUsSection />
        <VirtualAircraftToursSection />
        <CTASection />
        <CarbonOffsettingSection />
        <NewsletterSection />
        <TrustedLeadersSection />
      </main>
      <Footer />
    </>
  );
}