import assert from "node:assert/strict";
import test from "node:test";
import { players } from "./data.ts";
import { rankRegions } from "./ranking.ts";

test("ranks regions by scout count and preserves separate start counts", () => {
  const rows = rankRegions(players);

  assert.deepEqual(rows.slice(0, 2).map(({ region, scoutCount, startCount }) => ({ region, scoutCount, startCount })), [
    { region: "兵庫", scoutCount: 4, startCount: 2 },
    { region: "東京", scoutCount: 3, startCount: 3 },
  ]);
  assert.deepEqual(rows.find((row) => row.region === "廣島"), {
    rank: 15,
    region: "廣島",
    scoutCount: 1,
    startCount: 0,
    scoutPlayers: ["谷繁元信"],
  });
  assert.deepEqual(rows.find((row) => row.region === "島根"), {
    rank: 17,
    region: "島根",
    scoutCount: 0,
    startCount: 1,
    scoutPlayers: [],
  });
});
