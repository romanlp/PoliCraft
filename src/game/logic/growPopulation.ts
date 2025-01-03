import { population, setPopulation } from "../state/populationState";

export function growPopulation() {
  const growthRate = population().monthlyGrowthRate; // Use monthly growth rate from config
  setPopulation((prev) => ({
    ...prev,
    total: Math.floor(prev.total * (1 + growthRate)),
  }));
  console.log(`Population grew to ${population().total.toLocaleString()}.`);
}
