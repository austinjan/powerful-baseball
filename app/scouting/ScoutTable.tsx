"use client";

import { useMemo, useState } from "react";
import { categoryLabels, importanceLabels, scoutNotes, type Category } from "./data";
import abilityData from "../special-abilities/abilities.json";

type SortKey = "importance" | "japanese";

type AbilityReference = {
  ja: string;
  effect: string;
};

const abilityReferences = abilityData as AbilityReference[];

function abilityParts(value: string) {
  const match = value.match(/^(.+?)（(.+?)）$/);
  if (match) return { japanese: match[2], chinese: match[1] };
  if (value === "無對應特殊能力") return { japanese: "該当する特殊能力なし", chinese: value };
  return { japanese: value, chinese: "" };
}

function abilityEffect(note: (typeof scoutNotes)[number]) {
  const japanese = abilityParts(note.ability).japanese;
  const lookupName = japanese.replace(/[A-G]／[A-G]$/, "");

  if (lookupName === "威圧感") {
    const position = note.categories.includes("投手") ? "投手" : "野手";
    return abilityReferences.find((ability) => ability.ja === `威圧感・${position}`)?.effect;
  }

  const referencedEffect = abilityReferences.find((ability) => ability.ja === lookupName)?.effect;
  if (referencedEffect) return referencedEffect;

  const supplementalEffects: Record<string, string> = {
    覚醒: "這句寸評表示較容易發生覚醒（覺醒），但不保證一定觸發。",
    天才肌: "可能是天才肌，入學後才能確認；這句寸評不代表必定是天才肌。",
    選球眼: "較容易辨識並放過壞球；屬於綠色能力，不在金特・青特表的收錄範圍內。",
    該当する特殊能力なし: "不直接對應特殊能力，主要反映隊長經驗或練習態度。",
  };

  return supplementalEffects[lookupName] ?? "目前沒有可對照的效果資料。";
}

export function ScoutTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"全部" | Category>("全部");
  const [sortKey, setSortKey] = useState<SortKey>("importance");
  const [ascending, setAscending] = useState(false);

  const rows = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("zh-Hant");
    return scoutNotes
      .filter((note) => {
        const searchableText = `${note.japanese} ${note.chinese} ${note.ability} ${abilityEffect(note)}`.toLocaleLowerCase("zh-Hant");
        return (
          (!needle || searchableText.includes(needle)) &&
          (category === "全部" || note.categories.includes(category))
        );
      })
      .sort((a, b) => {
        const result = sortKey === "japanese"
          ? a.japanese.localeCompare(b.japanese, "ja")
          : a.importance - b.importance || a.japanese.localeCompare(b.japanese, "ja");
        return ascending ? result : -result;
      });
  }, [query, category, sortKey, ascending]);

  function sortBy(key: SortKey) {
    if (sortKey === key) setAscending((value) => !value);
    else {
      setSortKey(key);
      setAscending(key === "japanese");
    }
  }

  const arrow = (key: SortKey) => sortKey === key ? (ascending ? "↑" : "↓") : "↕";

  return (
    <section className="table-panel" aria-labelledby="notes-title">
      <div className="table-intro">
        <div>
          <p className="eyebrow">SCOUTING NOTES</p>
          <h2 id="notes-title"><span lang="ja">寸評</span>（評語）對照表</h2>
        </div>
        <div className="result-count" aria-live="polite"><strong>{rows.length}</strong> 筆結果</div>
      </div>

      <label className="scout-search">
        <span>搜尋日文、中文或代表能力</span>
        <input
          type="search"
          value={query}
          placeholder="例：好リード、引導配球、キャッチャー…"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>

      <div className="filter-bar" aria-label="依分類篩選">
        {(["全部", ...Object.keys(categoryLabels)] as const).map((item) => (
          <button
            className={category === item ? "filter-chip active" : "filter-chip"}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
            aria-pressed={category === item}
          >
            {item === "全部" ? "全部" : categoryLabels[item]}
          </button>
        ))}
      </div>

      <div className="mobile-sort" aria-label="排序方式">
        <span>排序</span>
        <button type="button" className={sortKey === "importance" ? "active" : ""} onClick={() => sortBy("importance")}>推薦度 {arrow("importance")}</button>
        <button type="button" className={sortKey === "japanese" ? "active" : ""} onClick={() => sortBy("japanese")}>日文 {arrow("japanese")}</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col"><button type="button" onClick={() => sortBy("japanese")}>日文 <span>{arrow("japanese")}</span></button></th>
              <th scope="col">中文</th>
              <th scope="col">代表能力</th>
              <th scope="col"><button type="button" onClick={() => sortBy("importance")}>推薦度 <span>{arrow("importance")}</span></button></th>
              <th scope="col">分類</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((note) => (
              <tr key={note.japanese}>
                <td data-label="日文" lang="ja" className="jp-cell">{note.japanese}</td>
                <td data-label="中文">{note.chinese}</td>
                <td data-label="代表能力">
                  <strong lang="ja">{abilityParts(note.ability).japanese}</strong>
                  {abilityParts(note.ability).chinese && <small>{abilityParts(note.ability).chinese}</small>}
                  <small className="ability-effect"><b>實際效果：</b>{abilityEffect(note)}</small>
                </td>
                <td data-label="推薦度">
                  <span className={`rating rating-${note.importance}`}>
                    <span aria-hidden="true">{Array.from({ length: note.importance }, () => "●").join("")}</span>
                    <strong>{importanceLabels[note.importance]}</strong>
                  </span>
                </td>
                <td data-label="分類">
                  <div className="tags">{note.categories.map((item) => <span className="category-tag" key={item}>{categoryLabels[item]}</span>)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
