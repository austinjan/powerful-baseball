import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
    description: "《パワフルプロ野球2026-2027》栄冠ナイン（榮冠九人）攻略；遊戲名詞使用日文，說明使用繁體中文。",
    openGraph: {
      title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
      description: "日文名詞、中文說明，快速判讀的栄冠ナイン（榮冠九人）攻略。",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "栄冠ナイン（榮冠九人）攻略｜榮冠作戰室",
      description: "日文名詞、中文說明，快速判讀的栄冠ナイン（榮冠九人）攻略。",
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
