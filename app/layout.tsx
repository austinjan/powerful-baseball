import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og-jp.png`;
  return {
    title: "栄冠作戦室｜パワプロ2026-2027 栄冠ナイン攻略",
    description: "日本語を中心に、繁体字中国語を参考併記した『パワフルプロ野球2026-2027』栄冠ナイン攻略。",
    openGraph: {
      title: "栄冠作戦室｜栄冠ナイン攻略",
      description: "日本語を中心に、繁体字中国語を参考併記した栄冠ナイン攻略。",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "栄冠作戦室｜栄冠ナイン攻略",
      description: "日本語を中心に、繁体字中国語を参考併記した栄冠ナイン攻略。",
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
