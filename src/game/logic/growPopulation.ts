import { POPULATION } from "../state/config";
import { population, setPopulation } from "../state/gameState";

export function growPopulation() {
  const growthRate = POPULATION.monthlyGrowthRate; // Monthly growth rate from config
  setPopulation((prevPopulation) =>
    Math.floor(prevPopulation * (1 + growthRate))
  );
  console.log(`Population grew to ${population().toLocaleString()}.`);
}
