import { activePolicies, setBudget, taxRate } from "../state/gameState";
import { totalPopulation } from "../state/populationState";

export function collectTaxes() {
  // Collect taxes
  const monthlyIncome = 20_000 / 12; // Average monthly income per person
  const revenue = Math.floor(
    activePolicies().some((law) => law.id === "tax_rate")
      ? totalPopulation() * (taxRate() / 100) * monthlyIncome
      : 0 // No revenue if tax rate law is inactive
  );
  setBudget((prev) => prev + revenue);
  console.log(`Collected £${revenue.toLocaleString()} in taxes.`);
}
