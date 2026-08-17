import type { ReincarnatedPlayer } from "./data.ts";

export type RegionRanking = {
  rank: number;
  region: string;
  scoutCount: number;
  startCount: number;
  scoutPlayers: string[];
};

export function rankRegions(items: ReincarnatedPlayer[]): RegionRanking[] {
  const regions = new Map<string, Omit<RegionRanking, "rank" | "region">>();

  function getRegion(region: string) {
    const current = regions.get(region) ?? { scoutCount: 0, startCount: 0, scoutPlayers: [] };
    regions.set(region, current);
    return current;
  }

  for (const player of items) {
    const scoutRegion = getRegion(player.scoutRegion);
    scoutRegion.scoutCount += 1;
    scoutRegion.scoutPlayers.push(player.name);
    getRegion(player.startRegion).startCount += 1;
  }

  return [...regions.entries()]
    .sort(([regionA, a], [regionB, b]) =>
      b.scoutCount - a.scoutCount ||
      b.startCount - a.startCount ||
      regionA.localeCompare(regionB, "ja"),
    )
    .map(([region, counts], index) => ({ rank: index + 1, region, ...counts }));
}
