import { HAPPINESS } from "../config";
import { gdp } from "../state/economyState";
import {
  budget,
  setBudget,
  setHappiness,
  setTurn,
  setTurnFeedback,
  turnFeedback,
} from "../state/gameState";
import { activePolicies } from "../state/policyState";
import { totalPopulation } from "../state/populationState";
import { collectTaxes } from "./collectTaxes";
import { calculateIncomeInequality, calculatePriceLevel } from "./economy";
import { handleEvent } from "./eventLogic";
import { growPopulation } from "./growPopulation";

export function advanceTurn() {
  console.log("Advancing turn...");

  // Record starting values
  const startBudget = budget();
  const startPopulation = totalPopulation();
  const startGdp = gdp();

  // Recalculate income inequality
  calculateIncomeInequality();
  calculatePriceLevel();

  // Trigger a random event
  handleEvent();

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
  const gdpChange = gdp() - startGdp;
  const populationChange = totalPopulation() - startPopulation;

  setTurnFeedback({
    gdpChange,
    budgetChange,
    gdpBySector: [],
    taxRevenue: 0,
    taxChange: 0,
    populationChange,
  });
  setTurn((prev) => prev + 1);
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
