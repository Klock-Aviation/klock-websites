import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ThreeForcesSection from "./components/ThreeForcesSection";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1B2A]">
      <Header />
      <HeroSection />
      <ThreeForcesSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}