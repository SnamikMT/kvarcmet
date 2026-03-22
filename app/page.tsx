import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-[#0C1529] text-white">
        <section id="services" className="mx-auto max-w-[1340px] px-6 py-16 text-slate-300">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#4ADE80]">Следующий этап</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Можно продолжать собирать лендинг дальше</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#94A8C9]">
              Header и Hero уже приведены к стилю референса. Дальше можно добавлять блоки услуг,
              оборудования, галереи, форм и кейсов в этой же визуальной системе.
            </p>
          </div>
        </section>
        <section id="equipment" />
        <section id="gallery" />
        <section id="contacts" className="h-1" />
      </main>
    </>
  );
}
