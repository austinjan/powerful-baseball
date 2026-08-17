import type { Metadata } from "next";
import { CatalogExplorer } from "./CatalogExplorer";
import { InternationalExplorer } from "./InternationalExplorer";
import { PlayerExplorer } from "./PlayerExplorer";
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
          <p>先用完整名錄查姓名、年代、開局地域、守備位置與星數，再查看本站精選的強力轉生選手（強力な転生選手）與 Scout 地點。</p>
        </div>
        <div className="reincarnated-hero-stats" aria-label="頁面資料摘要">
          <div><strong>{catalogPlayers.length}</strong><span>名錄紀錄</span></div>
          <div><strong>{worldPlayerCount}</strong><span>世界代表</span></div>
          <div><strong>{regionCount}</strong><span>日本地域</span></div>
        </div>
      </header>

      <aside className="region-warning">
        <strong>地域要看哪一個？</strong>
        <p>出生地、出身高中與遊戲判定的出身地不一定相同。「開局地域」看高中所在地；轉生球探（転生スカウト）則看遊戲中的「Scout 地點」。例如江川卓出生於福島，但開局與 Scout 都在栃木。完整名錄依開局地域篩選；下方推薦名單依 Scout 地點篩選。</p>
        <div className="region-warning-links">
          <a href="https://appmedia.jp/pawapuro2026-2027/80080750" target="_blank" rel="noreferrer">AppMedia 規則 ↗</a>
          <a href="https://sp.baseball.findfriends.jp/player/19550002/" target="_blank" rel="noreferrer">江川出生資料 ↗</a>
        </div>
      </aside>

      <CatalogExplorer />

      <InternationalExplorer />

      <RegionRanking />

      <PlayerExplorer />

      <section className="sources reincarnated-sources" aria-labelledby="reincarnated-sources-title">
        <p className="eyebrow">SOURCES · 2026-08-17 核對</p>
        <h2 id="reincarnated-sources-title">資料與評價方式</h2>
        <p>完整名錄的姓名、年代、開局地域、主要守備位置、星數與 DLC 標記取自 Game8 2026–2027 搜尋工具；來源頁最後更新於 2026-07-06。推薦卡另依日本攻略資料整理出生地與 Scout 地點。S／A／B 是本站依初始能力、特殊能力、位置稀缺性與攻略來源推薦所做的編輯評價，不是 KONAMI 官方分級。</p>
        <div className="source-links">
          <a href="https://game8.jp/eikan-nine/553746" target="_blank" rel="noreferrer">Game8：おすすめ転生OB・最強ランキング ↗</a>
          <a href="https://game8.jp/eikan-nine/553745" target="_blank" rel="noreferrer">Game8：転生OB完整搜尋工具 ↗</a>
          <a href="https://game8.jp/eikan-nine/553748" target="_blank" rel="noreferrer">Game8：投手の転生OB一覧 ↗</a>
          <a href="https://game8.jp/eikan-nine/626986" target="_blank" rel="noreferrer">Game8：外国人OB・転生留学生一覧 ↗</a>
          <a href="https://www.konami.com/pawa/2026-2027/player/wbc" target="_blank" rel="noreferrer">KONAMI：2026 世界代表名單 ↗</a>
          <a href="https://game8.jp/eikan-nine/553749" target="_blank" rel="noreferrer">Game8：野手の転生OBランキング ↗</a>
          <a href="https://appmedia.jp/pawapuro2026-2027/80080750" target="_blank" rel="noreferrer">AppMedia：転生スカウトおすすめ選手 ↗</a>
          <a href="https://appmedia.jp/eikan2024/77996234" target="_blank" rel="noreferrer">AppMedia：江川卓 Scout 候選地點 ↗</a>
          <a href="https://sp.baseball.findfriends.jp/player/19550002/" target="_blank" rel="noreferrer">週刊ベースボール：江川卓出生資料 ↗</a>
        </div>
      </section>
    </main>
  );
}
