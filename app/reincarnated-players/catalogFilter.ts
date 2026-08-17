import type { CatalogPlayer, CatalogPosition } from "./catalog.ts";

export type CatalogFilters = {
  query: string;
  region: string;
  position: "全部" | CatalogPosition;
  dlc: "全部" | "一般" | "DLC";
};

export type CatalogSort = "star" | "year" | "name";

export function filterCatalog(items: readonly CatalogPlayer[], filters: CatalogFilters, sort: CatalogSort) {
  const needle = filters.query.trim().toLocaleLowerCase("ja");

  return items
    .filter(([name, year, region, position, , dlc]) => {
      const searchable = `${name} ${year} ${region} ${position}`.toLocaleLowerCase("ja");
      return (
        (!needle || searchable.includes(needle)) &&
        (filters.region === "全部" || region === filters.region) &&
        (filters.position === "全部" || position === filters.position) &&
        (filters.dlc === "全部" || (filters.dlc === "DLC" ? dlc : !dlc))
      );
    })
    .sort((a, b) => {
      if (sort === "star") return b[4] - a[4] || a[0].localeCompare(b[0], "ja");
      if (sort === "year") return a[1] - b[1] || b[4] - a[4] || a[0].localeCompare(b[0], "ja");
      return a[0].localeCompare(b[0], "ja");
    });
}
