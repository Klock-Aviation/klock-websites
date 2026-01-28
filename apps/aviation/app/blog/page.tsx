import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { ArticlesSection } from "./_components/ArticlesSection";
import { CaseStudiesSection } from "./_components/CaseStudiesSection";
import { CertificationsSection } from "./_components/CertificationsSection";
import { CTASection } from "./_components/CTASection";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <ArticlesSection />
      <CertificationsSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  );
}