import {
  adjustedAggregateDemand,
  gdp,
  priceLevel,
  setGiniCoefficient,
  setPriceLevel,
} from "../state/economyState";
import {
  employedPopulation,
  population,
  selfEmployedPopulation,
  unemployedPopulation,
} from "../state/populationState";

export function calculateIncomeInequality() {
  // Example weights for income groups (low, middle, high)
  const lowIncomeWeight = 0.2; // Higher weight for low-income group (disproportionate impact)
  const middleIncomeWeight = 0.5; // Moderate weight for middle-income group
  const highIncomeWeight = 0.3; // Lower weight for high-income group

  // Population groups
  const lowIncome =
    employedPopulation() * 0.6 + // 60% of employed
    selfEmployedPopulation() * 0.5 + // 50% of self-employed
    unemployedPopulation() * 0.7; // 70% of unemployed

  const middleIncome =
    employedPopulation() * 0.3 + // 30% of employed
    selfEmployedPopulation() * 0.4 + // 40% of self-employed
    unemployedPopulation() * 0.25; // 25% of unemployed

  const highIncome =
    employedPopulation() * 0.1 + // 10% of employed
    selfEmployedPopulation() * 0.1 + // 10% of self-employed
    unemployedPopulation() * 0.05; // 5% of unemployed

  // Calculate inequality based on weighted income shares
  const totalPopulation = population().total;
  const weightedIncomeShare =
    (lowIncome / totalPopulation) * lowIncomeWeight +
    (middleIncome / totalPopulation) * middleIncomeWeight +
    (highIncome / totalPopulation) * highIncomeWeight;

  // Simulate Gini coefficient: Higher weightedIncomeShare -> Lower Gini coefficient
  const gini = 1 - weightedIncomeShare;

  setGiniCoefficient(gini);
  console.log(`Gini Coefficient: ${gini.toFixed(2)}`);
}

export function calculatePriceLevel() {
  const demand = adjustedAggregateDemand();
  const supply = gdp();
  const deviation = (demand - supply) / supply;

  // Update price level with dampening factor
  const adjustmentRate = 0.5; // Prevent rapid fluctuations
  const newPriceLevel = priceLevel() + deviation * adjustmentRate;

  setPriceLevel(Math.max(0.8, Math.min(newPriceLevel, 2.0))); // Clamp between 0.8 and 2.0
  console.log(`Price Level Updated: ${newPriceLevel.toFixed(2)}`);
}
