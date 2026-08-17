import { catalogPlayers } from "./catalog";
import { rankCatalogRegions } from "./catalogRanking";

export function RegionRanking() {
  const rows = rankCatalogRegions(catalogPlayers);

  return (
    <section className="region-ranking" aria-labelledby="region-ranking-title">
      <div className="region-ranking-intro">
        <div>
          <p className="eyebrow">REGION RANKING</p>
          <h2 id="region-ranking-title">地區轉生選手數量排行</h2>
        </div>
        <p>依完整國內名錄的開局地域排序；同地域的同名 DLC 版本合併為一名選手，並另列名錄紀錄數。</p>
      </div>

      <div className="table-wrap region-ranking-table">
        <table>
          <thead>
            <tr>
              <th scope="col">排名</th>
              <th scope="col">地區</th>
              <th scope="col">選手人數</th>
              <th scope="col">名錄紀錄</th>
              <th scope="col">DLC 紀錄</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.region}>
                <td data-label="排名" className="region-rank">{String(row.rank).padStart(2, "0")}</td>
                <td data-label="地區" className="jp-cell" lang="ja">{row.region}</td>
                <td data-label="選手人數" className="region-count"><strong>{row.playerCount}</strong> 名</td>
                <td data-label="名錄紀錄" className="region-record-count">{row.recordCount} 筆</td>
                <td data-label="DLC 紀錄" className="region-dlc-count">{row.dlcCount} 筆</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="region-ranking-note">統計完整國內名錄的 {catalogPlayers.length} 筆紀錄、47 個地域；「選手人數」會合併同地域內同一選手的一般版與 DLC 版。若兩個版本的開局地域不同，則分別計入各地域。</p>
    </section>
  );
}
