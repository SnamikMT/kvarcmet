const serviceCards = [
  {
    title: "Токарные работы",
    description: "Обработка валов, втулок, фланцев и тел вращения на станках с ЧПУ",
    badge: "Макс. Ø 500 мм",
    icon: LatheIcon,
  },
  {
    title: "Фрезерные работы",
    description: "Корпусные детали, пазы, карманы, плоскости — 3- и 4-осевая обработка",
    badge: "Ход стола до 1000 мм",
    icon: MillIcon,
  },
  {
    title: "Сварочные и сборочные работы",
    description: "MIG/MAG, TIG сварка, изготовление металлоконструкций и рам",
    badge: "Сталь, нержавейка, алюминий",
    icon: FlameIcon,
  },
  {
    title: "Изготовление по чертежам",
    description: "Полный цикл: от чертежа или образца до готовой партии деталей",
    badge: "Точность до 0.01 мм",
    icon: DocumentIcon,
  },
  {
    title: "Дополнительная обработка",
    description: "Шлифовка, термообработка, покрытия, координатно-расточные работы",
    badge: "Все виды финишной обработки",
    icon: LayersIcon,
  },
];

function LatheIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MillIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M5 10h14M5 14h14M10 5v14M14 5v14" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3c1.2 3-1.8 3.8-1.8 6.4A3.8 3.8 0 0 0 14 13.2c1 0 2.2-.5 2.8-1.5.8 1 1.7 2.4 1.7 4.1A6.5 6.5 0 1 1 6 13.7c0-2 1-3.8 2.6-5.4.7 1.9 1.8 2.7 2.8 2.7 1.3 0 2.4-1.2 2-2.9" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 3.75h5.5L18.25 8.5V18A2.25 2.25 0 0 1 16 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" />
      <path d="M13.25 3.75V8.5h4.75" />
      <path d="M9 12.5h6M9 16h4.5" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-[#1A2436] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Наши услуги</h2>
          <p className="mt-5 text-[18px] leading-8 text-[#97AFD0]">
            Полный спектр металлообработки — от единичных образцов до серийных партий
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceCards.map(({ title, description, badge, icon: Icon }) => (
            <article key={title} className="rounded-[12px] border border-[#394860] bg-[#202C3F] px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <div className="text-[#4ADE80]">
                <Icon />
              </div>
              <h3 className="mt-6 text-[20px] font-extrabold text-white">{title}</h3>
              <p className="mt-3 max-w-[340px] text-[15px] leading-8 text-[#93ADD0]">{description}</p>
              <span className="mt-5 inline-flex rounded-[7px] bg-[#3A465B] px-3 py-1.5 text-[14px] font-semibold text-[#4ADE80]">
                {badge}
              </span>
            </article>
          ))}

          <article className="flex min-h-[220px] flex-col items-center justify-center rounded-[12px] border border-[#226D4E] bg-[#122533] px-8 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(0,0,0,0.22)]">
            <h3 className="text-[20px] font-extrabold text-white">Нужна нестандартная обработка?</h3>
            <p className="mt-4 max-w-[280px] text-[16px] leading-7 text-[#94A9C8]">
              Отправьте чертёж — рассчитаем стоимость бесплатно
            </p>
            <a
              href="#contacts"
              className="mt-8 inline-flex h-12 items-center rounded-[8px] bg-[#4ADE80] px-7 text-[17px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
            >
              Отправить запрос
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
