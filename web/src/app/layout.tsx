import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCraft — รับทำเว็บไซต์ครบวงจร",
  description:
    "รับออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจ ร้านค้าออนไลน์ และองค์กร สวย เร็ว ติดหน้า Google ราคาเริ่มต้นเพียง 9,900 บาท",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
