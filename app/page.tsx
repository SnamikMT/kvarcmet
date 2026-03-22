import AdvantagesSection from "./components/AdvantagesSection";
import AudienceSection from "./components/AudienceSection";
import EquipmentSection from "./components/EquipmentSection";
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
        <section id="gallery" className="h-1" />
        <section id="contacts" className="h-1" />
      </main>
    </>
  );
}
