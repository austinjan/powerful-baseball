import type { Metadata } from "next";
import { ScoutTable } from "./ScoutTable";

export const metadata: Metadata = {
  title: "新入生スカウト・寸評早見表｜栄冠作戦室",
  description: "新入生スカウトの寸評、対応する能力、おすすめ度を日本語中心・繁体字中国語参考付きで確認できます。",
  openGraph: {
    title: "新入生スカウト・寸評早見表｜栄冠作戦室",
    description: "寸評、対応する能力、おすすめ度を日本語中心で確認。繁体字中国語の参考訳付き。",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "新入生スカウト・寸評早見表｜栄冠作戦室",
    description: "寸評、対応する能力、おすすめ度を日本語中心で確認。繁体字中国語の参考訳付き。",
    images: [],
  },
};

export default function ScoutingPage() {
  return (
    <main className="scouting-page">
      <nav className="detail-nav" aria-label="メインナビゲーション">
        <a href="/" className="brand-link"><span className="brand-mark">PB</span><span>栄冠作戦室</span></a>
        <a href="/" className="back-link">← すべてのテーマ</a>
      </nav>

      <header className="detail-hero">
        <div className="hero-copy">
          <p className="eyebrow">TOPIC 01 · 新入生スカウト</p>
          <h1 lang="ja">寸評早見表</h1>
          <p className="hero-japanese" lang="zh-Hant">中文參考｜寸評速查</p>
          <p className="hero-summary" lang="ja">寸評から特殊能力を推測し、基礎能力・守備位置・交渉の反応も合わせて比較します。一つの寸評だけで選手全体を判断しないことが大切です。</p>
          <p className="zh-reference hero-summary-zh" lang="zh-Hant">中文參考｜先從寸評推測特殊能力，再比較能力條、守位與交涉反應。</p>
        </div>
        <aside className="priority-card" aria-label="スカウト優先候補">
          <span className="priority-label">FIRST LOOK</span>
          <strong lang="ja">まず捕手、<br />次にエース。</strong>
          <ol>
            <li><span>01</span> 好リードが光る</li>
            <li><span>02</span> 打席での迫力が他と違う</li>
            <li><span>03</span> ノビのある直球が持ち味</li>
          </ol>
        </aside>
      </header>

      <section className="quick-notes" aria-label="新生球探基本資訊">
        <div><strong>11–2月</strong><span>スカウト期間</span></div>
        <div><strong>10回</strong><span>年間上限</span></div>
        <div><strong>8人</strong><span>入部上限</span></div>
        <p lang="ja">学校の評判が高いほど、訪問できる都道府県が増え、交渉の成功率も上がります。<small lang="zh-Hant">中文參考｜評價越高，可前往的地區與成功率也會提高。</small></p>
      </section>

      <ScoutTable />

      <section className="reading-note">
        <div>
          <p className="eyebrow">HOW TO READ</p>
          <h2 lang="ja">おすすめ度は選ぶ順番。<br />能力の強さそのものではない。</h2>
          <p className="zh-reference" lang="zh-Hant">中文參考｜推薦度是選人順序，不等於能力強度。</p>
        </div>
        <div className="note-copy">
          <p lang="ja">「最優先」は、特殊能力が希少、チームへの影響が大きい、または日本の攻略情報で優先度が高い選手です。実際には現在のチームに足りないポジションを先に補います。</p>
          <p lang="ja">「将来性を感じる」は覚醒しやすいという意味に限られます。「彼は『天才』なのかもしれない」も天才肌を保証する寸評ではありません。</p>
          <p className="zh-reference" lang="zh-Hant">中文參考｜「最優先」表示稀有或影響大；未來性與天才評語都不是結果保證。</p>
        </div>
      </section>

      <section className="sources" aria-labelledby="sources-title">
        <p className="eyebrow">SOURCES · 2026-08-17 確認</p>
        <h2 id="sources-title" lang="ja">情報源</h2>
        <p lang="ja">寸評と対応能力は日本の攻略情報を照合して整理しています。おすすめ度は能力の希少性、チームへの影響、各情報源の評価をもとにした当サイトの編集判断です。</p>
        <p className="zh-reference source-zh" lang="zh-Hant">中文參考｜評語與能力經日文攻略資料交叉整理；推薦度是本站編輯判斷。</p>
        <div className="source-links">
          <a href="https://game8.jp/eikan-nine/554841" target="_blank" rel="noreferrer">Game8：新入生スカウト攻略 ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80070061" target="_blank" rel="noreferrer">AppMedia：新入生スカウト攻略 ↗</a>
          <a href="https://www.konami.com/pawa/2026-2027/mode/eikan" target="_blank" rel="noreferrer">KONAMI：栄冠ナイン公式紹介 ↗</a>
        </div>
      </section>
    </main>
  );
}
