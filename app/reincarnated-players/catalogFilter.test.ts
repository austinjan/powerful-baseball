import assert from "node:assert/strict";
import test from "node:test";
import { catalogPlayers } from "./catalog.ts";
import { filterCatalog, getRecommendationLevel } from "./catalogFilter.ts";

const allFilters = {
  query: "",
  region: "全部",
  position: "全部" as const,
  dlc: "全部" as const,
  minStar: null,
  maxStar: null,
  recommendation: "全部" as const,
};

test("catalog snapshot includes every position and all 47 regions", () => {
  assert.equal(catalogPlayers.length, 1253);
  assert.equal(new Set(catalogPlayers.map((player) => player[2])).size, 47);
  assert.deepEqual(new Set(catalogPlayers.map((player) => player[3])), new Set(["投手", "捕手", "一壘手", "二壘手", "三壘手", "游擊手", "外野手"]));
});

test("filters the full catalog by name, region, position and DLC", () => {
  const result = filterCatalog(catalogPlayers, { ...allFilters, query: "落合", region: "秋田", position: "三壘手", dlc: "DLC" }, "star");
  assert.deepEqual(result.map((player) => player[0]), ["落合博満"]);
});

test("star sorting puts the highest rated records first", () => {
  const result = filterCatalog(catalogPlayers, allFilters, "star");
  assert.equal(result[0][0], "大谷翔平（DLC）");
  assert.equal(result[0][4], 446);
});

test("filters by an inclusive star range", () => {
  const result = filterCatalog(catalogPlayers, { ...allFilters, minStar: 300, maxStar: 320 }, "star");

  assert.ok(result.length > 0);
  assert.ok(result.every((player) => player[4] >= 300 && player[4] <= 320));
});

test("maps star boundaries to editorial recommendation levels", () => {
  assert.equal(getRecommendationLevel(350), "必拿");
  assert.equal(getRecommendationLevel(349), "強烈推薦");
  assert.equal(getRecommendationLevel(300), "強烈推薦");
  assert.equal(getRecommendationLevel(299), "推薦");
  assert.equal(getRecommendationLevel(250), "推薦");
  assert.equal(getRecommendationLevel(249), "一般");
});

test("filters by recommendation level", () => {
  const result = filterCatalog(catalogPlayers, { ...allFilters, recommendation: "必拿" }, "star");

  assert.ok(result.length > 0);
  assert.ok(result.every((player) => player[4] >= 350));
});
