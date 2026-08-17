import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "榮冠作戰室｜栄冠ナイン攻略",
    description: "《パワフルプロ野球2026-2027》榮冠九人攻略主題索引。",
    openGraph: {
      title: "榮冠作戰室｜栄冠ナイン攻略",
      description: "中日對照、快速判讀的榮冠九人攻略主題索引。",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "榮冠作戰室｜栄冠ナイン攻略",
      description: "中日對照、快速判讀的榮冠九人攻略主題索引。",
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
