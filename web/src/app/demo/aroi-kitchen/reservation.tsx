"use client";

import { useState } from "react";

const times = ["11:30", "12:30", "17:30", "18:30", "19:30", "20:30"];

export default function Reservation() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center text-stone-900 shadow-xl">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </span>
        <h3 className="mt-4 text-xl font-semibold">รับการจองแล้ว!</h3>
        <p className="mt-1.5 text-sm text-stone-500">
          ขอบคุณที่จองโต๊ะกับ Aroi Kitchen
          <br />
          (นี่คือฟอร์มตัวอย่าง ยังไม่มีการบันทึกจริง)
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900"
        >
          จองอีกครั้ง
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-2xl bg-white p-6 text-stone-900 shadow-xl sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
          ชื่อผู้จอง
          <input
            type="text"
            required
            placeholder="ชื่อ-นามสกุล"
            className="h-11 rounded-xl border border-stone-300 px-3.5 text-sm font-normal outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
          เบอร์โทร
          <input
            type="tel"
            required
            placeholder="08X-XXX-XXXX"
            className="h-11 rounded-xl border border-stone-300 px-3.5 text-sm font-normal outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
          วันที่
          <input
            type="date"
            required
            className="h-11 rounded-xl border border-stone-300 px-3.5 text-sm font-normal outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
          จำนวนคน
          <select
            required
            defaultValue=""
            className="h-11 rounded-xl border border-stone-300 px-3.5 text-sm font-normal outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="" disabled>
              เลือกจำนวน
            </option>
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
              <option key={n} value={n}>
                {n} ท่าน
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-4">
        <legend className="mb-1.5 text-sm font-medium text-stone-700">
          เลือกเวลา
        </legend>
        <div className="flex flex-wrap gap-2">
          {times.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                name="time"
                value={t}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex h-10 items-center justify-center rounded-full border border-stone-300 px-4 text-sm text-stone-600 transition-colors peer-checked:border-amber-600 peer-checked:bg-amber-600 peer-checked:text-white">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-amber-600 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
      >
        ยืนยันการจอง
      </button>
    </form>
  );
}
