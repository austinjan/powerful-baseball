"use client";

import { useMemo, useState } from "react";
import { foreignCatalog } from "./foreignCatalog";
import { worldRoster, worldPlayerCount } from "./worldRoster";

const PAGE_SIZE = 80;
const allWorldPlayers = worldRoster.flatMap(({ team, names }) => names.map((name) => ({ name, team })));

export function InternationalExplorer() {
  const [worldQuery, setWorldQuery] = useState("");
  const [team, setTeam] = useState("全部");
  const [foreignQuery, setForeignQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const worldResults = useMemo(() => {
    const needle = worldQuery.trim().toLocaleLowerCase("ja");
    return allWorldPlayers.filter((player) =>
      (!needle || `${player.name} ${player.team}`.toLocaleLowerCase("ja").includes(needle)) &&
      (team === "全部" || player.team === team),
    );
  }, [worldQuery, team]);

  const foreignResults = useMemo(() => {
    const needle = foreignQuery.trim().toLocaleLowerCase("ja");
    return foreignCatalog.filter(([name, , affiliation, position, subPosition]) =>
      !needle || `${name} ${affiliation} ${position} ${subPosition}`.toLocaleLowerCase("ja").includes(needle),
    );
  }, [foreignQuery]);

  return (
    <section className="international-explorer" aria-labelledby="world-roster-title">
      <div className="catalog-intro">
        <div>
          <p className="eyebrow">OFFICIAL WORLD ROSTER · VER.1.1.0</p>
          <h2 id="world-roster-title">世界代表轉生選手（世界代表の転生選手）</h2>
        </div>
        <p>KONAMI 官方確認 2026 世界代表選手會成為轉生選手（転生選手）。這組名單沒有日本國內名錄使用的轉生年代、都道府縣或榮冠初始星數，因此獨立顯示。</p>
      </div>

      <div className="international-filters">
        <label className="reincarnated-search"><span>搜尋代表選手或代表隊</span><input type="search" value={worldQuery} placeholder="例：ジャッジ、台湾、日本…" onChange={(event) => setWorldQuery(event.target.value)} /></label>
        <label><span>代表隊（代表チーム）</span><select value={team} onChange={(event) => setTeam(event.target.value)}><option value="全部">全部 20 隊</option>{worldRoster.map((item) => <option value={item.team} key={item.team}>{item.team}（{item.names.length}）</option>)}</select></label>
      </div>
      <p className="international-count" aria-live="polite"><strong>{worldResults.length}</strong> / {worldPlayerCount} 名</p>
      <div className="world-player-grid">
        {worldResults.map((player, index) => <article key={`${player.team}-${player.name}-${index}`}><strong lang="ja">{player.name}</strong><span lang="ja">{player.team}</span></article>)}
      </div>

      <div className="foreign-catalog-block">
        <div className="catalog-intro">
          <div>
            <p className="eyebrow">FOREIGN OB / REINCARNATED STUDENTS</p>
            <h2>外國轉生留學生（転生留学生）</h2>
          </div>
          <p>Game8 另列 304 筆外國人 OB、外籍現役選手與世界代表資料。此表的「能力總評」是通常選手資料，不是榮冠九人（栄冠ナイン）的轉生初始星數，也會與上方官方世界代表姓名重疊。</p>
        </div>
        <div className="foreign-toolbar">
          <label className="reincarnated-search"><span>搜尋姓名、所屬或位置</span><input type="search" value={foreignQuery} placeholder="例：ジャッジ、アメリカ、捕手…" onChange={(event) => { setForeignQuery(event.target.value); setVisibleCount(PAGE_SIZE); }} /></label>
          <p aria-live="polite"><strong>{foreignResults.length}</strong> / {foreignCatalog.length} 筆</p>
        </div>
        <div className="table-wrap foreign-table-wrap">
          <table className="catalog-table foreign-table">
            <thead><tr><th>選手</th><th>所屬（所属）</th><th>主要位置</th><th>副位置</th><th>能力總評</th><th>版本</th></tr></thead>
            <tbody>{foreignResults.slice(0, visibleCount).map(([name, rating, affiliation, position, subPosition, dlc], index) => <tr key={`${name}-${affiliation}-${index}`}><td className="jp-cell" data-label="選手" lang="ja">{name}</td><td data-label="所屬" lang="ja">{affiliation}</td><td data-label="主要位置">{position}</td><td data-label="副位置" lang="ja">{subPosition}</td><td data-label="能力總評"><strong>{rating}</strong></td><td data-label="版本">{dlc ? <span className="catalog-dlc">DLC</span> : "一般"}</td></tr>)}</tbody>
          </table>
        </div>
        {visibleCount < foreignResults.length && <button className="catalog-more" type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>再顯示 {Math.min(PAGE_SIZE, foreignResults.length - visibleCount)} 筆</button>}
      </div>
    </section>
  );
}
