export type SearchableAbility = {
  zh: string;
  ja: string;
  effect: string;
  reason: string;
};

export function normalizeSearchText(value: string) {
  return value.normalize("NFKC").trim().toLowerCase();
}

export function abilityMatchesQuery(ability: SearchableAbility, query: string) {
  const needle = normalizeSearchText(query);
  if (!needle) return true;

  const bilingualText = normalizeSearchText(
    `${ability.ja} ${ability.zh} ${ability.effect} ${ability.reason}`,
  );

  return bilingualText.includes(needle);
}
