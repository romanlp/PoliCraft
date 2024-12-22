import { HAPPINESS } from "../state/config";
import {
  budget,
  happiness,
  population,
  setHappiness,
} from "../state/gameState";
import { collectTaxes } from "./collectTaxes";
import { growPopulation } from "./growPopulation";

export function advanceTurn() {
  console.log("Advancing turn...");

  // Collect taxes
  collectTaxes();

  // Grow population
  growPopulation();

  // Adjust happiness (example: slight decay per turn)
  setHappiness((prevHappiness) =>
    Math.max(0, prevHappiness - HAPPINESS.decayPerTurn)
  );

  // Debugging: Log the updated game state
  console.log(`New Budget: £${budget().toLocaleString()}`);
  console.log(`New Population: ${population().toLocaleString()}`);
  console.log(`New Happiness: ${happiness()}/100`);
}
