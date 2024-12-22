import { setBudget, taxRevenue } from "../state/gameState";

export function collectTaxes() {
  const revenue = taxRevenue(); // Get the current tax revenue
  setBudget((prevBudget) => prevBudget + revenue); // Add it to the budget
  console.log(`Collected £${revenue.toLocaleString()} in taxes.`);
}
