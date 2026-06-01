import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // กำหนด root ให้ชัดเจน (แก้คำเตือน lockfile ซ้อนกัน)
  turbopack: {
    root: __dirname,
  },
  // อนุญาตให้โหลดรูปภาพจาก Unsplash ผ่าน next/image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
