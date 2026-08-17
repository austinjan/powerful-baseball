import type { Metadata } from "next";
import Link from "next/link";
import { ScoutTable } from "./ScoutTable";

export const metadata: Metadata = {
  title: "新生球探寸評速查｜榮冠作戰室",
  description: "新生球探（新入生スカウト）寸評的中日對照、代表能力、推薦度與分類篩選。",
  openGraph: {
    title: "新生球探寸評速查｜榮冠作戰室",
    description: "新生球探（新入生スカウト）寸評的中日對照、代表能力、推薦度與分類篩選。",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "新生球探寸評速查｜榮冠作戰室",
    description: "新生球探（新入生スカウト）寸評的中日對照、代表能力、推薦度與分類篩選。",
    images: [],
  },
};

export default function ScoutingPage() {
  return (
    <main className="scouting-page">
      <nav className="detail-nav" aria-label="主導覽">
        <Link href="/" className="brand-link"><span className="brand-mark">PB</span><span>榮冠作戰室</span></Link>
        <Link href="/" className="back-link">← 所有主題</Link>
      </nav>

      <header className="detail-hero">
        <div className="hero-copy">
          <p className="eyebrow">TOPIC 01 · 新生探索</p>
          <h1>寸評速查</h1>
          <p className="hero-japanese" lang="ja">新入生スカウト・寸評早見表</p>
          <p className="hero-summary">先看寸評猜特殊能力，再一起比較能力條、守備位置與交涉反應。不要只靠一句評語決定整名球員。</p>
        </div>
        <aside className="priority-card" aria-label="優先球探摘要">
          <span className="priority-label">FIRST LOOK</span>
          <strong>先找捕手，<br />再補王牌。</strong>
          <ol>
            <li><span>01</span> 好リードが光る</li>
            <li><span>02</span> 打席での迫力が他と違う</li>
            <li><span>03</span> ノビのある直球が持ち味</li>
          </ol>
        </aside>
      </header>

      <section className="quick-notes" aria-label="新生球探基本資訊">
        <div><strong>11–2月</strong><span>球探期間</span></div>
        <div><strong>10次</strong><span>每年最多</span></div>
        <div><strong>8人</strong><span>最多招募</span></div>
        <p>評判（評判）越高，可去的都道府縣更多，成功率也會提高。</p>
      </section>

      <ScoutTable />

      <section className="reading-note">
        <div>
          <p className="eyebrow">HOW TO READ</p>
          <h2>推薦度是選人順序，<br />不是能力強度。</h2>
        </div>
        <div className="note-copy">
          <p>「必搶」代表特殊能力稀有、對隊伍影響大，或日本攻略來源明確列為高優先。實際球探仍要先補現有陣容缺口。</p>
          <p>「將来性を感じる」只是較容易覺醒（覚醒）；「彼は『天才』なのかもしれない」也不保證一定是天才肌（天才肌）。</p>
        </div>
      </section>

      <section className="sources" aria-labelledby="sources-title">
        <p className="eyebrow">SOURCES · 2026-08-17 核對</p>
        <h2 id="sources-title">資料來源</h2>
        <p>評語與代表能力依據日本攻略資料交叉整理；推薦度是本站根據能力稀有度、隊伍影響與來源建議所做的編輯判斷。</p>
        <div className="source-links">
          <a href="https://game8.jp/eikan-nine/554841" target="_blank" rel="noreferrer">Game8：新入生スカウト攻略 ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80070061" target="_blank" rel="noreferrer">AppMedia：新入生スカウト攻略 ↗</a>
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI：栄冠ナイン官方介紹 ↗</a>
        </div>
      </section>
    </main>
  );
}
