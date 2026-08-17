import assert from "node:assert/strict";
import test from "node:test";
import { abilityMatchesQuery, normalizeSearchText } from "./abilityFilter.ts";

const ability = {
  ja: "強心臓",
  zh: "強心臟",
  effect: "得點圈有人時變強。",
  reason: "危機時很可靠。",
};

test("matches both Japanese and Chinese ability names", () => {
  assert.equal(abilityMatchesQuery(ability, "強心臓"), true);
  assert.equal(abilityMatchesQuery(ability, "強心臟"), true);
});

test("normalizes whitespace and compatibility-width characters", () => {
  assert.equal(normalizeSearchText("  Ｄｏｃｔｏｒ K  "), "doctor k");
});

test("rejects unrelated search terms", () => {
  assert.equal(abilityMatchesQuery(ability, "安打製造機"), false);
});
