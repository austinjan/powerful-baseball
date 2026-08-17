import assert from "node:assert/strict";
import test from "node:test";
import { catalogPlayers } from "./catalog.ts";
import { rankCatalogRegions } from "./catalogRanking.ts";
import { getScoutRegion } from "./scoutRegions.ts";

test("ranks all 47 regions from the complete domestic catalog", () => {
  const rows = rankCatalogRegions(catalogPlayers);

  assert.equal(rows.length, 47);
  assert.equal(rows.reduce((sum, row) => sum + row.recordCount, 0), 1253);
  assert.equal(rows.reduce((sum, row) => sum + row.playerCount, 0), 1178);
  assert.equal(rows[0]?.rank, 1);
  assert.equal(rows[0]?.region, "大阪");
});

test("keeps variants in both regions when their opening regions differ", () => {
  const rows = rankCatalogRegions([
    ["地域違い", 1980, "長野", "二壘手", 300, false],
    ["地域違い（DLC）", 1980, "東京", "二壘手", 330, true],
  ]);

  assert.equal(rows.find((row) => row.region === "長野")?.playerCount, 1);
  assert.equal(rows.find((row) => row.region === "東京")?.playerCount, 1);
});

test("counts DLC variants separately from unique player names", () => {
  const rows = rankCatalogRegions([
    ["測試選手", 1980, "東京", "投手", 300, false],
    ["測試選手（DLC）", 1980, "東京", "投手", 320, true],
    ["另一選手", 1990, "大阪", "捕手", 250, false],
  ]);

  assert.deepEqual(rows[0], {
    rank: 1,
    region: "東京",
    playerCount: 1,
    recordCount: 2,
    dlcCount: 1,
  });
});

test("can rank the complete catalog by Scout region", () => {
  const rows = rankCatalogRegions(catalogPlayers, ([name]) => getScoutRegion(name));

  assert.equal(rows.length, 47);
  assert.equal(rows.reduce((sum, row) => sum + row.recordCount, 0), 1241);
  assert.equal(rows.find((row) => row.region === "兵庫")?.recordCount > 0, true);
});
