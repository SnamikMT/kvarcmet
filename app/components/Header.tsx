"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-dark-bg fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-white font-bold text-xl">КВАРЦМЕТ</h1>
          <span className="text-gray-400 text-sm">МЕТАЛЛООБРАБОТКА НА ЗАКАЗ</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="#services">Услуги</Link>
          <Link href="#equipment">Оборудование</Link>
          <Link href="#gallery">Примеры работ</Link>
          <Link href="#contacts">Контакты</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:+74951234567" className="text-gray-300 hover:text-white">
            +7 (495) 123-45-67
          </a>
          <button className="bg-primary-green px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition">
            Отправить чертёж
          </button>
        </div>
      </div>
    </header>
  );
}