"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../header";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [step, setStep] = useState<"email" | "password">("email");

  function validateEmail() {
    if (!email.trim()) return "กรุณากรอกอีเมล";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "รูปแบบอีเมลไม่ถูกต้อง";
    return null;
  }

  function validatePassword() {
    if (!password) return "กรุณากรอกรหัสผ่าน";
    if (password.length < 6) return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);

    // ขั้นตอนที่ 1: ตรวจอีเมลแล้วไปต่อหน้ารหัสผ่าน
    if (step === "email") {
      const err = validateEmail();
      setErrors({ email: err ?? undefined });
      if (err) return;
      setStep("password");
      return;
    }

    // ขั้นตอนที่ 2: ตรวจรหัสผ่านแล้วเข้าสู่ระบบ
    const err = validatePassword();
    setErrors({ password: err ?? undefined });
    if (err) return;

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
    <>
      <Header />
      <div className="flex flex-1 items-center justify-center bg-white px-6 py-16 font-sans dark:bg-black">
        <div className="w-full max-w-[340px]">
        {/* แบรนด์ + หัวข้อ */}
        <div className="text-center">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50"
          >
            WebCraft
          </Link>
          <h1 className="mt-7 text-[28px] font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            ลงชื่อเข้าใช้ WebCraft
          </h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-8">
          {/* ช่องเดียวต่อขั้นตอน + ปุ่มลูกศรวงกลมขอบบาง (สไตล์ Apple) */}
          {step === "email" ? (
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="อีเมล"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                className={`h-[52px] w-full rounded-xl border bg-white px-4 pr-14 text-[17px] text-black outline-none transition-colors placeholder:text-zinc-400 dark:bg-transparent dark:text-zinc-50 ${
                  errors.email
                    ? "border-red-500"
                    : "border-zinc-300 focus:border-zinc-500 dark:border-zinc-700"
                }`}
              />
              <ArrowButton submitting={submitting} />
            </div>
          ) : (
            <>
              {/* แสดงอีเมลที่กรอก + ปุ่มเปลี่ยน */}
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setErrors({});
                }}
                className="mb-3 flex w-full items-center justify-center gap-1 text-[15px] text-sky-600 hover:underline"
              >
                <span className="text-zinc-500">{email}</span>
                <span className="text-zinc-400">·</span> เปลี่ยน
              </button>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="รหัสผ่าน"
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                  className={`h-[52px] w-full rounded-xl border bg-white px-4 pr-14 text-[17px] text-black outline-none transition-colors placeholder:text-zinc-400 dark:bg-transparent dark:text-zinc-50 ${
                    errors.password
                      ? "border-red-500"
                      : "border-zinc-300 focus:border-zinc-500 dark:border-zinc-700"
                  }`}
                />
                <ArrowButton submitting={submitting} />
              </div>
            </>
          )}

          {/* ข้อความผิดพลาด */}
          {(errors.email || errors.password) && (
            <p className="mt-2 text-center text-[13px] text-red-500">
              {errors.email || errors.password}
            </p>
          )}

          {/* จดจำฉัน */}
          <label className="mt-7 flex cursor-pointer items-center justify-center gap-2 text-[15px] text-zinc-700 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-zinc-300 accent-sky-600 dark:border-zinc-600"
            />
            จดจำฉัน
          </label>

          {/* ข้อความผลลัพธ์ */}
          {message && (
            <p className="mt-4 rounded-lg bg-zinc-100 px-3.5 py-2.5 text-center text-[13px] text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {message}
            </p>
          )}
        </form>

        {/* ลิงก์ */}
        <div className="mt-8 flex flex-col items-center gap-2.5 text-[15px]">
          <Link href="#" className="text-sky-600 hover:underline">
            ลืมรหัสผ่านหรือไม่? ↗
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400">
            ยังไม่มีบัญชี?{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              สร้างบัญชี WebCraft ↗
            </Link>
          </p>
        </div>

        {/* แถบช่วยเหลือด้านล่าง */}
        <div className="mt-12 border-t border-zinc-200 pt-6 text-center text-[13px] text-zinc-500 dark:border-zinc-800">
          ต้องการความช่วยเหลือเพิ่มเติม{" "}
          <a href="tel:0624172731" className="text-sky-600 hover:underline">
            โทร 062-417-2731
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

/* ปุ่มลูกศรวงกลมขอบบางในช่องกรอก (แบบ Apple) */
function ArrowButton({ submitting }: { submitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      aria-label="ดำเนินการต่อ"
      className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-700 disabled:opacity-60 dark:border-zinc-600 dark:hover:border-zinc-400"
    >
      {submitting ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </button>
  );
}
