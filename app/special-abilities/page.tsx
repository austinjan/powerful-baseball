import type { Metadata } from "next";
import AbilityExplorer from "./AbilityExplorer";

export const dynamic = "force-static";

const title = "特殊能力（特能）248 能力速查";
const description = "《パワフルプロ野球2026-2027》栄冠ナイン（榮冠九人）248 個特殊能力：金特、青特、赤特、青赤特、A～G 階級、緑特與專屬能力的日中名稱、效果和來源。";

export const metadata: Metadata = {
  title: `${title}｜榮冠作戰室`,
  description,
  openGraph: { title, description, images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function SpecialAbilitiesPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="abilities-page">
      <header className="abilities-hero">
        <nav className="abilities-nav" aria-label="頁面導覽">
          <a href={`${basePath}/`} className="brand-link"><span className="brand-mark">PB</span> 榮冠作戰室</a>
          <a href="#method">判讀方式</a>
        </nav>
        <div className="abilities-hero-copy">
          <p className="eyebrow">SPECIAL ABILITIES · 2026–2027</p>
          <h1><span lang="ja">特殊能力</span>（特能）<br />248 能力速查</h1>
          <p>能力名稱以日文為主並附中文，實際影響、<span lang="ja">栄冠ナイン</span>（榮冠九人）實用度與來源說明皆使用中文。</p>
          <div className="ability-stats" aria-label="能力筆數">
            <div><strong>6</strong><span>能力類型</span></div>
            <div><strong>34</strong><span>專屬能力</span></div>
            <div><strong>248</strong><span>全部能力</span></div>
          </div>
        </div>
      </header>

      <section className="ability-intro" id="method">
        <div>
          <p className="eyebrow">HOW TO READ</p>
          <h2>先看觸發頻率，<br />再看面板有多漂亮。</h2>
        </div>
        <div className="ability-intro-copy">
          <p>金特（超特殊能力）與青特（青特殊能力）的 S～C 評價以<span lang="ja">栄冠ナイン</span>（榮冠九人）戰術比賽為準。赤特（紅特）、青赤特、A～G 階級與緑特（綠特）改用判讀提示，避免把負面或行為傾向硬套成強度排名。</p>
          <p>範圍涵蓋日本攻略總表中的個人特殊能力（特殊能力），包括實名選手／稱號專屬能力，並以「專屬」徽章標示。球隊特殊能力（チーム特殊能力）屬另一套系統，不混入球員能力清單。</p>
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI 栄冠ナイン（榮冠九人）官方介紹 ↗</a>
        </div>
      </section>

      <AbilityExplorer />

      <section className="method-note">
        <p className="eyebrow">SOURCE POLICY</p>
        <h2>效果和評價，分開看。</h2>
        <p>官方資料用來確認版本與名詞；完整分類與能力數值以 Game8 的 2026-2027 表為主，AppMedia 用於交叉核對金特（超特殊能力）、青特（青特殊能力）的名稱、概略效果與<span lang="ja">栄冠ナイン</span>（榮冠九人）實用評價。評價不是 KONAMI 官方排名，也不假裝成未公開的實測機率。</p>
        <div className="method-links">
          <a href="https://game8.jp/eikan-nine/554647" target="_blank" rel="noreferrer">Game8 特殊能力總表 ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80076742" target="_blank" rel="noreferrer">AppMedia 特殊能力總表 ↗</a>
        </div>
      </section>

      <footer>
        <span>POWERFUL BASEBALL</span>
        <span>最後核對 2026-08-17 · 非官方攻略筆記</span>
      </footer>
    </main>
  );
}
