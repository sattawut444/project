"use client";

import { useState } from "react";
import Image from "next/image";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

type Site = {
  name: string;
  category: string;
  desc: string;
  image: string;
  href: string;
};

/* เว็บไซต์ตัวอย่าง แยกตามหมวดธุรกิจ */
const sites: Site[] = [
  {
    name: "Aroi Kitchen",
    category: "ร้านอาหาร",
    desc: "เว็บร้านอาหารพร้อมเมนูและจองโต๊ะออนไลน์",
    image: img("photo-1517248135467-4c7edcad34c4"),
    href: "#",
  },
  {
    name: "Baan Thai Bistro",
    category: "ร้านอาหาร",
    desc: "ร้านอาหารไทยพรีเมียม โชว์บรรยากาศและเมนูเด่น",
    image: img("photo-1414235077428-338989a2e8c0"),
    href: "#",
  },
  {
    name: "BrewLab",
    category: "คาเฟ่",
    desc: "เว็บคาเฟ่บอกเล่าแบรนด์ พร้อมสั่งเดลิเวอรี",
    image: img("photo-1501339847302-ac426a4a7cbb"),
    href: "#",
  },
  {
    name: "Morning Glory",
    category: "คาเฟ่",
    desc: "คาเฟ่บรรยากาศอบอุ่น พร้อมระบบสมาชิกสะสมแต้ม",
    image: img("photo-1453614512568-c4024d13c247"),
    href: "#",
  },
  {
    name: "Bloom Studio",
    category: "แฟชั่น & ความงาม",
    desc: "ร้านค้าออนไลน์สินค้าแฟชั่น ดีไซน์มินิมอล",
    image: img("photo-1483985988355-763728e1935b"),
    href: "#",
  },
  {
    name: "Lumière Beauty",
    category: "แฟชั่น & ความงาม",
    desc: "แบรนด์สกินแคร์ พร้อมระบบขายและรีวิวลูกค้า",
    image: img("photo-1522335789203-aabd1fc54bc9"),
    href: "#",
  },
  {
    name: "Urban Living",
    category: "อสังหาริมทรัพย์",
    desc: "เว็บโครงการบ้าน-คอนโด พร้อมระบบนัดชมห้อง",
    image: img("photo-1560518883-ce09059eeffa"),
    href: "#",
  },
  {
    name: "The Residence",
    category: "อสังหาริมทรัพย์",
    desc: "คอนโดหรูใจกลางเมือง นำเสนอแบบห้องและราคา",
    image: img("photo-1545324418-cc1a3fa10c00"),
    href: "#",
  },
  {
    name: "FitZone",
    category: "ฟิตเนส & สุขภาพ",
    desc: "เว็บยิมพร้อมตารางคลาสและสมัครสมาชิก",
    image: img("photo-1534438327276-14e5300c3a48"),
    href: "#",
  },
  {
    name: "PureYoga",
    category: "ฟิตเนส & สุขภาพ",
    desc: "สตูดิโอโยคะ พร้อมจองคลาสและแพ็กเกจรายเดือน",
    image: img("photo-1518611012118-696072aa579a"),
    href: "#",
  },
  {
    name: "TechNova",
    category: "บริษัท / องค์กร",
    desc: "เว็บองค์กรนำเสนอบริการและทีมงานมืออาชีพ",
    image: img("photo-1497366216548-37526070297c"),
    href: "#",
  },
  {
    name: "Apex Group",
    category: "บริษัท / องค์กร",
    desc: "เว็บบริษัทระดับองค์กร พร้อมหน้าข่าวสารและร่วมงาน",
    image: img("photo-1486406146926-c627a92ad1ab"),
    href: "#",
  },
];

const categories = ["ทั้งหมด", ...Array.from(new Set(sites.map((s) => s.category)))];

export default function ShowcaseGallery() {
  const [active, setActive] = useState("ทั้งหมด");
  const filtered =
    active === "ทั้งหมด" ? sites : sites.filter((s) => s.category === active);

  return (
    <div className="mt-10">
      {/* แท็บกรองหมวดหมู่ */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => {
          const count =
            c === "ทั้งหมด"
              ? sites.length
              : sites.filter((s) => s.category === c).length;
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sky-600 text-white shadow-sm"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {c}
              <span
                className={`text-xs ${isActive ? "text-sky-100" : "text-zinc-400"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ตัวนับผลลัพธ์ */}
      <p className="mt-6 text-center text-sm text-zinc-500">
        แสดง {filtered.length} เว็บไซต์
        {active !== "ทั้งหมด" && <> ในหมวด “{active}”</>}
      </p>

      {/* การ์ดเว็บตัวอย่าง */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/[.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* แถบเบราว์เซอร์จำลอง */}
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-3.5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[11px] text-zinc-400">
                www.{s.name.toLowerCase().replace(/\s+/g, "")}.com
              </span>
            </div>

            {/* ภาพพรีวิวเว็บ */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
              <Image
                src={s.image}
                alt={`เว็บไซต์ตัวอย่าง — ${s.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {s.category}
              </span>
            </div>

            {/* รายละเอียด */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-zinc-900">{s.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-500">
                {s.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-600">
                ดูเว็บไซต์
                <span className="transition-transform group-hover:translate-x-0.5">
                  ›
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
