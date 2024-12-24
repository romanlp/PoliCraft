import { HAPPINESS } from "../config";
import {
  activePolicies,
  budget,
  happiness,
  population,
  setActiveEvent,
  setBudget,
  setFeedbackVisible,
  setHappiness,
  setTurnFeedback,
  turnFeedback,
} from "../state/gameState";
import { collectTaxes } from "./collectTaxes";
import { triggerRandomEvent } from "./eventLogic";
import { growPopulation } from "./growPopulation";

export function advanceTurn() {
  console.log("Advancing turn...");

  // Record starting values
  const startBudget = budget();
  const startHappiness = happiness();
  const startPopulation = population();

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
  activePolicies().forEach((law) => {
    if (law?.per_turn_effects?.happiness) {
      setHappiness((prev) =>
        Math.max(0, Math.min(100, prev + law.per_turn_effects!.happiness!))
      );
    }
    if (law.spending?.base_amount) {
      setBudget((prev) => prev + law.spending?.base_amount!);
    }
  });

  // Record feedback changes
  const budgetChange = budget() - startBudget;
  const happinessChange = happiness() - startHappiness;
  const populationChange = population() - startPopulation;

  setFeedbackVisible(true);
  setTurnFeedback({
    budgetChange,
    happinessChange,
    populationChange,
  });

  console.log("Turn feedback set:", turnFeedback);
}
