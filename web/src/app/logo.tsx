/* โลโก้ WebCraft — มาร์ก "wc" ในกรอบเบราว์เซอร์
   palette: #2563EB / #60A5FA / #DBEAFE / #111827 / #6B7280 */

type LogoProps = {
  /** แสดงตัวอักษร "WebCraft" ต่อท้ายมาร์ก */
  withWordmark?: boolean;
  /** โทนสี: เต็มสี (เริ่มต้น) หรือขาวดำ */
  variant?: "color" | "mono";
  className?: string;
};

/* เฉพาะรูปสัญลักษณ์ (ไม่มีตัวอักษร) — ใช้ทำ favicon / app icon ได้ */
export function LogoMark({
  variant = "color",
  className,
}: {
  variant?: "color" | "mono";
  className?: string;
}) {
  const mono = variant === "mono";
  const markStroke = mono ? "#111827" : "url(#wcMarkGrad)";
  const frameStroke = mono ? "#9CA3AF" : "url(#wcFrameGrad)";
  const dotFill = mono ? "#9CA3AF" : "#7FA8FB";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="WebCraft"
      className={className}
    >
      {!mono && (
        <defs>
          <linearGradient id="wcMarkGrad" x1="20" y1="26" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="wcFrameGrad" x1="13" y1="15" x2="51" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#BFD3FD" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      )}

      {/* กรอบหน้าต่างเบราว์เซอร์ */}
      <rect
        x="13"
        y="15"
        width="38"
        height="24"
        rx="7"
        stroke={frameStroke}
        strokeWidth="3.2"
      />
      {/* จุดสามจุดบนแถบเบราว์เซอร์ */}
      <circle cx="20" cy="21" r="1.5" fill={dotFill} />
      <circle cx="25.5" cy="21" r="1.5" fill={dotFill} />
      <circle cx="31" cy="21" r="1.5" fill={dotFill} />

      {/* ตัว w */}
      <path
        d="M16 27 L21 41 L26.5 30 L32 41 L37 27"
        stroke={markStroke}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ตัว c */}
      <path
        d="M46 29 A9.5 9.5 0 1 0 46 41"
        stroke={markStroke}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  withWordmark = true,
  variant = "color",
  className,
}: LogoProps) {
  if (!withWordmark) return <LogoMark variant={variant} className={className} />;

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark variant={variant} className="h-full w-auto" />
      <span
        className={`text-[1.35em] font-semibold leading-none tracking-tight ${
          variant === "mono" ? "text-zinc-900" : "text-zinc-900"
        }`}
      >
        WebCraft
      </span>
    </span>
  );
}
