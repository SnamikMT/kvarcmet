import Link from "next/link";

const navigation = [
  { href: "#services", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#4ADE80]">Kvarcmet</p>
          <p className="mt-1 text-sm text-slate-300">Металлообработка и изготовление деталей на заказ</p>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+74951234567"
          className="rounded-full border border-[#4ADE80] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#4ADE80] hover:text-[#0B1120]"
        >
          +7 (495) 123-45-67
        </a>
      </div>
    </header>
  );
}
