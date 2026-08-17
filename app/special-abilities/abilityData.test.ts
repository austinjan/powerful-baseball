import assert from "node:assert/strict";
import test from "node:test";
import coreAbilities from "./abilities.json" with { type: "json" };
import additionalAbilities from "./additionalAbilities.ts";

const gradeAbilities = new Set([
  "打たれ強さ", "回復", "クイック", "対左打者", "対ピンチ", "ノビ",
  "キャッチャー", "ケガしにくさ", "送球", "走塁", "対左投手", "チャンス", "盗塁",
]);

const allAbilities = [
  ...coreAbilities.map((ability) =>
    gradeAbilities.has(ability.ja) ? { ...ability, kind: "grade" } : ability,
  ),
  ...additionalAbilities,
];

test("includes every documented individual ability category", () => {
  assert.equal(allAbilities.length, 248);
  assert.deepEqual(
    Object.fromEntries(
      ["gold", "blue", "red", "mixed", "grade", "green"].map((kind) => [
        kind,
        allAbilities.filter((ability) => ability.kind === kind).length,
      ]),
    ),
    { gold: 75, blue: 103, red: 21, mixed: 8, grade: 13, green: 28 },
  );
});

test("keeps names unique and every record source-backed", () => {
  const names = allAbilities.map((ability) => ability.ja);
  assert.equal(new Set(names).size, names.length);

  for (const ability of allAbilities) {
    assert.ok(ability.ja.length > 0);
    assert.ok(ability.zh.length > 0);
    assert.ok(ability.sources.length > 0);
    assert.ok(ability.sources.every((source) => source.startsWith("https://")));
  }
});

test("marks title-bound abilities separately from ordinary abilities", () => {
  assert.equal(allAbilities.filter((ability) => "exclusive" in ability && ability.exclusive).length, 34);
  assert.equal(
    allAbilities.find((ability) => ability.ja === "世界の王")?.exclusive,
    true,
  );
  assert.equal("exclusive" in (allAbilities.find((ability) => ability.ja === "一発") ?? {}), false);
});
