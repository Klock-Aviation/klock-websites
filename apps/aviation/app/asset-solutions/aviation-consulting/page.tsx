import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { ServicesSection } from "./_components/ServicesSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WhyChooseUsSection } from "./_components/WhyChooseUsSection";
import { ProcessSection } from "./_components/ProcessSection";
import { ContactSection } from "./_components/ContactSection";
import { LogoStripSection } from "./_components/LogoStripSection";

export default function AviationConsultingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <ContactSection />
      <LogoStripSection />
      <Footer />
    </main>
  );
}