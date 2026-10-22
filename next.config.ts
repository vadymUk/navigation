import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.190"],
  poweredByHeader: false,
  images: {
    // AVIF ~30-50% менший за JPEG, WebP — фолбек
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 день кешу оптимізованих зображень
  },
  experimental: {
    // Інлайнить CSS у <head> — усуває блокуючий запит (PageSpeed: -140 мс)
    inlineCss: true,
  },
};

export default nextConfig;
