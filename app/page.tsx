import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="bg-[#020617] px-6 pb-24 text-white">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-slate-300">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4ADE80]">Следующий шаг</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">База готова для дальнейшей разработки</h2>
          <p className="mt-4 max-w-3xl text-base leading-7">
            Теперь проект снова рабочий и уже содержит стартовые секции Header и Hero. Дальше можно спокойно
            наращивать блоки лендинга, формы, адаптив и контент без возврата к проблемам со сборкой.
          </p>
        </div>
      </main>
    </>
  );
}
