import type { Metadata } from "next";
import AbilityExplorer from "./AbilityExplorer";

export const dynamic = "force-static";

const title = "金特・青特（藍特）158 能力速查";
const description = "《パワフルプロ野球2026-2027》栄冠ナイン（榮冠九人）67 個金特與 91 個青特（藍特）：日中名稱、實際效果、S～C 實用評價與可追溯來源。";

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
          <h1><span>金特</span>・<span lang="ja">青特</span>（藍特）<br />158 能力速查</h1>
          <p>能力名稱以日文為主並附中文，實際影響、<span lang="ja">栄冠ナイン</span>（榮冠九人）實用度與來源說明皆使用中文。</p>
          <div className="ability-stats" aria-label="能力筆數">
            <div><strong>67</strong><span>金特</span></div>
            <div><strong>91</strong><span>青特（藍特）</span></div>
            <div><strong>158</strong><span>標準能力</span></div>
          </div>
        </div>
      </header>

      <section className="ability-intro" id="method">
        <div>
          <p className="eyebrow">HOW TO READ</p>
          <h2>先看觸發頻率，<br />再看面板有多漂亮。</h2>
        </div>
        <div className="ability-intro-copy">
          <p>評價以<span lang="ja">栄冠ナイン</span>（榮冠九人）的戰術比賽為準：S 必爭、A 強、B 吃守位或情境、C 觸發較窄。能把常用戰術卡升到 6 以上、整隊增益或高頻觸發者優先。</p>
          <p>範圍排除紅特、綠特、青紅特、球隊能力與實名選手專屬稱號。KONAMI 未公開完整內部公式；精確值來自 2026 日文攻略資料，未公開者會直接標示。</p>
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI 栄冠ナイン（榮冠九人）官方介紹 ↗</a>
        </div>
      </section>

      <AbilityExplorer />

      <section className="method-note">
        <p className="eyebrow">SOURCE POLICY</p>
        <h2>效果和評價，分開看。</h2>
        <p>官方資料用來確認版本與名詞；能力數值以 Game8 的 2026-2027 表為主，AppMedia 用於交叉核對名稱、概略效果與<span lang="ja">栄冠ナイン</span>（榮冠九人）實用評價。評價不是 KONAMI 官方排名，也不假裝成未公開的實測機率。</p>
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
