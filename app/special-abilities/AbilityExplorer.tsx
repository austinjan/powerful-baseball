"use client";

import { useMemo, useState } from "react";
import abilityData from "./abilities.json";

type Ability = {
  zh: string;
  ja: string;
  kind: "gold" | "blue";
  position: "pitcher" | "catcher" | "fielder";
  effect: string;
  rating: "S" | "A" | "B" | "C";
  reason: string;
  sources: string[];
};

const abilities = abilityData as Ability[];
type KindFilter = "all" | Ability["kind"];
type PositionFilter = "all" | Ability["position"];
type RatingFilter = "all" | Ability["rating"];

const kindLabels: Record<KindFilter, string> = {
  all: "全部",
  gold: "金特",
  blue: "青特（藍特）",
};

const positionLabels: Record<PositionFilter, string> = {
  all: "全部守位",
  pitcher: "投手",
  catcher: "捕手",
  fielder: "野手",
};

const ratingLabels: Record<RatingFilter, string> = {
  all: "全部評價",
  S: "S 必爭",
  A: "A 強",
  B: "B 情境",
  C: "C 有限",
};

function ToggleGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Record<T, string>;
  value: T;
  onChange: (next: T) => void;
}) {
  return (
    <fieldset className="filter-group">
      <legend>{label}</legend>
      <div className="filter-pills">
        {(Object.entries(options) as [T, string][]).map(([key, text]) => (
          <button
            className={value === key ? "filter-pill is-active" : "filter-pill"}
            key={key}
            type="button"
            aria-pressed={value === key}
            onClick={() => onChange(key)}
          >
            {text}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function AbilityExplorer() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("all");
  const [position, setPosition] = useState<PositionFilter>("all");
  const [rating, setRating] = useState<RatingFilter>("all");

  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("zh-Hant");
    return abilities.filter((ability) => {
      const text = `${ability.zh} ${ability.ja} ${ability.effect} ${ability.reason}`.toLocaleLowerCase("zh-Hant");
      return (
        (!needle || text.includes(needle)) &&
        (kind === "all" || ability.kind === kind) &&
        (position === "all" || ability.position === position) &&
        (rating === "all" || ability.rating === rating)
      );
    });
  }, [query, kind, position, rating]);

  const clearFilters = () => {
    setQuery("");
    setKind("all");
    setPosition("all");
    setRating("all");
  };

  return (
    <>
      <section className="ability-toolbar" aria-label="能力篩選">
        <label className="ability-search">
          <span>搜尋中文、日文或效果</span>
          <input
            type="search"
            value={query}
            placeholder="例：威圧感、奪三振、盗塁…"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="filter-grid">
          <ToggleGroup label="類型" options={kindLabels} value={kind} onChange={setKind} />
          <ToggleGroup label="守位" options={positionLabels} value={position} onChange={setPosition} />
          <ToggleGroup label="實用度" options={ratingLabels} value={rating} onChange={setRating} />
        </div>
      </section>

      <div className="results-line" aria-live="polite">
        <p><strong>{results.length}</strong> / {abilities.length} 個能力</p>
        <button type="button" onClick={clearFilters}>清除篩選</button>
      </div>

      {results.length > 0 ? (
        <section className="ability-grid" aria-label="特殊能力結果">
          {results.map((ability) => (
            <article className={`ability-card ability-${ability.kind}`} key={`${ability.kind}-${ability.ja}`}>
              <div className="ability-card-top">
                <div className="ability-badges">
                  <span className={`kind-badge kind-${ability.kind}`}>
                    {ability.kind === "gold" ? "金特" : "青特"}
                  </span>
                  <span className="position-badge">{positionLabels[ability.position]}</span>
                </div>
                <span className={`rating-badge rating-${ability.rating}`} aria-label={`實用度 ${ability.rating}`}>
                  {ability.rating}
                </span>
              </div>

              <h2 lang="ja">{ability.ja}</h2>
              <p className="ability-ja">{ability.zh}</p>

              <div className="ability-detail">
                <h3>實際影響</h3>
                <p>{ability.effect}</p>
              </div>
              <div className="ability-detail ability-verdict">
                <h3>{ratingLabels[ability.rating]}</h3>
                <p>{ability.reason}</p>
              </div>

              <div className="ability-sources" aria-label="資料來源">
                {ability.sources.map((source, index) => (
                  <a href={source} target="_blank" rel="noreferrer" key={source}>
                    {index === 0 ? "效果來源" : "評價來源"} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <p className="eyebrow">NO MATCH</p>
          <h2>沒有符合的能力</h2>
          <p>試著縮短關鍵字，或清除一個篩選條件。</p>
          <button type="button" onClick={clearFilters}>顯示全部 158 個</button>
        </section>
      )}
    </>
  );
}
