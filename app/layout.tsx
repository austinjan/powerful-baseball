import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const image = "https://austinjan.github.io/powerful-baseball/og.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://austinjan.github.io/powerful-baseball/"),
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
