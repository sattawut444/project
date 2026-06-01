import Image from "next/image";
import Link from "next/link";
import ShowcaseGallery from "./showcase";

/* แถบเมนูบางๆ แบบ Apple */
const navLinks = ["บริการ", "แพ็กเกจ", "ผลงาน", "รีวิว", "ติดต่อ"];

/* รูปจาก Unsplash (อนุญาตใน next.config.ts แล้ว) */
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* การ์ดโปรโมตแบบ 2 คอลัมน์ (เหมือนส่วนล่างของ apple.com) */
const tiles = [
  {
    title: "ออกแบบ UI/UX",
    sub: "สวย เรียบหรู ใช้งานง่าย",
    theme: "dark" as const,
    image: img("photo-1531403009284-440f080d1e12"),
  },
  {
    title: "SEO ติดหน้า Google",
    sub: "ให้ลูกค้าค้นเจอคุณก่อนใคร",
    theme: "dark" as const,
    image: img("photo-1460925895917-afdab827c52f"),
  },
  {
    title: "ร้านค้าออนไลน์",
    sub: "ระบบขายของครบ จบในที่เดียว",
    theme: "dark" as const,
    image: img("photo-1556742502-ec7c0e9f34b1"),
  },
  {
    title: "ดูแลหลังส่งมอบ",
    sub: "ทีมงานพร้อมช่วยเหลือตลอด",
    theme: "dark" as const,
    image: img("photo-1551434678-e076c223a692"),
  },
];

/* รีวิวลูกค้า พร้อมรูปโปรไฟล์ */
const reviews = [
  {
    t: "ทำเว็บเร็วมาก สวยถูกใจ ยอดขายเพิ่มชัดเจน",
    n: "คุณสมชาย",
    role: "เจ้าของร้านกาแฟ",
    avatar: img("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    t: "ทีมงานดูแลดี แก้งานไว ประทับใจสุดๆ",
    n: "คุณนภา",
    role: "ผู้จัดการแบรนด์ความงาม",
    avatar: img("photo-1438761681033-6461ffad8d80", 200),
  },
  {
    t: "คุ้มค่า เว็บติดหน้า Google มีลูกค้าเข้ามาเยอะ",
    n: "คุณวีระ",
    role: "เจ้าของธุรกิจรับเหมา",
    avatar: img("photo-1472099645785-5658abf4ff4e", 200),
  },
];

/* บริการ พร้อมไอคอนเส้นและคำอธิบาย */
const services = [
  {
    icon: "design",
    title: "ดีไซน์เฉพาะแบรนด์",
    desc: "ออกแบบเฉพาะตัว สะท้อนตัวตนของธุรกิจคุณ",
  },
  {
    icon: "responsive",
    title: "Responsive ทุกจอ",
    desc: "แสดงผลคมชัดทั้งมือถือ แท็บเล็ต และคอม",
  },
  {
    icon: "speed",
    title: "โหลดเร็วระดับมือโปร",
    desc: "ปรับแต่งให้เปิดไว ไม่ทำลูกค้าหลุดมือ",
  },
  {
    icon: "seo",
    title: "SEO ติดหน้า Google",
    desc: "วางโครงสร้างให้ค้นเจอง่าย ได้ลูกค้าใหม่",
  },
  {
    icon: "commerce",
    title: "ระบบขายของออนไลน์",
    desc: "ตะกร้า ชำระเงิน จัดการสต็อก ครบในที่เดียว",
  },
  {
    icon: "support",
    title: "ดูแลหลังส่งมอบ",
    desc: "ทีมงานพร้อมช่วยเหลือและอัปเดตต่อเนื่อง",
  },
];

const iconPaths: Record<string, React.ReactNode> = {
  design: (
    <>
      <circle cx="13.5" cy="6.5" r="1.5" />
      <circle cx="17.5" cy="10.5" r="1.5" />
      <circle cx="8.5" cy="7.5" r="1.5" />
      <circle cx="6.5" cy="12.5" r="1.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.012 17.5 2 12 2z" />
    </>
  ),
  responsive: (
    <>
      <rect x="2" y="4" width="14" height="11" rx="1.5" />
      <rect x="17" y="9" width="5" height="11" rx="1.5" />
      <path d="M2 18h9" />
    </>
  ),
  speed: (
    <>
      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  commerce: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.1 12.4a1.6 1.6 0 0 0 1.6 1.3h9.1a1.6 1.6 0 0 0 1.6-1.2L21 7H5.5" />
    </>
  ),
  support: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.3 6.3a1.8 1.8 0 0 0 2.5 2.5l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" />
    </>
  ),
};

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function ActionLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-7 text-lg sm:text-xl">
      <a
        href="#services"
        className={`group inline-flex items-center gap-1 font-normal ${
          dark ? "text-sky-400" : "text-sky-600"
        } hover:underline`}
      >
        เรียนรู้เพิ่มเติม
        <span className="transition-transform group-hover:translate-x-0.5">›</span>
      </a>
      <a
        href="#contact"
        className={`group inline-flex items-center gap-1 font-normal ${
          dark ? "text-sky-400" : "text-sky-600"
        } hover:underline`}
      >
        สั่งทำเลย
        <span className="transition-transform group-hover:translate-x-0.5">›</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      {/* ---------- แถบเมนูบางแบบ Apple ---------- */}
      <header className="sticky top-0 z-50 border-b border-black/[.04] bg-white/70 backdrop-blur-xl backdrop-saturate-150">
        <nav className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between px-6 text-[13px] font-normal text-zinc-700">
          <Link href="/" className="text-base font-semibold tracking-tight text-black">
            WebCraft
          </Link>
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((l, i) => (
              <li key={l}>
                <a
                  href={["#services", "#pricing", "#portfolio", "#reviews", "#contact"][i]}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/login" className="opacity-80 transition-opacity hover:opacity-100">
            เข้าสู่ระบบ
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* ---------- Hero หลัก (พื้นขาว) ---------- */}
        <section className="relative overflow-hidden bg-white pt-20 text-center sm:pt-28">
          {/* แสงไล่เฉดนุ่มๆ ด้านหลัง */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 max-w-3xl rounded-full bg-gradient-to-r from-sky-200/40 via-indigo-200/40 to-violet-200/40 blur-3xl"
          />

          {/* ป้ายกำกับด้านบน */}
          <div className="relative flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-white/80 px-4 py-1.5 text-[13px] font-medium text-zinc-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              รับทำเว็บไซต์ครบวงจร · เริ่มต้น ฿9,900
            </span>
          </div>

          <h1 className="relative mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            <span className="bg-gradient-to-b from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              WebCraft
            </span>
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl px-6 text-xl font-normal text-zinc-600 sm:text-2xl">
            เว็บไซต์ที่ออกแบบมาเพื่อธุรกิจของคุณ
            <br className="hidden sm:block" />
            สวย เร็ว ติดหน้า Google
          </p>

          {/* ปุ่ม CTA */}
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 px-6 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-sky-600 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-700 sm:w-auto"
            >
              เริ่มต้นเลย — ปรึกษาฟรี
            </a>
            <a
              href="#portfolio"
              className="group inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-900 sm:w-auto"
            >
              ดูผลงาน
              <span className="transition-transform group-hover:translate-x-0.5">›</span>
            </a>
          </div>

          {/* แถบความน่าเชื่อถือ */}
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-amber-400">★★★★★</span> 4.9/5 จากลูกค้าจริง
            </span>
            <span className="hidden h-3 w-px bg-zinc-300 sm:block" />
            <span>ส่งมอบแล้วกว่า 200+ เว็บไซต์</span>
          </div>
          {/* ภาพ Hero จริง */}
          <div className="mx-auto mt-10 max-w-5xl bg-gradient-to-b from-sky-50 via-zinc-50 to-white px-6 pb-2">
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Image
                src={img("photo-1467232004584-a241de8bcf5d")}
                alt="ตัวอย่างเว็บไซต์ที่ออกแบบโดยทีม WebCraft"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- ยูนิตพื้นดำ ---------- */}
        <section
          id="pricing"
          className="bg-black py-16 text-center text-white sm:py-20"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            แพ็กเกจ Pro
          </h2>
          <p className="mx-auto mt-2 max-w-xl px-6 text-xl font-normal text-zinc-300 sm:text-2xl">
            ทุกอย่างที่ธุรกิจต้องการ เริ่มต้น ฿9,900
          </p>
          <ActionLinks dark />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 sm:grid-cols-3">
            {[
              {
                n: "Starter",
                p: "9,900",
                d: "เริ่มต้นธุรกิจ",
                features: ["หน้าเว็บ 5 หน้า", "Responsive ทุกจอ", "ฟอร์มติดต่อ", "ส่งมอบใน 7 วัน"],
                popular: false,
              },
              {
                n: "Business",
                p: "24,900",
                d: "ยอดนิยม",
                features: ["หน้าเว็บ 10 หน้า", "ดีไซน์เฉพาะแบรนด์", "SEO ครบชุด", "เชื่อมต่อ Analytics", "ดูแล 3 เดือน"],
                popular: true,
              },
              {
                n: "Commerce",
                p: "49,900",
                d: "ร้านค้าออนไลน์",
                features: ["ทุกอย่างใน Business", "ระบบขายของครบ", "ชำระเงินออนไลน์", "จัดการสต็อก", "ดูแล 6 เดือน"],
                popular: false,
              },
            ].map((p) => (
              <div
                key={p.n}
                className={`relative flex flex-col rounded-3xl p-8 text-left transition-transform duration-300 hover:-translate-y-1 ${
                  p.popular
                    ? "bg-white text-zinc-900 shadow-2xl ring-1 ring-white/20 sm:-mt-4 sm:mb-4"
                    : "border border-white/10 bg-white/[.04] text-white"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold text-white shadow">
                    ยอดนิยม
                  </span>
                )}
                <div
                  className={`text-sm ${p.popular ? "text-zinc-500" : "text-zinc-400"}`}
                >
                  {p.d}
                </div>
                <div className="mt-1 text-2xl font-semibold">{p.n}</div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">฿{p.p}</span>
                  <span
                    className={`text-sm ${p.popular ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    / โปรเจกต์
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.popular ? "text-sky-600" : "text-sky-400"
                        }`}
                        aria-hidden="true"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      <span className={p.popular ? "text-zinc-700" : "text-zinc-300"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#portfolio"
                  className={`mt-8 flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors ${
                    p.popular
                      ? "bg-sky-600 text-white hover:bg-sky-700"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  เลือกแพ็กเกจนี้
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- ยูนิตพื้นขาว (บริการ) ---------- */}
        <section
          id="services"
          className="bg-zinc-50 py-16 text-center sm:py-20"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            ออกแบบมาอย่างพิถีพิถัน
          </h2>
          <p className="mx-auto mt-2 max-w-2xl px-6 text-xl font-normal text-zinc-600 sm:text-2xl">
            สวยทุกหน้าจอ เร็วทุกการคลิก ใส่ใจทุกรายละเอียด
          </p>
          <ActionLinks />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 px-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-black/[.06] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- ผลงาน: การ์ด 2 คอลัมน์แบบ Apple พร้อมรูปพื้นหลัง ---------- */}
        <section id="portfolio" className="bg-white">
          <div className="mx-auto grid max-w-[1100px] gap-2 p-2 sm:grid-cols-2">
            {tiles.map((t) => (
              <div
                key={t.title}
                className="group relative flex min-h-[440px] flex-col items-center justify-start gap-2 overflow-hidden pt-14 text-center text-white"
              >
                {/* รูปพื้นหลัง */}
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* เลเยอร์ทับให้อ่านง่าย */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/55" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <h3 className="text-3xl font-semibold tracking-tight drop-shadow sm:text-4xl">
                    {t.title}
                  </h3>
                  <p className="px-6 text-lg font-normal text-zinc-100 drop-shadow sm:text-xl">
                    {t.sub}
                  </p>
                  <div className="mt-2 flex items-center gap-5 text-base sm:text-lg">
                    <a href="#showcase" className="text-sky-300 hover:underline">
                      เรียนรู้เพิ่มเติม ›
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- เว็บไซต์ตัวอย่าง ---------- */}
        <section id="showcase" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-medium text-sky-700">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                ผลงานจริง
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                เว็บไซต์ตัวอย่าง
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-lg font-normal text-zinc-600">
                ดูไอเดียจากเว็บที่เราทำให้ธุรกิจหลากหลายประเภท
              </p>
            </div>

            <ShowcaseGallery />
          </div>
        </section>

        {/* ---------- รีวิว ---------- */}
        <section id="reviews" className="bg-zinc-50 py-16 text-center sm:py-20">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            ลูกค้าของเราพูดถึง
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 px-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.n}
                className="rounded-2xl bg-white p-7 text-left shadow-sm"
              >
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 text-zinc-700">“{r.t}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src={r.avatar}
                    alt={r.n}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-zinc-800">{r.n}</span>
                    <span className="text-xs text-zinc-500">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- ติดต่อเรา ---------- */}
        <section id="contact" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-medium text-sky-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              ติดต่อเรา
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              พร้อมเริ่มต้นเว็บไซต์ของคุณแล้ว?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg font-normal text-zinc-600">
              ทักมาคุยกับเราได้ทุกช่องทาง ปรึกษาฟรี ไม่มีค่าใช้จ่าย
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "โทร",
                  value: "062-417-2731",
                  href: "tel:0624172731",
                  qr: null,
                  badge: "bg-emerald-500 text-white",
                  icon: (
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  ),
                },
                {
                  label: "LINE",
                  value: "li.litlit",
                  href: "https://line.me/ti/p/~li.litlit",
                  qr: "/line-qr.png",
                  badge: "bg-[#06C755] text-white",
                  icon: (
                    <>
                      <rect x="3" y="4" width="18" height="13" rx="4" />
                      <path d="M8 20l4-3" />
                    </>
                  ),
                },
                {
                  label: "Instagram",
                  value: "li.litlit",
                  href: "https://instagram.com/li.litlit",
                  qr: "/instagram-qr.png",
                  badge: "bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 text-white",
                  icon: (
                    <>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" />
                    </>
                  ),
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-black/[.06] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {c.qr ? (
                    <span className="rounded-xl border border-zinc-100 bg-white p-1.5 shadow-sm">
                      <Image
                        src={c.qr}
                        alt={`QR Code ${c.label} — ${c.value}`}
                        width={128}
                        height={128}
                        className="h-24 w-24 object-contain"
                      />
                    </span>
                  ) : (
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-105 ${c.badge}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        {c.icon}
                      </svg>
                    </span>
                  )}
                  <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                    {c.label}
                  </span>
                  {c.href.startsWith("tel:") && (
                    <span className="text-base font-semibold text-zinc-900">
                      {c.value}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ---------- Footer บางแบบ Apple ---------- */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-8 text-xs text-zinc-500">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="border-b border-zinc-200 pb-4">
            ต้องการเว็บไซต์สำหรับธุรกิจ? ปรึกษาทีม WebCraft ได้ฟรีทุกวัน
          </p>
          <div className="flex flex-col items-center justify-between gap-3 pt-4 sm:flex-row">
            <span>Copyright © 2026 WebCraft. สงวนลิขสิทธิ์</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-800">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-zinc-800">เงื่อนไขการใช้งาน</a>
              <Link href="/login" className="hover:text-zinc-800">เข้าสู่ระบบ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
