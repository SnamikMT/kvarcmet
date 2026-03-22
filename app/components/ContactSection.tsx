function UploadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 16.5v-9" />
      <path d="m8.5 11 3.5-3.5 3.5 3.5" />
      <path d="M7 20.25h10A2.25 2.25 0 0 0 19.25 18V15.5M4.75 15.5V18A2.25 2.25 0 0 0 7 20.25" />
    </svg>
  );
}

export default function ContactSection() {
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

        <form className="mx-auto mt-14 max-w-[760px]">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="h-14 w-full rounded-[10px] border border-[#40516A] bg-transparent px-4 text-[18px] text-white outline-none placeholder:text-[#8BA4C7] focus:border-[#4ADE80]"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="h-14 w-full rounded-[10px] border border-[#40516A] bg-transparent px-4 text-[18px] text-white outline-none placeholder:text-[#8BA4C7] focus:border-[#4ADE80]"
            />
            <textarea
              placeholder="Комментарий к заказу"
              rows={4}
              className="w-full rounded-[10px] border border-[#40516A] bg-transparent px-4 py-4 text-[18px] text-white outline-none placeholder:text-[#8BA4C7] focus:border-[#4ADE80]"
            />
          </div>

          <label className="mt-6 flex min-h-[148px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-[#495971] bg-[#223047] text-center text-[#92A9C8]">
            <input type="file" className="sr-only" />
            <UploadIcon />
            <p className="mt-4 text-[18px]">Перетащите чертёж или фото сюда</p>
            <p className="mt-2 text-[16px]">PDF, DWG, STEP, JPG, PNG</p>
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-[8px] bg-[#4ADE80] text-[20px] font-semibold text-[#07111F] transition hover:brightness-110"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
