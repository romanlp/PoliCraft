import { HAPPINESS } from "../config";
import {
  activePolicies,
  budget,
  happiness,
  setActiveEvent,
  setBudget,
  setFeedbackVisible,
  setHappiness,
  setTurnFeedback,
  turnFeedback,
} from "../state/gameState";
import { totalPopulation } from "../state/populationState";
import { collectTaxes } from "./collectTaxes";
import { calculateIncomeInequality } from "./economy";
import { triggerRandomEvent } from "./eventLogic";
import { growPopulation } from "./growPopulation";

export function advanceTurn() {
  console.log("Advancing turn...");

  // Record starting values
  const startBudget = budget();
  const startHappiness = happiness();
  const startPopulation = totalPopulation();

  // Recalculate income inequality
  calculateIncomeInequality();

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

  let totalSpending = 0;
  let totalEarning = 0;

  activePolicies().forEach((policy) => {
    // Apply earning
    if (policy.earning) {
      const baseEarning = policy.earning.base_amount || 0;
      const scaledEarning = policy.earning.scaling_factor
        ? calculateScaledEffect(policy.earning.scaling_factor)
        : 0;

      totalEarning += baseEarning + scaledEarning;
    }

    // Apply spending
    if (policy.spending) {
      const baseSpending = policy.spending.base_amount || 0;
      const scaledSpending = policy.spending.scaling_factor
        ? calculateScaledEffect(policy.spending.scaling_factor)
        : 0;

      totalSpending += baseSpending + scaledSpending;
    }
    if (policy?.per_turn_effects?.happiness) {
      setHappiness((prev) =>
        Math.max(0, Math.min(100, prev + policy.per_turn_effects!.happiness!))
      );
    }
    if (policy.spending?.base_amount) {
      setBudget((prev) => prev + policy.spending?.base_amount!);
    }
  });

  // Update the budget
  const netChange = totalEarning - totalSpending;
  setBudget((prev) => prev + netChange);

  // Record feedback changes
  const budgetChange = budget() - startBudget;
  const happinessChange = happiness() - startHappiness;
  const populationChange = totalPopulation() - startPopulation;

  setFeedbackVisible(true);
  setTurnFeedback({
    budgetChange,
    happinessChange,
    populationChange,
  });

  console.log("Turn feedback set:", turnFeedback);
}

// Helper function for scaling effects
function calculateScaledEffect(scalingFactor: {
  type: "population" | "event_driven" | "gdp";
  multiplier: number;
}) {
  const scalingValue =
    scalingFactor.type === "population" ? totalPopulation() : 1; // Replace with event-driven logic if applicable
  return scalingValue * scalingFactor.multiplier;
}
