import type { CatalogPlayer } from "./catalog.ts";

export type CatalogRegionRanking = {
  rank: number;
  region: string;
  playerCount: number;
  recordCount: number;
  dlcCount: number;
};

function canonicalPlayerName(name: string) {
  return name.replace(/（DLC）$/, "");
}

export function rankCatalogRegions(items: readonly CatalogPlayer[]): CatalogRegionRanking[] {
  const regions = new Map<string, { names: Set<string>; recordCount: number; dlcCount: number }>();

  for (const [name, , region, , , dlc] of items) {
    const current = regions.get(region) ?? { names: new Set<string>(), recordCount: 0, dlcCount: 0 };
    current.names.add(canonicalPlayerName(name));
    current.recordCount += 1;
    current.dlcCount += Number(dlc);
    regions.set(region, current);
  }

  return [...regions.entries()]
    .map(([region, summary]) => ({
      region,
      playerCount: summary.names.size,
      recordCount: summary.recordCount,
      dlcCount: summary.dlcCount,
    }))
    .sort((a, b) =>
      b.playerCount - a.playerCount ||
      b.recordCount - a.recordCount ||
      a.region.localeCompare(b.region, "ja")
    )
    .map((row, index) => ({ rank: index + 1, ...row }));
}
