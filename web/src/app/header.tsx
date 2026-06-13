import Link from "next/link";
import Logo from "./logo";

/* แถบเมนูบางๆ แบบ Apple (ใช้ร่วมกันทุกหน้า) */
const navLinks: [string, string][] = [
  ["บริการ", "/#services"],
  ["แพ็กเกจ", "/#pricing"],
  ["ผลงาน", "/#portfolio"],
  ["รีวิว", "/#reviews"],
  ["ติดต่อ", "/#contact"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[.04] bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between px-6 text-[13px] font-normal text-zinc-700">
        <Link href="/" aria-label="WebCraft หน้าแรก" className="flex items-center">
          <Logo className="h-7 text-[15px]" />
        </Link>
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/login"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          เข้าสู่ระบบ
        </Link>
      </nav>
    </header>
  );
}
