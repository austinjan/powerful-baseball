import assert from "node:assert/strict";
import test from "node:test";
import { foreignCatalog } from "./foreignCatalog.ts";
import { worldPlayerCount, worldRoster } from "./worldRoster.ts";

test("official world roster snapshot has 20 teams and 469 real players", () => {
  assert.equal(worldRoster.length, 20);
  assert.equal(worldPlayerCount, 469);
  assert.equal(worldRoster.every((team) => team.names.length > 0), true);
});

test("foreign OB and reincarnated student catalog keeps its separate 304 records", () => {
  assert.equal(foreignCatalog.length, 304);
  assert.equal(foreignCatalog.some((player) => player[0] === "ジャッジ" && player[2] === "アメリカ"), true);
});
