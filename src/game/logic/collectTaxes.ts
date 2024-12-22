import { setBudget, taxRevenue } from "../state/gameState";

export function collectTaxes() {
  const revenue = taxRevenue(); // Calculate tax revenue
  setBudget((prevBudget) => prevBudget + revenue); // Add revenue to budget
  console.log(`Collected £${revenue.toLocaleString()} in taxes.`);
}
