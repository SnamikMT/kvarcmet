"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between bg-dark-bg px-6 pt-36 pb-20 lg:flex-row lg:pb-32">
      <div className="max-w-xl lg:mr-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-tight text-white lg:text-6xl"
        >
          Изготовление деталей <span className="text-primary-green">по чертежам и образцам</span>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-300 lg:text-xl">
          Металлообработка любой сложности: токарные, фрезерные, сварочные и сборочные работы
        </p>
        <p className="mt-2 text-gray-400">
          Работаем по чертежам, эскизам, образцам и фотографиям деталей
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-primary-green px-6 py-3 font-semibold transition hover:brightness-110">
            Отправить чертёж
          </button>
          <button className="rounded-lg border border-primary-green px-6 py-3 font-semibold transition hover:bg-primary-green hover:text-dark-bg">
            Показать деталь
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-400">
          Рассчитаем стоимость в течение 1–2 часов • Минимальный заказ от 30 000 ₽
        </p>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <Image
          src="/next.svg"
          alt="CNC станок"
          width={600}
          height={338}
          className="h-auto w-full rounded-xl shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
