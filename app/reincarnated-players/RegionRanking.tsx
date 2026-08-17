import { players } from "./data";
import { rankRegions } from "./ranking";

export function RegionRanking() {
  const rows = rankRegions(players);

  return (
    <section className="region-ranking" aria-labelledby="region-ranking-title">
      <div className="region-ranking-intro">
        <div>
          <p className="eyebrow">REGION RANKING</p>
          <h2 id="region-ranking-title">地區轉生選手數量排行</h2>
        </div>
        <p>以 Scout 地點的收錄人數排序；同時列出開局地域人數，兩者不可混用。</p>
      </div>

      <div className="table-wrap region-ranking-table">
        <table>
          <thead>
            <tr>
              <th scope="col">排名</th>
              <th scope="col">地區</th>
              <th scope="col">Scout 候選</th>
              <th scope="col">Scout 人數</th>
              <th scope="col">開局人數</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.region}>
                <td data-label="排名" className="region-rank">{String(row.rank).padStart(2, "0")}</td>
                <td data-label="地區" className="jp-cell" lang="ja">{row.region}</td>
                <td data-label="Scout 候選">
                  {row.scoutPlayers.length > 0 ? row.scoutPlayers.join("、") : <span className="no-scout-player">此地區只用於開局</span>}
                </td>
                <td data-label="Scout 人數" className="region-count"><strong>{row.scoutCount}</strong> 名</td>
                <td data-label="開局人數" className="region-start-count">{row.startCount} 名</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="region-ranking-note">只統計本頁目前收錄的 {players.length} 名強力轉生選手（強力な転生選手），不是遊戲全部轉生選手（転生選手）的總數。</p>
    </section>
  );
}
