import Image from "next/image";
import Link from "next/link";
import type { AccentKey, SiteContent } from "./sites";

/* คลาสสีตามหมวดธุรกิจ — เขียนเต็มเพื่อให้ Tailwind มองเห็น (ห้ามต่อสตริงแบบไดนามิก) */
const ACCENT: Record<
  AccentKey,
  {
    solid: string;
    badge: string;
    eyebrow: string;
    eyebrowDark: string;
    dot: string;
    link: string;
    check: string;
  }
> = {
  amber: {
    solid: "bg-amber-600 hover:bg-amber-700",
    badge: "bg-amber-50 text-amber-700",
    eyebrow: "text-amber-600",
    eyebrowDark: "text-amber-400",
    dot: "bg-amber-400",
    link: "text-amber-600",
    check: "text-amber-400",
  },
  orange: {
    solid: "bg-orange-600 hover:bg-orange-700",
    badge: "bg-orange-50 text-orange-700",
    eyebrow: "text-orange-600",
    eyebrowDark: "text-orange-400",
    dot: "bg-orange-400",
    link: "text-orange-600",
    check: "text-orange-400",
  },
  rose: {
    solid: "bg-rose-600 hover:bg-rose-700",
    badge: "bg-rose-50 text-rose-700",
    eyebrow: "text-rose-600",
    eyebrowDark: "text-rose-400",
    dot: "bg-rose-400",
    link: "text-rose-600",
    check: "text-rose-400",
  },
  sky: {
    solid: "bg-sky-600 hover:bg-sky-700",
    badge: "bg-sky-50 text-sky-700",
    eyebrow: "text-sky-600",
    eyebrowDark: "text-sky-400",
    dot: "bg-sky-400",
    link: "text-sky-600",
    check: "text-sky-400",
  },
  emerald: {
    solid: "bg-emerald-600 hover:bg-emerald-700",
    badge: "bg-emerald-50 text-emerald-700",
    eyebrow: "text-emerald-600",
    eyebrowDark: "text-emerald-400",
    dot: "bg-emerald-400",
    link: "text-emerald-600",
    check: "text-emerald-400",
  },
  indigo: {
    solid: "bg-indigo-600 hover:bg-indigo-700",
    badge: "bg-indigo-50 text-indigo-700",
    eyebrow: "text-indigo-600",
    eyebrowDark: "text-indigo-400",
    dot: "bg-indigo-400",
    link: "text-indigo-600",
    check: "text-indigo-400",
  },
};

export default function DemoSite({ site }: { site: SiteContent }) {
  const a = ACCENT[site.accent];

  const nav = [
    { label: site.offerings.eyebrow, href: "#offerings" },
    ...(site.gallery ? [{ label: "บรรยากาศ", href: "#gallery" }] : []),
    { label: site.highlight.eyebrow, href: "#highlight" },
    { label: "ติดต่อ", href: "#contact" },
  ];

  return (
    <div className="flex flex-1 flex-col bg-stone-50 text-stone-900">
      {/* แถบแจ้งว่าเป็นเว็บตัวอย่าง */}
      <div className="flex items-center justify-center gap-3 bg-stone-900 px-4 py-2 text-center text-xs text-stone-300">
        <span>นี่คือเว็บไซต์ตัวอย่างที่ออกแบบโดย WebCraft</span>
        <Link href="/#showcase" className={`font-medium ${a.eyebrowDark} hover:underline`}>
          ← กลับหน้าผลงาน
        </Link>
      </div>

      {/* เมนูนำทาง */}
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-tight">{site.brand}</span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-stone-900">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#highlight"
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium text-white shadow-sm transition-colors ${a.solid}`}
          >
            {site.hero.primaryCta}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden text-center text-white">
          <Image
            src={site.hero.image}
            alt={`บรรยากาศ ${site.brand}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 mx-auto max-w-2xl px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
              {site.hero.eyebrow}
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight drop-shadow sm:text-7xl">
              {site.hero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg font-normal text-stone-100 drop-shadow sm:text-xl">
              {site.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#highlight"
                className={`inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-medium text-white shadow-lg transition-colors sm:w-auto ${a.solid}`}
              >
                {site.hero.primaryCta}
              </a>
              <a
                href="#offerings"
                className="group inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border border-white/40 px-8 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
              >
                {site.hero.secondaryCta}
                <span className="transition-transform group-hover:translate-x-0.5">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- จุดเด่น ---------- */}
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-px px-6 py-12 text-center sm:grid-cols-3">
            {site.features.map((f) => (
              <div key={f.t} className="px-4">
                <h3 className="text-lg font-semibold text-stone-900">{f.t}</h3>
                <p className="mt-1 text-sm text-stone-500">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- รายการ (เมนู/สินค้า/บริการ ฯลฯ) ---------- */}
        <section id="offerings" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <span className={`text-sm font-medium uppercase tracking-widest ${a.eyebrow}`}>
              {site.offerings.eyebrow}
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.offerings.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-500">{site.offerings.subtitle}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.offerings.items.map((m) => (
              <article
                key={m.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-stone-900">{m.name}</h3>
                    {m.meta && (
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${a.badge}`}
                      >
                        {m.meta}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- แกลเลอรี ---------- */}
        {site.gallery && (
          <section id="gallery" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {site.gallery.map((src, i) => (
                  <div
                    key={src + i}
                    className={`relative overflow-hidden rounded-2xl bg-stone-100 ${
                      i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${site.brand} ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- ไฮไลต์ / CTA ---------- */}
        <section id="highlight" className="bg-stone-900 py-20 text-white">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className={`text-sm font-medium uppercase tracking-widest ${a.eyebrowDark}`}>
                {site.highlight.eyebrow}
              </span>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                {site.highlight.title}
              </h2>
              <p className="mt-4 max-w-md text-stone-300">{site.highlight.text}</p>
              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                {site.highlight.bullets.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${a.check}`}
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/[.04] p-10 text-center ring-1 ring-white/10">
              <p className="text-lg font-medium text-white">{site.highlight.title}</p>
              <p className="mt-2 text-sm text-stone-400">{site.highlight.text}</p>
              <a
                href="#contact"
                className={`mt-6 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white shadow-lg transition-colors ${a.solid}`}
              >
                {site.highlight.button}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- ติดต่อ ---------- */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">ติดต่อเรา</h2>
              <dl className="mt-6 space-y-4 text-stone-600">
                <div>
                  <dt className="text-sm font-semibold text-stone-900">ที่อยู่</dt>
                  <dd className="mt-0.5 text-sm">{site.contact.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">เวลาทำการ</dt>
                  <dd className="mt-0.5 text-sm">{site.contact.hours}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">โทร</dt>
                  <dd className="mt-0.5 text-sm">{site.contact.phone}</dd>
                </div>
              </dl>
            </div>
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src={site.contact.mapImage}
                alt={`ตำแหน่งของ ${site.brand}`}
                fill
                sizes="(max-width: 640px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-stone-200 bg-stone-50 py-8 text-center text-xs text-stone-500">
        <p>
          {site.brand} · {site.category} — เว็บไซต์ตัวอย่างโดย{" "}
          <Link href="/" className={`font-medium ${a.link} hover:underline`}>
            WebCraft
          </Link>
        </p>
      </footer>
    </div>
  );
}
