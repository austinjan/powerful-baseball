import { birthRegions, type Position, type Recommendation, type ReincarnatedPlayer } from "./data.ts";

export type PlayerFilters = {
  query: string;
  region: string;
  position: "全部" | Position;
  recommendation: "全部" | Recommendation;
};

export function filterPlayers(items: ReincarnatedPlayer[], filters: PlayerFilters) {
  const needle = filters.query.trim().toLocaleLowerCase("ja");

  return items.filter((player) => {
    const searchable = `${player.name} ${birthRegions[player.name]} ${player.startRegion} ${player.scoutRegion} ${player.year} ${player.positions.join(" ")} ${player.reason}`.toLocaleLowerCase("ja");
    return (
      (!needle || searchable.includes(needle)) &&
      (filters.region === "全部" || player.scoutRegion === filters.region) &&
      (filters.position === "全部" || player.positions.includes(filters.position)) &&
      (filters.recommendation === "全部" || player.recommendation === filters.recommendation)
    );
  });
}
