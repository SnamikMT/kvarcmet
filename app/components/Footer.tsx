import Link from "next/link";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#equipment", label: "Оборудование" },
  { href: "#gallery", label: "Примеры работ" },
  { href: "#contacts", label: "Контакты" },
];

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.5h3l1.2 4.2-1.8 1.8a15.4 15.4 0 0 0 6.1 6.1l1.8-1.8L19.5 16v3a1.5 1.5 0 0 1-1.7 1.5C10.2 19.7 4.3 13.8 3.5 6.2A1.5 1.5 0 0 1 5 4.5Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.75 7.75A2.25 2.25 0 0 1 7 5.5h10A2.25 2.25 0 0 1 19.25 7.75v8.5A2.25 2.25 0 0 1 17 18.5H7a2.25 2.25 0 0 1-2.25-2.25v-8.5Z" />
      <path d="m5.5 7 6.5 5 6.5-5" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20.25s6-5.86 6-10.5a6 6 0 1 0-12 0c0 4.64 6 10.5 6 10.5Z" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111A2F] text-white">
      <div className="mx-auto grid max-w-[1340px] gap-12 px-6 py-14 md:grid-cols-[1.3fr_1fr_1.1fr]">
        <div>
          <p className="text-[22px] font-extrabold uppercase">КВАРЦМЕТ</p>
          <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-slate-400">
            Металлообработка на заказ
          </p>
          <p className="mt-6 max-w-[420px] text-[18px] leading-8 text-[#93ACCE]">
            Серийное и мелкосерийное производство металлических деталей по чертежам и образцам.
          </p>
        </div>

        <div>
          <h3 className="text-[22px] font-extrabold text-white">Навигация</h3>
          <nav className="mt-5 space-y-3 text-[18px] text-[#97B0D1]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-[22px] font-extrabold text-white">Контакты</h3>
          <div className="mt-5 space-y-4 text-[18px] text-[#97B0D1]">
            <a href="tel:+74951234567" className="flex items-center gap-3 transition hover:text-white">
              <PhoneIcon />
              +7 (495) 123-45-67
            </a>
            <a href="mailto:info@kvartsmet.ru" className="flex items-center gap-3 transition hover:text-white">
              <MailIcon />
              info@kvartsmet.ru
            </a>
            <p className="flex items-center gap-3">
              <MapPinIcon />
              г. Москва, ул. Промышленная, д. 12
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1340px] px-6 py-6 text-center text-[16px] text-[#89A3C7]">
          © 2026 КВАРЦМЕТ. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
