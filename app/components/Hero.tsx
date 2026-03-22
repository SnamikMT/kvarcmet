"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 pt-36 pb-20 lg:pb-32 bg-darkBg">
      <div className="max-w-xl lg:mr-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold leading-tight text-white"
        >
          Изготовление деталей <span className="text-primaryGreen">по чертежам и образцам</span>
        </motion.h1>
        <p className="mt-6 text-gray-300 text-lg lg:text-xl">
          Металлообработка любой сложности: токарные, фрезерные, сварочные и сборочные работы
        </p>
        <p className="text-gray-400 mt-2">
          Работаем по чертежам, эскизам, образцам и фотографиям деталей
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-primaryGreen px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition">
            Отправить чертёж
          </button>
          <button className="border border-primaryGreen px-6 py-3 rounded-lg font-semibold hover:bg-primaryGreen hover:text-darkBg transition">
            Показать деталь
          </button>
        </div>
        <p className="mt-3 text-gray-400 text-sm">
          Рассчитаем стоимость в течение 1–2 часов • Минимальный заказ от 30 000 ₽
        </p>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <img
          src="/next.svg"
          alt="CNC станок"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}