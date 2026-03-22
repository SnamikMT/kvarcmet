import Image from "next/image";

const galleryItems = [
  { title: "Токарная обработка", image: "/work-turning.svg" },
  { title: "Фрезерная деталь", image: "/work-milling.svg" },
  { title: "Сварная конструкция", image: "/work-welding.svg" },
  { title: "Серийное производство", image: "/work-series.svg" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#111A2F] py-24 text-white">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Примеры работ</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[14px] bg-[#182235]">
              <div className="relative aspect-[1/1.08] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,47,0.04)_0%,rgba(17,26,47,0.78)_100%)]" />
                <p className="absolute right-0 bottom-0 left-0 px-4 pb-4 text-[17px] font-extrabold text-white">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
