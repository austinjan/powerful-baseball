import type { Metadata } from "next";
import AbilityExplorer from "./AbilityExplorer";

const title = "金特・青特 158能力早見表";
const description = "『パワフルプロ野球2026-2027』栄冠ナインの金特67個・青特91個を、日本語中心・繁体字中国語参考付きで検索できます。";

export const metadata: Metadata = {
  title: `${title}｜栄冠作戦室`,
  description,
  openGraph: { title, description, images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function SpecialAbilitiesPage() {
  return (
    <main className="abilities-page">
      <header className="abilities-hero">
        <nav className="abilities-nav" aria-label="ページナビゲーション">
          <a href="/" className="brand-link"><span className="brand-mark">PB</span> 栄冠作戦室</a>
          <a href="#method">見方</a>
        </nav>
        <div className="abilities-hero-copy">
          <p className="eyebrow">SPECIAL ABILITIES · 2026–2027</p>
          <h1 lang="ja"><span>金特</span>・青特<br />158能力早見表</h1>
          <p lang="ja">日本語名を中心に、実際の効果、栄冠ナインでの実用度、追跡できる情報源を整理。繁体字中国語の参考説明も併記しています。</p>
          <p className="zh-reference ability-hero-zh" lang="zh-Hant">中文參考｜金特與藍特的實際影響、榮冠評價及來源。</p>
          <div className="ability-stats" aria-label="収録能力数">
            <div><strong>67</strong><span>金特</span></div>
            <div><strong>91</strong><span>青特</span></div>
            <div><strong>158</strong><span>標準能力</span></div>
          </div>
        </div>
      </header>

      <section className="ability-intro" id="method">
        <div>
          <p className="eyebrow">HOW TO READ</p>
          <h2 lang="ja">発動頻度を先に見る。<br />能力値の派手さはその後。</h2>
          <p className="zh-reference" lang="zh-Hant">中文參考｜先看觸發頻率，再看面板數值。</p>
        </div>
        <div className="ability-intro-copy">
          <p lang="ja">評価は栄冠ナインの戦術試合を基準にしています。Sは最優先、Aは強力、Bはポジションや場面次第、Cは発動機会が限定的。戦術アイコンを6以上にできる能力、チーム全体への効果、発動頻度の高い能力を優先します。</p>
          <p lang="ja">赤特・緑特・青赤特・チーム能力・実名選手専用の称号能力は対象外です。KONAMIは完全な内部計算式を公開していないため、数値は2026年の日本語攻略情報を使用し、不明なものは不明と明記しています。</p>
          <p className="zh-reference" lang="zh-Hant">中文參考｜S 最優先、A 強、B 看守位或情境、C 觸發較少；未公開數值不會推測。</p>
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI 栄冠ナイン公式紹介 ↗</a>
        </div>
      </section>

      <AbilityExplorer />

      <section className="method-note">
        <p className="eyebrow">SOURCE POLICY</p>
        <h2 lang="ja">効果と評価は、分けて読む。</h2>
        <p lang="ja">公式情報はバージョンと用語の確認に使用。能力値はGame8の2026-2027一覧を中心に、AppMediaで名称・概要・栄冠ナインでの評価を照合しています。評価はKONAMI公式ランキングではなく、未公開の確率を推測したものでもありません。</p>
        <p className="zh-reference method-zh" lang="zh-Hant">中文參考｜效果數值與實用評價分開整理；評價不是 KONAMI 官方排名。</p>
        <div className="method-links">
          <a href="https://game8.jp/eikan-nine/554647" target="_blank" rel="noreferrer">Game8 特殊能力一覧 ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80076742" target="_blank" rel="noreferrer">AppMedia 特殊能力一覧 ↗</a>
        </div>
      </section>

      <footer>
        <span>POWERFUL BASEBALL</span>
        <span lang="ja">最終確認 2026-08-17 · 非公式攻略ノート · 中文参考付き</span>
      </footer>
    </main>
  );
}
