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
import { totalPopulation } from "../state/populationState";
import { collectTaxes } from "./collectTaxes";
import { calculateIncomeInequality, calculatePriceLevel } from "./economy";
import { handleEvent } from "./eventLogic";
import { growPopulation } from "./growPopulation";
import { handlePolicies } from "./policyLogic";

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

  // Handle all active policies
  handlePolicies();

  // Adjust happiness (example: slight decay per turn)
  setHappiness((prevHappiness) =>
    Math.max(0, prevHappiness - HAPPINESS.decayPerTurn)
  );

  let totalSpending = 0;
  let totalEarning = 0;

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
