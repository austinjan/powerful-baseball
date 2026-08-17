"use client";

import { useEffect, useMemo, useState } from "react";
import { catalogPlayers, type CatalogPosition } from "./catalog";
import { filterCatalog, type CatalogSort } from "./catalogFilter";

const PAGE_SIZE = 100;
const positions: CatalogPosition[] = ["投手", "捕手", "一壘手", "二壘手", "三壘手", "游擊手", "外野手"];
const positionLabels: Record<CatalogPosition, string> = {
  投手: "投手（投手）",
  捕手: "捕手（捕手）",
  一壘手: "一壘手（一塁手）",
  二壘手: "二壘手（二塁手）",
  三壘手: "三壘手（三塁手）",
  游擊手: "游擊手（遊撃手）",
  外野手: "外野手（外野手）",
};
const regions = [...new Set(catalogPlayers.map((player) => player[2]))].sort((a, b) => a.localeCompare(b, "ja"));

export function CatalogExplorer() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("全部");
  const [position, setPosition] = useState<"全部" | CatalogPosition>("全部");
  const [dlc, setDlc] = useState<"全部" | "一般" | "DLC">("全部");
  const [sort, setSort] = useState<CatalogSort>("star");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const results = useMemo(
    () => filterCatalog(catalogPlayers, { query, region, position, dlc }, sort),
    [query, region, position, dlc, sort],
  );

  useEffect(() => setVisibleCount(PAGE_SIZE), [query, region, position, dlc, sort]);

  function reset() {
    setQuery("");
    setRegion("全部");
    setPosition("全部");
    setDlc("全部");
    setSort("star");
  }

  return (
    <section className="catalog-explorer" aria-labelledby="catalog-title">
      <div className="catalog-intro">
        <div>
          <p className="eyebrow">COMPLETE CATALOG · 2026-07-06 SOURCE REVISION</p>
          <h2 id="catalog-title">轉生選手完整名錄（転生選手一覧）</h2>
        </div>
        <p>收錄 Game8 2026–2027 搜尋工具目前可顯示的日本國內轉生選手（転生選手）紀錄。地域是開局時依出身高中判定的地域；不是轉生球探（転生スカウト）的 Scout 地點。</p>
      </div>

      <div className="catalog-toolbar">
        <label className="reincarnated-search">
          <span>搜尋姓名、年代或地域</span>
          <input type="search" value={query} placeholder="例：落合、1989、広島…" onChange={(event) => setQuery(event.target.value)} />
        </label>
        <div className="catalog-selects">
          <label><span>開局地域（開始地域）</span><select value={region} onChange={(event) => setRegion(event.target.value)}><option value="全部">全部地域</option>{regions.map((item) => <option value={item} key={item}>{item}</option>)}</select></label>
          <label><span>DLC 狀態</span><select value={dlc} onChange={(event) => setDlc(event.target.value as "全部" | "一般" | "DLC")}><option value="全部">全部版本</option><option value="一般">一般版</option><option value="DLC">DLC 版</option></select></label>
          <label><span>排序</span><select value={sort} onChange={(event) => setSort(event.target.value as CatalogSort)}><option value="star">星數：高到低</option><option value="year">年代：早到晚</option><option value="name">姓名：五十音順</option></select></label>
        </div>
        <fieldset className="reincarnated-position-filter">
          <legend>主要守備位置（主な守備位置）</legend>
          <div className="filter-pills">
            {(["全部", ...positions] as const).map((item) => <button type="button" className={position === item ? "filter-pill is-active" : "filter-pill"} aria-pressed={position === item} onClick={() => setPosition(item)} key={item}>{item === "全部" ? "全部" : positionLabels[item]}</button>)}
          </div>
        </fieldset>
      </div>

      <div className="catalog-results-line">
        <p aria-live="polite"><strong>{results.length}</strong> / {catalogPlayers.length} 筆</p>
        <button type="button" onClick={reset}>清除篩選</button>
      </div>

      {results.length > 0 ? (
        <>
          <div className="table-wrap catalog-table-wrap">
            <table className="catalog-table">
              <thead><tr><th>選手（選手）</th><th>位置（ポジション）</th><th>星數（★）</th><th>轉生年代（年代）</th><th>開局地域（地域）</th><th>版本</th></tr></thead>
              <tbody>
                {results.slice(0, visibleCount).map(([name, year, itemRegion, itemPosition, star, isDlc]) => (
                  <tr key={name}>
                    <td className="jp-cell" data-label="選手" lang="ja">{name}</td>
                    <td data-label="位置">{positionLabels[itemPosition]}</td>
                    <td data-label="星數"><strong>{star}</strong></td>
                    <td data-label="轉生年代">{year}</td>
                    <td data-label="開局地域" lang="ja">{itemRegion}</td>
                    <td data-label="版本">{isDlc ? <span className="catalog-dlc">DLC</span> : "一般"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {visibleCount < results.length && <button className="catalog-more" type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>再顯示 {Math.min(PAGE_SIZE, results.length - visibleCount)} 筆</button>}
        </>
      ) : (
        <div className="empty-state"><p className="eyebrow">NO MATCH</p><h2>找不到符合條件的選手</h2><button type="button" onClick={reset}>顯示全部選手</button></div>
      )}
    </section>
  );
}
