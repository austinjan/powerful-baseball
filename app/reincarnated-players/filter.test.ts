import assert from "node:assert/strict";
import test from "node:test";
import { birthRegions, players } from "./data.ts";
import { filterPlayers } from "./filter.ts";

test("filters by name or region text", () => {
  const result = filterPlayers(players, { query: "岩手", region: "全部", position: "全部", recommendation: "全部" });
  assert.deepEqual(result.map((player) => player.name), ["大谷翔平"]);
});

test("combines region, position, and recommendation filters", () => {
  const result = filterPlayers(players, { query: "", region: "兵庫", position: "捕手", recommendation: "S" });
  assert.deepEqual(result.map((player) => player.name), ["古田敦也"]);
});

test("region filter uses scout location rather than start location", () => {
  const tokyo = filterPlayers(players, { query: "松坂", region: "東京", position: "全部", recommendation: "全部" });
  const kanagawa = filterPlayers(players, { query: "松坂", region: "神奈川", position: "全部", recommendation: "全部" });
  assert.equal(tokyo.length, 1);
  assert.equal(kanagawa.length, 0);
});

test("search includes birthplace while scout filter remains game-specific", () => {
  const byBirthplace = filterPlayers(players, { query: "福島", region: "全部", position: "全部", recommendation: "全部" });
  const byScoutLocation = filterPlayers(players, { query: "江川", region: "栃木", position: "全部", recommendation: "全部" });
  assert.deepEqual(byBirthplace.map((player) => player.name), ["江川卓"]);
  assert.deepEqual(byScoutLocation.map((player) => player.name), ["江川卓"]);
});

test("every displayed player has an explicit birthplace", () => {
  assert.equal(players.every((player) => Boolean(birthRegions[player.name])), true);
});

test("a two-way player appears in both applicable position categories", () => {
  const pitchers = filterPlayers(players, { query: "大谷", region: "全部", position: "投手", recommendation: "全部" });
  const outfielders = filterPlayers(players, { query: "大谷", region: "全部", position: "外野手", recommendation: "全部" });
  assert.equal(pitchers.length, 1);
  assert.equal(outfielders.length, 1);
});
