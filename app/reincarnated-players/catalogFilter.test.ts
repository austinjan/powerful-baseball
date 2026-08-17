import assert from "node:assert/strict";
import test from "node:test";
import { catalogPlayers } from "./catalog.ts";
import { filterCatalog } from "./catalogFilter.ts";

test("catalog snapshot includes every position and all 47 regions", () => {
  assert.equal(catalogPlayers.length, 1253);
  assert.equal(new Set(catalogPlayers.map((player) => player[2])).size, 47);
  assert.deepEqual(new Set(catalogPlayers.map((player) => player[3])), new Set(["投手", "捕手", "一壘手", "二壘手", "三壘手", "游擊手", "外野手"]));
});

test("filters the full catalog by name, region, position and DLC", () => {
  const result = filterCatalog(catalogPlayers, { query: "落合", region: "秋田", position: "三壘手", dlc: "DLC" }, "star");
  assert.deepEqual(result.map((player) => player[0]), ["落合博満"]);
});

test("star sorting puts the highest rated records first", () => {
  const result = filterCatalog(catalogPlayers, { query: "", region: "全部", position: "全部", dlc: "全部" }, "star");
  assert.equal(result[0][0], "大谷翔平（DLC）");
  assert.equal(result[0][4], 446);
});
