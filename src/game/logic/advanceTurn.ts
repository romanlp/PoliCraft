import { HAPPINESS } from "../config";
import {
  activeLaws,
  budget,
  happiness,
  population,
  setActiveEvent,
  setBudget,
  setHappiness,
} from "../state/gameState";
import { collectTaxes } from "./collectTaxes";
import { triggerRandomEvent } from "./eventLogic";
import { growPopulation } from "./growPopulation";

export function advanceTurn() {
  console.log("Advancing turn...");

  // Trigger a random event
  const event = triggerRandomEvent();

  if (event) {
    setActiveEvent(event);
    console.log(`Event Occurred: ${event.name}`);
  }

  // Collect taxes
  collectTaxes();

  // Grow population
  growPopulation();

  // Adjust happiness (example: slight decay per turn)
  setHappiness((prevHappiness) =>
    Math.max(0, prevHappiness - HAPPINESS.decayPerTurn)
  );

  // Apply per-turn effects from active laws
  activeLaws().forEach((law) => {
    if (law?.perTurnEffects?.happiness) {
      setHappiness((prev) =>
        Math.max(0, Math.min(100, prev + law.perTurnEffects!.happiness!))
      );
    }
    if (law.perTurnEffects?.budget) {
      setBudget((prev) => prev + law.perTurnEffects!.budget!);
    }
  });

  // Debugging: Log the updated game state
  console.log(`New Budget: £${budget().toLocaleString()}`);
  console.log(`New Population: ${population().toLocaleString()}`);
  console.log(`New Happiness: ${happiness()}/100`);
}
