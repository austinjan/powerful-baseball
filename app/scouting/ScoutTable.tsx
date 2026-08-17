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
          <h2 id="notes-title" lang="ja">寸評早見表</h2>
          <p className="zh-reference" lang="zh-Hant">中文參考｜寸評對照表</p>
        </div>
        <div className="result-count" aria-live="polite"><strong>{rows.length}</strong> 件</div>
      </div>

      <div className="filter-bar" aria-label="カテゴリーで絞り込む">
        {(["全部", ...Object.keys(categoryLabels)] as const).map((item) => (
          <button
            className={category === item ? "filter-chip active" : "filter-chip"}
            key={item}
            onClick={() => setCategory(item)}
            type="button"
            aria-pressed={category === item}
          >
            {item === "全部" ? "すべて" : categoryLabels[item]}
          </button>
        ))}
      </div>

      <div className="mobile-sort" aria-label="並び順">
        <span>並び順</span>
        <button type="button" className={sortKey === "importance" ? "active" : ""} onClick={() => sortBy("importance")}>おすすめ度 {arrow("importance")}</button>
        <button type="button" className={sortKey === "japanese" ? "active" : ""} onClick={() => sortBy("japanese")}>日本語 {arrow("japanese")}</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col"><button type="button" onClick={() => sortBy("japanese")}>寸評・日本語 <span>{arrow("japanese")}</span></button></th>
              <th scope="col">中文参考</th>
              <th scope="col">対応する能力</th>
              <th scope="col"><button type="button" onClick={() => sortBy("importance")}>おすすめ度 <span>{arrow("importance")}</span></button></th>
              <th scope="col">カテゴリー</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((note) => (
              <tr key={note.japanese}>
                <td data-label="日本語" lang="ja" className="jp-cell">{note.japanese}</td>
                <td data-label="中文参考" lang="zh-Hant" className="zh-cell">{note.chinese}</td>
                <td data-label="対応する能力">
                  <strong lang="ja">{abilityParts(note.ability).japanese}</strong>
                  {abilityParts(note.ability).chinese && <small lang="zh-Hant">{abilityParts(note.ability).chinese}</small>}
                </td>
                <td data-label="おすすめ度">
                  <span className={`rating rating-${note.importance}`}>
                    <span aria-hidden="true">{Array.from({ length: note.importance }, () => "●").join("")}</span>
                    <strong>{importanceLabels[note.importance]}</strong>
                  </span>
                </td>
                <td data-label="カテゴリー">
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
