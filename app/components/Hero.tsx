export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.18),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.92),_rgba(2,6,23,1))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
            Работаем с серийными и штучными заказами
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Header и Hero для промышленного лендинга без хрупких зависимостей
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Делаем чистую базу для дальнейшей разработки: современный первый экран, понятный оффер,
            акцентный CTA и стили, которые стабильно работают в Next.js 16 и Tailwind 4.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-full bg-[#4ADE80] px-6 py-3 text-base font-semibold text-[#0B1120] transition hover:brightness-110"
            >
              Отправить чертёж
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Смотреть услуги
            </a>
          </div>

          <dl className="mt-12 grid gap-6 text-white sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Срок расчёта</dt>
              <dd className="mt-2 text-2xl font-semibold">до 2 часов</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Материалы</dt>
              <dd className="mt-2 text-2xl font-semibold">сталь / алюминий</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-slate-400">Формат работы</dt>
              <dd className="mt-2 text-2xl font-semibold">B2B и частные</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#4ADE80]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Production</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Участок механической обработки</h2>
              </div>
              <span className="rounded-full bg-[#4ADE80]/15 px-3 py-1 text-sm font-medium text-[#4ADE80]">
                Online
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Токарные работы", "Высокоточная обработка валов, втулок и фланцев"],
                ["Фрезерные работы", "Изготовление корпусов, плит и посадочных мест"],
                ["Сборка и контроль", "Проверка геометрии и подготовка к отгрузке"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-lg font-medium text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
