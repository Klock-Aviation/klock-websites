import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1B2A]">
      <Header />
      <HeroSection />
      <VisionSection />
      <Footer />
    </main>
  );
}