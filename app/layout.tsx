import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const image = "https://austinjan.github.io/powerful-baseball/og.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://austinjan.github.io/powerful-baseball/"),
  title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
  description: "《パワフルプロ野球2026-2027》栄冠ナイン（榮冠九人）攻略主題索引。",
  openGraph: {
    title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
    description: "日文名詞、中文說明，快速判讀的栄冠ナイン（榮冠九人）攻略主題索引。",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
    description: "日文名詞、中文說明，快速判讀的栄冠ナイン（榮冠九人）攻略主題索引。",
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
