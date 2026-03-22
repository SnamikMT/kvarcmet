export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Next.js 16</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Чистый проект готов к разработке
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Базовый App Router шаблон запускается без кастомных компонентов, нестандартных Tailwind-токенов и лишней логики.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <code className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
            npm run dev
          </code>
          <code className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            app/page.tsx
          </code>
        </div>
      </section>
    </main>
  );
}
