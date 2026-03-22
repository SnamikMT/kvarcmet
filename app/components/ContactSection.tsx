"use client";

import { useMemo, useState } from "react";

function UploadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 16.5v-9" />
      <path d="m8.5 11 3.5-3.5 3.5 3.5" />
      <path d="M7 20.25h10A2.25 2.25 0 0 0 19.25 18V15.5M4.75 15.5V18A2.25 2.25 0 0 0 7 20.25" />
    </svg>
  );
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const normalized = digits.startsWith("8") ? `7${digits.slice(1)}` : digits;
  const base = normalized.startsWith("7") ? normalized : `7${normalized}`;
  const trimmed = base.slice(0, 11);

  let result = "+7";
  if (trimmed.length > 1) result += ` (${trimmed.slice(1, 4)}`;
  if (trimmed.length >= 4) result += ")";
  if (trimmed.length > 4) result += ` ${trimmed.slice(4, 7)}`;
  if (trimmed.length > 7) result += `-${trimmed.slice(7, 9)}`;
  if (trimmed.length > 9) result += `-${trimmed.slice(9, 11)}`;
  return result;
}

export default function ContactSection() {
  const [phone, setPhone] = useState("+7");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const supportedFormats = useMemo(() => "PDF, DWG, STEP, JPG, PNG", []);

  return (
    <section id="contacts" className="bg-[#243246] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
            Отправьте чертёж или фото детали
          </h2>
          <p className="mt-6 text-[18px] leading-8 text-[#9AB2D1]">
            Рассчитаем стоимость и сроки изготовления в течение 1–2 часов
          </p>
          <p className="mt-2 text-[16px] text-[#8EA8C9]">
            Минимальный заказ от 30 000 ₽ · Серийное и мелкосерийное производство
          </p>
        </div>

        <form
          className="mx-auto mt-14 max-w-[760px] rounded-[22px] border border-white/10 bg-[#202C3F]/80 p-6 shadow-[0_30px_90px_rgba(5,10,20,0.28)] backdrop-blur-sm sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus("success");
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
          </div>

          <div className="mt-4 grid gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              required
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(formatPhone(event.target.value))}
              className="h-14 rounded-[10px] border border-[#40516A] bg-[#243246] px-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
            <textarea
              name="comment"
              placeholder="Комментарий к заказу"
              rows={4}
              className="rounded-[10px] border border-[#40516A] bg-[#243246] px-4 py-4 text-[18px] text-white outline-none transition focus:border-[#4ADE80] focus:shadow-[0_0_0_4px_rgba(74,222,128,0.12)] placeholder:text-[#8BA4C7]"
            />
          </div>

          <label className="mt-6 flex min-h-[148px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-[#495971] bg-[#223047] text-center text-[#92A9C8] transition hover:border-[#4ADE80] hover:bg-[#26354D]">
            <input
              type="file"
              className="sr-only"
              onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
            />
            <UploadIcon />
            <p className="mt-4 text-[18px]">Перетащите чертёж или фото сюда</p>
            <p className="mt-2 text-[16px]">{fileName || supportedFormats}</p>
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[8px] bg-[#4ADE80] text-[20px] font-semibold text-[#07111F] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(74,222,128,0.24)]"
          >
            Отправить заявку
          </button>

          {status === "success" && (
            <p className="mt-4 text-center text-[16px] text-[#9CE7B7]">
              Заявка готова к отправке — можно подключить backend или интеграцию с CRM.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
