import { catalogPlayers } from "./catalog";
import { rankCatalogRegions } from "./catalogRanking";
import { getScoutRegion } from "./scoutRegions";

export function RegionRanking() {
  const rows = rankCatalogRegions(catalogPlayers, ([name]) => getScoutRegion(name));
  const rankedRecordCount = rows.reduce((sum, row) => sum + row.recordCount, 0);

  return (
    <section className="region-ranking" aria-labelledby="region-ranking-title">
      <div className="region-ranking-intro">
        <div>
          <p className="eyebrow">REGION RANKING</p>
          <h2 id="region-ranking-title">地區轉生選手數量排行</h2>
        </div>
        <p>依轉生球探（転生スカウト）使用的 Scout 地域排序；同地域的同名 DLC 版本合併為一名選手，並另列名錄紀錄數。</p>
      </div>

      <div className="table-wrap region-ranking-table">
        <table>
          <thead>
            <tr>
              <th scope="col">排名</th>
              <th scope="col">Scout 地域</th>
              <th scope="col">選手人數</th>
              <th scope="col">名錄紀錄</th>
              <th scope="col">DLC 紀錄</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.region}>
                <td data-label="排名" className="region-rank">{String(row.rank).padStart(2, "0")}</td>
                <td data-label="Scout 地域" className="jp-cell" lang="ja">{row.region}</td>
                <td data-label="選手人數" className="region-count"><strong>{row.playerCount}</strong> 名</td>
                <td data-label="名錄紀錄" className="region-record-count">{row.recordCount} 筆</td>
                <td data-label="DLC 紀錄" className="region-dlc-count">{row.dlcCount} 筆</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="region-ranking-note">統計已確認 Scout 地域的 {rankedRecordCount} / {catalogPlayers.length} 筆紀錄、{rows.length} 個地域；「選手人數」會合併同地域內同一選手的一般版與 DLC 版。未確認資料不會納入排行。</p>
    </section>
  );
}
