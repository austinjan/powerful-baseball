"use client";

import { useMemo, useState } from "react";
import { categoryLabels, importanceLabels, scoutNotes, type Category } from "./data";

type SortKey = "importance" | "japanese";

export function ScoutTable() {
  const [category, setCategory] = useState<"全部" | Category>("全部");
  const [sortKey, setSortKey] = useState<SortKey>("importance");
  const [ascending, setAscending] = useState(false);

  const rows = useMemo(() => {
    return scoutNotes
      .filter((note) => category === "全部" || note.categories.includes(category))
      .sort((a, b) => {
        const result = sortKey === "japanese"
          ? a.japanese.localeCompare(b.japanese, "ja")
          : a.importance - b.importance || a.japanese.localeCompare(b.japanese, "ja");
        return ascending ? result : -result;
      });
  }, [category, sortKey, ascending]);

  function sortBy(key: SortKey) {
    if (sortKey === key) setAscending((value) => !value);
    else {
      setSortKey(key);
      setAscending(key === "japanese");
    }
  }

  const arrow = (key: SortKey) => sortKey === key ? (ascending ? "↑" : "↓") : "↕";

  function abilityParts(value: string) {
    const match = value.match(/^(.+?)（(.+?)）$/);
    if (match) return { japanese: match[2], chinese: match[1] };
    if (value === "無對應特殊能力") return { japanese: "該当する特殊能力なし", chinese: value };
    return { japanese: value, chinese: "" };
  }

  return (
    <section className="table-panel" aria-labelledby="notes-title">
      <div className="table-intro">
        <div>
          <p className="eyebrow">SCOUTING NOTES</p>
          <h2 id="notes-title"><span lang="ja">寸評</span>（評語）對照表</h2>
        </div>
        <div className="result-count" aria-live="polite"><strong>{rows.length}</strong> 筆結果</div>
      </div>

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
                <td data-label="中文" lang="zh-Hant" className="zh-cell">{note.chinese}</td>
                <td data-label="代表能力">
                  <strong lang="ja">{abilityParts(note.ability).japanese}</strong>
                  {abilityParts(note.ability).chinese && <small lang="zh-Hant">{abilityParts(note.ability).chinese}</small>}
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
