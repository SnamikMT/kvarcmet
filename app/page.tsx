import AudienceSection from "./components/AudienceSection";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-[#0C1529] text-white">
        <AudienceSection />
        <section id="equipment" className="h-1" />
        <section id="gallery" className="h-1" />
        <section id="contacts" className="h-1" />
      </main>
    </>
  );
}
