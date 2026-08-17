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
  all: "すべて",
  gold: "金特",
  blue: "青特",
};

const positionLabels: Record<PositionFilter, string> = {
  all: "全ポジション",
  pitcher: "投手",
  catcher: "捕手",
  fielder: "野手",
};

const ratingLabels: Record<RatingFilter, string> = {
  all: "すべての評価",
  S: "S 最優先",
  A: "A 強力",
  B: "B 条件次第",
  C: "C 限定的",
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
      <section className="ability-toolbar" aria-label="特殊能力を絞り込む">
        <label className="ability-search">
          <span>日本語名・中文参考・効果を検索</span>
          <input
            type="search"
            value={query}
            placeholder="例：威圧感、奪三振、盗塁…"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="filter-grid">
          <ToggleGroup label="種類" options={kindLabels} value={kind} onChange={setKind} />
          <ToggleGroup label="ポジション" options={positionLabels} value={position} onChange={setPosition} />
          <ToggleGroup label="実用度" options={ratingLabels} value={rating} onChange={setRating} />
        </div>
      </section>

      <div className="results-line" aria-live="polite">
        <p><strong>{results.length}</strong> / {abilities.length} 能力</p>
        <button type="button" onClick={clearFilters}>絞り込みを解除</button>
      </div>

      {results.length > 0 ? (
        <section className="ability-grid" aria-label="特殊能力の検索結果">
          {results.map((ability) => (
            <article className={`ability-card ability-${ability.kind}`} key={`${ability.kind}-${ability.ja}`}>
              <div className="ability-card-top">
                <div className="ability-badges">
                  <span className={`kind-badge kind-${ability.kind}`}>
                    {ability.kind === "gold" ? "金特" : "青特"}
                  </span>
                  <span className="position-badge">{positionLabels[ability.position]}</span>
                </div>
                <span className={`rating-badge rating-${ability.rating}`} aria-label={`実用度 ${ability.rating}`}>
                  {ability.rating}
                </span>
              </div>

              <h2 lang="ja">{ability.ja}</h2>
              <p className="ability-zh" lang="zh-Hant">中文參考｜{ability.zh}</p>

              <div className="ability-detail">
                <h3>実際の効果 <small>中文参考</small></h3>
                <p lang="zh-Hant">{ability.effect}</p>
              </div>
              <div className="ability-detail ability-verdict">
                <h3>{ratingLabels[ability.rating]}</h3>
                <p lang="zh-Hant"><span className="inline-zh-label">中文參考</span>{ability.reason}</p>
              </div>

              <div className="ability-sources" aria-label="情報源">
                {ability.sources.map((source, index) => (
                  <a href={source} target="_blank" rel="noreferrer" key={source}>
                    {index === 0 ? "効果の情報源" : "評価の情報源"} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <p className="eyebrow">NO MATCH</p>
          <h2 lang="ja">該当する能力がありません</h2>
          <p lang="ja">検索語を短くするか、絞り込み条件を一つ解除してください。</p>
          <p className="zh-reference" lang="zh-Hant">中文參考｜縮短關鍵字或清除篩選條件。</p>
          <button type="button" onClick={clearFilters}>158能力をすべて表示</button>
        </section>
      )}
    </>
  );
}
