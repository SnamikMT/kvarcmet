import AdvantagesSection from "./components/AdvantagesSection";
import AudienceSection from "./components/AudienceSection";
import ContactSection from "./components/ContactSection";
import EquipmentSection from "./components/EquipmentSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-[#0C1529] text-white">
        <AudienceSection />
        <ServicesSection />
        <ProcessSection />
        <AdvantagesSection />
        <EquipmentSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
