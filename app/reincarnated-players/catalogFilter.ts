import type { CatalogPlayer, CatalogPosition } from "./catalog.ts";

export type RecommendationLevel = "必拿" | "強烈推薦" | "推薦" | "一般";

export type CatalogFilters = {
  query: string;
  region: string;
  position: "全部" | CatalogPosition;
  dlc: "全部" | "一般" | "DLC";
  minStar: number | null;
  maxStar: number | null;
  recommendation: "全部" | RecommendationLevel;
};

export type CatalogSort = "star" | "year" | "name";

export function getRecommendationLevel(star: number): RecommendationLevel {
  if (star >= 350) return "必拿";
  if (star >= 300) return "強烈推薦";
  if (star >= 250) return "推薦";
  return "一般";
}

export function filterCatalog(items: readonly CatalogPlayer[], filters: CatalogFilters, sort: CatalogSort) {
  const needle = filters.query.trim().toLocaleLowerCase("ja");

  return items
    .filter(([name, year, region, position, star, dlc]) => {
      const searchable = `${name} ${year} ${region} ${position}`.toLocaleLowerCase("ja");
      return (
        (!needle || searchable.includes(needle)) &&
        (filters.region === "全部" || region === filters.region) &&
        (filters.position === "全部" || position === filters.position) &&
        (filters.dlc === "全部" || (filters.dlc === "DLC" ? dlc : !dlc)) &&
        (filters.minStar === null || star >= filters.minStar) &&
        (filters.maxStar === null || star <= filters.maxStar) &&
        (filters.recommendation === "全部" || getRecommendationLevel(star) === filters.recommendation)
      );
    })
    .sort((a, b) => {
      if (sort === "star") return b[4] - a[4] || a[0].localeCompare(b[0], "ja");
      if (sort === "year") return a[1] - b[1] || b[4] - a[4] || a[0].localeCompare(b[0], "ja");
      return a[0].localeCompare(b[0], "ja");
    });
}
