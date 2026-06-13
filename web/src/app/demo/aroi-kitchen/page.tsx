import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reservation from "./reservation";

/* รูปจาก Unsplash (อนุญาตใน next.config.ts แล้ว) */
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const metadata: Metadata = {
  title: "Aroi Kitchen — ร้านอาหารไทยร่วมสมัย",
  description:
    "Aroi Kitchen ร้านอาหารไทยร่วมสมัยใจกลางเมือง เปิดให้จองโต๊ะออนไลน์ พร้อมเมนูซิกเนเจอร์และบรรยากาศอบอุ่น",
};

/* เมนูเด่นของร้าน */
const menu = [
  {
    name: "ต้มยำกุ้งแม่น้ำ",
    desc: "กุ้งแม่น้ำตัวโต น้ำซุปเข้มข้น หอมสมุนไพรไทยแท้",
    price: "฿320",
    image: img("photo-1569718212165-3a8278d5f624", 800),
  },
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจันท์ผัดรสกลมกล่อม โรยถั่วและกุ้งสดเต็มคำ",
    price: "฿180",
    image: img("photo-1559314809-0d155014e29e", 800),
  },
  {
    name: "แกงเขียวหวานไก่",
    desc: "กะทิสดเข้มข้น หอมพริกแกงโขลกเอง เผ็ดกำลังดี",
    price: "฿220",
    image: img("photo-1455619452474-d2be8b1e70cd", 800),
  },
  {
    name: "ส้มตำปูม้า",
    desc: "ตำสดรสจัดจ้าน ปูม้าเนื้อแน่น เปรี้ยวเผ็ดถึงใจ",
    price: "฿250",
    image: img("photo-1562565652-a0d8f0c59eb4", 800),
  },
  {
    name: "ข้าวเหนียวมะม่วง",
    desc: "มะม่วงน้ำดอกไม้สุกหวาน ราดกะทิหอมมัน",
    price: "฿140",
    image: img("photo-1621955964441-c173e01c135b", 800),
  },
  {
    name: "หมูสะเต๊ะ",
    desc: "หมูหมักเครื่องเทศ ย่างหอม เสิร์ฟพร้อมน้ำจิ้มถั่ว",
    price: "฿160",
    image: img("photo-1529563021893-cc83c992d75d", 800),
  },
];

/* รูปบรรยากาศร้าน */
const gallery = [
  img("photo-1517248135467-4c7edcad34c4", 800),
  img("photo-1466978913421-dad2ebd01d17", 800),
  img("photo-1552566626-52f8b828add9", 800),
  img("photo-1414235077428-338989a2e8c0", 800),
];

const nav = [
  { label: "เมนู", href: "#menu" },
  { label: "บรรยากาศ", href: "#gallery" },
  { label: "จองโต๊ะ", href: "#reserve" },
  { label: "ติดต่อ", href: "#contact" },
];

export default function AroiKitchenDemo() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50 text-stone-900">
      {/* แถบแจ้งว่าเป็นเว็บตัวอย่าง */}
      <div className="flex items-center justify-center gap-3 bg-stone-900 px-4 py-2 text-center text-xs text-stone-300">
        <span>นี่คือเว็บไซต์ตัวอย่างที่ออกแบบโดย WebCraft</span>
        <Link
          href="/#showcase"
          className="font-medium text-amber-400 hover:underline"
        >
          ← กลับหน้าผลงาน
        </Link>
      </div>

      {/* เมนูนำทาง */}
      <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-tight">
            Aroi<span className="text-amber-600"> Kitchen</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-stone-900">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#reserve"
            className="inline-flex h-10 items-center justify-center rounded-full bg-amber-600 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
          >
            จองโต๊ะ
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------- Hero ---------- */}
        <section className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden text-center text-white">
          <Image
            src={img("photo-1517248135467-4c7edcad34c4")}
            alt="บรรยากาศภายในร้าน Aroi Kitchen"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 mx-auto max-w-2xl px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              ร้านอาหารไทยร่วมสมัย · ใจกลางเมือง
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight drop-shadow sm:text-7xl">
              รสไทยแท้ ในทุกจาน
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg font-normal text-stone-100 drop-shadow sm:text-xl">
              คัดสรรวัตถุดิบสดใหม่ทุกวัน ปรุงด้วยใจ
              เสิร์ฟในบรรยากาศอบอุ่นที่คุณจะหลงรัก
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-amber-600 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-amber-700 sm:w-auto"
              >
                จองโต๊ะออนไลน์
              </a>
              <a
                href="#menu"
                className="group inline-flex h-12 w-full items-center justify-center gap-1 rounded-full border border-white/40 px-8 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
              >
                ดูเมนูทั้งหมด
                <span className="transition-transform group-hover:translate-x-0.5">
                  ›
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- จุดเด่นของร้าน ---------- */}
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-px px-6 py-12 text-center sm:grid-cols-3">
            {[
              { t: "วัตถุดิบสดใหม่", d: "คัดสรรจากตลาดทุกเช้า" },
              { t: "สูตรต้นตำรับ", d: "ส่งต่อมากว่า 20 ปี" },
              { t: "เปิดทุกวัน", d: "11:00 – 22:00 น." },
            ].map((f) => (
              <div key={f.t} className="px-4">
                <h3 className="text-lg font-semibold text-stone-900">{f.t}</h3>
                <p className="mt-1 text-sm text-stone-500">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- เมนู ---------- */}
        <section id="menu" className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-amber-600">
              เมนูซิกเนเจอร์
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              จานเด่นที่ห้ามพลาด
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-500">
              รวมเมนูยอดนิยมที่ลูกค้าสั่งซ้ำมากที่สุด
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((m) => (
              <article
                key={m.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-stone-900">
                      {m.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                      {m.price}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
                    {m.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- บรรยากาศร้าน ---------- */}
        <section id="gallery" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-amber-600">
                บรรยากาศร้าน
              </span>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                พื้นที่อบอุ่นสำหรับทุกมื้อพิเศษ
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {gallery.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl bg-stone-100 ${
                    i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`บรรยากาศร้าน Aroi Kitchen ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- จองโต๊ะ ---------- */}
        <section id="reserve" className="bg-stone-900 py-20 text-white">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-amber-400">
                จองโต๊ะออนไลน์
              </span>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                สำรองที่นั่งล่วงหน้า
              </h2>
              <p className="mt-4 max-w-md text-stone-300">
                เลือกวันและเวลาที่ต้องการ ทีมงานจะยืนยันการจองให้ภายในไม่กี่นาที
                ไม่ต้องรอคิวหน้าร้าน
              </p>
              <ul className="mt-6 space-y-3 text-sm text-stone-300">
                {[
                  "รองรับกรุ๊ปใหญ่และงานเลี้ยง",
                  "ยกเลิกหรือเปลี่ยนแปลงได้ฟรี",
                  "รับส่วนลด 10% เมื่อจองล่วงหน้า",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                      aria-hidden="true"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <Reservation />
          </div>
        </section>

        {/* ---------- ติดต่อ ---------- */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                มาเยี่ยมเราได้ที่
              </h2>
              <dl className="mt-6 space-y-4 text-stone-600">
                <div>
                  <dt className="text-sm font-semibold text-stone-900">ที่อยู่</dt>
                  <dd className="mt-0.5 text-sm">
                    123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">เวลาเปิด</dt>
                  <dd className="mt-0.5 text-sm">ทุกวัน 11:00 – 22:00 น.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-stone-900">โทร</dt>
                  <dd className="mt-0.5 text-sm">02-123-4567</dd>
                </div>
              </dl>
            </div>
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-stone-100">
              <Image
                src={img("photo-1466978913421-dad2ebd01d17")}
                alt="แผนที่ตำแหน่งร้าน Aroi Kitchen"
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
          Aroi Kitchen · ร้านอาหารไทยร่วมสมัย — เว็บไซต์ตัวอย่างโดย{" "}
          <Link href="/" className="font-medium text-amber-600 hover:underline">
            WebCraft
          </Link>
        </p>
      </footer>
    </div>
  );
}
