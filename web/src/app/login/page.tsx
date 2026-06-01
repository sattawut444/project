"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const heroImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function validate() {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) {
      next.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!password) {
      next.password = "กรุณากรอกรหัสผ่าน";
    } else if (password.length < 6) {
      next.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      // TODO: เชื่อมต่อกับ API จริง เช่น
      // const res = await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password, remember }) });
      await new Promise((r) => setTimeout(r, 900)); // จำลองการเรียก API
      setMessage("เข้าสู่ระบบสำเร็จ! กำลังพาไปยังหน้าเว็บไซต์...");
      router.push("/"); // ไปหน้าเว็บขายเว็บไซต์ (หน้าแรก)
    } catch {
      setMessage("เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-1 font-sans">
      {/* แผงรูปแบรนด์ (โชว์เฉพาะจอใหญ่) */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src={heroImg}
          alt="ทีม WebCraft กำลังพัฒนาเว็บไซต์"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            WebCraft
          </Link>
          <div>
            <h2 className="text-3xl font-semibold leading-snug tracking-tight">
              สร้างเว็บไซต์ที่ใช่
              <br />
              สำหรับธุรกิจของคุณ
            </h2>
            <p className="mt-3 max-w-sm text-sm text-zinc-200">
              เข้าสู่ระบบเพื่อจัดการเว็บไซต์ ดูสถิติ และพูดคุยกับทีมงานของเรา
            </p>
          </div>
        </div>
      </div>

      {/* ฝั่งฟอร์ม */}
      <div className="flex w-full items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black lg:w-1/2">
        <div className="w-full max-w-md">
        <div className="rounded-2xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.145] dark:bg-zinc-950 sm:p-10">
          {/* หัวข้อ */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              เข้าสู่ระบบ
            </h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              ยินดีต้อนรับกลับ! กรุณากรอกข้อมูลของคุณ
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* อีเมล */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                อีเมล
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                className={`h-11 rounded-lg border bg-transparent px-3.5 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900/10 dark:text-zinc-50 dark:focus:ring-zinc-50/20 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-black/[.12] focus:border-zinc-900 dark:border-white/[.18] dark:focus:border-zinc-300"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>

            {/* รหัสผ่าน */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  รหัสผ่าน
                </label>
                <Link
                  href="#"
                  className="text-xs font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                  className={`h-11 w-full rounded-lg border bg-transparent px-3.5 pr-12 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-900/10 dark:text-zinc-50 dark:focus:ring-zinc-50/20 ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-black/[.12] focus:border-zinc-900 dark:border-white/[.18] dark:focus:border-zinc-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-500 hover:text-black dark:hover:text-zinc-50"
                  aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                >
                  {showPassword ? "ซ่อน" : "แสดง"}
                </button>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
            </div>

            {/* จดจำฉันไว้ */}
            <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-black/20 accent-black dark:border-white/20 dark:accent-white"
              />
              จดจำฉันไว้ในระบบ
            </label>

            {/* ปุ่มเข้าสู่ระบบ */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 flex h-11 items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-60 dark:hover:bg-[#ccc]"
            >
              {submitting ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>

            {/* ข้อความผลลัพธ์ */}
            {message && (
              <p className="rounded-lg bg-zinc-100 px-3.5 py-2.5 text-center text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                {message}
              </p>
            )}
          </form>

          {/* ลิงก์สมัครสมาชิก */}
          <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            ยังไม่มีบัญชี?{" "}
            <Link
              href="#"
              className="font-medium text-black underline-offset-4 hover:underline dark:text-zinc-50"
            >
              สมัครสมาชิก
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
