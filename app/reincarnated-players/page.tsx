import type { Metadata } from "next";
import { CatalogExplorer } from "./CatalogExplorer";
import { InternationalExplorer } from "./InternationalExplorer";
import { RegionRanking } from "./RegionRanking";
import { catalogPlayers } from "./catalog";
import { worldPlayerCount } from "./worldRoster";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "轉生選手完整名錄（転生選手一覧）｜榮冠作戰室",
  description: "榮冠九人（栄冠ナイン）日本國內轉生選手、世界代表與轉生留學生的完整可搜尋名錄。",
};

export default function ReincarnatedPlayersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const homeHref = `${basePath}/`;
  const regionCount = new Set(catalogPlayers.map((player) => player[2])).size;

  return (
    <main className="reincarnated-page">
      <nav className="detail-nav" aria-label="主導覽">
        <a href={homeHref} className="brand-link"><span className="brand-mark">PB</span><span>榮冠作戰室</span></a>
        <a href={homeHref} className="back-link">← 所有主題</a>
      </nav>

      <header className="reincarnated-hero">
        <div>
          <p className="eyebrow">TOPIC 03 · <span lang="ja">転生選手</span>（轉生選手）</p>
          <h1>找得到，<br /><span>才搶得到。</span></h1>
          <p>用完整名錄查姓名、年代、開局地域、守備位置與星數，再比較各地域的轉生選手（転生選手）數量。</p>
        </div>
        <div className="reincarnated-hero-stats" aria-label="頁面資料摘要">
          <div><strong>{catalogPlayers.length}</strong><span>名錄紀錄</span></div>
          <div><strong>{worldPlayerCount}</strong><span>世界代表</span></div>
          <div><strong>{regionCount}</strong><span>日本地域</span></div>
        </div>
      </header>

      <aside className="region-warning">
        <strong>地域要看哪一個？</strong>
        <p>出生地、出身高中與遊戲判定的出身地不一定相同。本頁完整名錄與地區排行統一使用「開局地域」，也就是年代開始時選擇的都道府縣；不要直接當成轉生球探（転生スカウト）的 Scout 地點。</p>
        <div className="region-warning-links">
          <a href="https://appmedia.jp/pawapuro2026-2027/80080750" target="_blank" rel="noreferrer">AppMedia 規則 ↗</a>
        </div>
      </aside>

      <CatalogExplorer />

      <RegionRanking />

      <InternationalExplorer />

      <section className="sources reincarnated-sources" aria-labelledby="reincarnated-sources-title">
        <p className="eyebrow">SOURCES · 2026-08-17 核對</p>
        <h2 id="reincarnated-sources-title">資料與評價方式</h2>
        <p>完整名錄與地區排行的姓名、年代、開局地域、主要守備位置、星數與 DLC 標記取自 Game8 2026–2027 搜尋工具；來源頁最後更新於 2026-07-06。地區排行會合併同地域內同一選手的一般版與 DLC 版，若兩個版本的開局地域不同則分別計入，並另列原始名錄紀錄數。</p>
        <div className="source-links">
          <a href="https://game8.jp/eikan-nine/553745" target="_blank" rel="noreferrer">Game8：転生OB完整搜尋工具 ↗</a>
          <a href="https://game8.jp/eikan-nine/553748" target="_blank" rel="noreferrer">Game8：投手の転生OB一覧 ↗</a>
          <a href="https://game8.jp/eikan-nine/626986" target="_blank" rel="noreferrer">Game8：外国人OB・転生留学生一覧 ↗</a>
          <a href="https://www.konami.com/pawa/2026-2027/player/wbc" target="_blank" rel="noreferrer">KONAMI：2026 世界代表名單 ↗</a>
        </div>
      </section>
    </main>
  );
}
