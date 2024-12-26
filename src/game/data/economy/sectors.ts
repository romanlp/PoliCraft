import { Sector } from "../../types/economy.types";

export const SECTORS: Sector[] = [
  {
    name: "agriculture",
    workforce_percentage: 0.1, // 10% of workforce
    productivity: 70_000, // £40,000 per worker
  },
  {
    name: "industry",
    workforce_percentage: 0.3, // 30% of workforce
    productivity: 98_000, // £60,000 per worker
  },
  {
    name: "services",
    workforce_percentage: 0.6, // 60% of workforce
    productivity: 120_000, // £50,000 per worker
  },
];
