import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { GetInTouchSection } from "./_components/GetInTouchSection";
import { ContactFormSection } from "./_components/ContactFormSection";
import { ConsultationSection } from "./_components/ConsultationSection";
import { FAQSection } from "./_components/FAQSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WhatsAppCTASection } from "./_components/WhatsAppCTASection";
import { LogoStripSection } from "./_components/LogoStripSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <GetInTouchSection />
      <ContactFormSection />
      <ConsultationSection />
      <FAQSection />
      <TestimonialsSection />
      <WhatsAppCTASection />
      <LogoStripSection />
      <Footer />
    </main>
  );
}