"use client";

import { useMemo, useState } from "react";
import {
  players,
  birthRegions,
  positionLabels,
  recommendationLabels,
  sourceLinks,
  type Position,
  type Recommendation,
} from "./data";
import { filterPlayers } from "./filter";

const positions = Object.keys(positionLabels) as Position[];
const recommendations = Object.keys(recommendationLabels) as Recommendation[];
const regions = [...new Set(players.map((player) => player.scoutRegion))].sort((a, b) => a.localeCompare(b, "ja"));

export function PlayerExplorer() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("全部");
  const [position, setPosition] = useState<"全部" | Position>("全部");
  const [recommendation, setRecommendation] = useState<"全部" | Recommendation>("全部");

  const results = useMemo(
    () => filterPlayers(players, { query, region, position, recommendation }),
    [query, region, position, recommendation],
  );

  function reset() {
    setQuery("");
    setRegion("全部");
    setPosition("全部");
    setRecommendation("全部");
  }

  return (
    <section className="reincarnated-explorer" aria-labelledby="player-list-title">
      <div className="reincarnated-toolbar">
        <label className="reincarnated-search">
          <span>搜尋選手姓名或地域</span>
          <input
            type="search"
            value={query}
            placeholder="例：大谷、宮崎、兵庫…"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="reincarnated-selects">
          <label>
            <span>Scout 地點（スカウト出現）</span>
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              <option value="全部">全部 Scout 地點</option>
              {regions.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>推薦度（おすすめ度）</span>
            <select value={recommendation} onChange={(event) => setRecommendation(event.target.value as "全部" | Recommendation)}>
              <option value="全部">全部推薦度</option>
              {recommendations.map((item) => <option value={item} key={item}>{item} · {recommendationLabels[item]}</option>)}
            </select>
          </label>
        </div>

        <fieldset className="reincarnated-position-filter">
          <legend>依守備位置（守備位置）分類</legend>
          <div className="filter-pills">
            {(["全部", ...positions] as const).map((item) => (
              <button
                type="button"
                className={position === item ? "filter-pill is-active" : "filter-pill"}
                aria-pressed={position === item}
                onClick={() => setPosition(item)}
                key={item}
              >
                {item === "全部" ? "全部" : positionLabels[item]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="reincarnated-results-line">
        <div>
          <p className="eyebrow">STRONG REINCARNATED PLAYERS</p>
          <h2 id="player-list-title">強力轉生選手（強力な転生選手）</h2>
        </div>
        <p aria-live="polite"><strong>{results.length}</strong> / {players.length} 名</p>
        <button type="button" onClick={reset}>清除篩選</button>
      </div>

      {results.length > 0 ? (
        <div className="reincarnated-grid">
          {results.map((player, index) => (
            <article className="player-card" key={`${player.name}-${player.year}`}>
              <div className="player-card-top">
                <span className="player-number">{String(index + 1).padStart(2, "0")}</span>
                <span className={`player-rating rating-${player.recommendation}`}>
                  <strong>{player.recommendation}</strong>
                  <small>{recommendationLabels[player.recommendation]}</small>
                </span>
              </div>
              <h3 lang="ja">{player.name}</h3>
              <div className="player-facts">
                <div><span>出生地</span><strong lang="ja">{birthRegions[player.name]}</strong></div>
                <div><span>開局地域</span><strong lang="ja">{player.startRegion}</strong></div>
                <div className={birthRegions[player.name] !== player.scoutRegion ? "scout-location differs" : "scout-location"}><span>Scout 地點</span><strong lang="ja">{player.scoutRegion}</strong></div>
                <div><span>轉生年代</span><strong>{player.year}</strong></div>
              </div>
              <div className="player-positions" aria-label="守備位置">
                {player.positions.map((item) => <span key={item}>{positionLabels[item]}</span>)}
                {player.dlc && <span className="dlc-badge">DLC</span>}
              </div>
              <p>{player.reason}</p>
              <a href={sourceLinks[player.source]} target="_blank" rel="noreferrer">
                {player.source === "game8" ? "Game8" : "AppMedia"} 資料 ↗
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">NO MATCH</p>
          <h2>找不到符合條件的選手</h2>
          <p>試著移除一個地域或守備位置條件。</p>
          <button type="button" onClick={reset}>顯示全部選手</button>
        </div>
      )}
    </section>
  );
}
