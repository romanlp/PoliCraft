import { createMemo, createSignal } from "solid-js";
import { SECTORS } from "../data/economy/sectors";
import { totalSpending } from "./budgetState";
import {
  employedPopulation,
  selfEmployedPopulation,
  unemployedPopulation,
  workforce,
} from "./populationState";

export const [sector, setSector] = createSignal(SECTORS);

// GDP (Gross Domestic Product)
export const [productivityPerWorker, setProductivityPerWorker] =
  createSignal(50_000); // Annual productivity per worker (£)

// Signals for additional economic metrics
export const [businessInvestment, setBusinessInvestment] =
  createSignal(500_000_000); // Example: £500M
export const [priceLevel, setPriceLevel] = createSignal(1.0); // Base price level (1.0 = 100% baseline)

export const consumerSpending = createMemo(() => {
  const lowIncomeConsumptionRate = 0.9; // 90% for low-income
  const middleIncomeConsumptionRate = 0.7; // 70% for middle-income
  const highIncomeConsumptionRate = 0.5; // 50% for high-income

  const lowIncomeSpending =
    employedPopulation() * 0.6 * 15_000 * lowIncomeConsumptionRate +
    selfEmployedPopulation() * 0.5 * 15_000 * lowIncomeConsumptionRate +
    unemployedPopulation() * 0.7 * 10_000 * lowIncomeConsumptionRate;

  const middleIncomeSpending =
    employedPopulation() * 0.3 * 40_000 * middleIncomeConsumptionRate +
    selfEmployedPopulation() * 0.4 * 40_000 * middleIncomeConsumptionRate;

  const highIncomeSpending =
    employedPopulation() * 0.1 * 100_000 * highIncomeConsumptionRate +
    selfEmployedPopulation() * 0.1 * 100_000 * highIncomeConsumptionRate;

  return lowIncomeSpending + middleIncomeSpending + highIncomeSpending;
});

// Calculate Adjusted Aggregate Demand (AAD)
export const adjustedAggregateDemand = createMemo(
  () => consumerSpending() + totalSpending() + businessInvestment()
);

export const gdp = createMemo(() => {
  let totalGDP = 0;

  sector().forEach((sector) => {
    const sectorWorkforce =
      employedPopulation() * sector.workforce_percentage +
      selfEmployedPopulation() * sector.workforce_percentage;

    const sectorProductivity = sector.productivity;
    totalGDP += sectorWorkforce * sectorProductivity;
  });

  return totalGDP;
});

// Unemployment Rate
export const unemploymentRate = createMemo(() => {
  const totalWorkforce = workforce(); // Workforce = 65% of total population
  const unemployed =
    totalWorkforce - (employedPopulation() + selfEmployedPopulation());
  return unemployed / totalWorkforce;
});

// Tax Revenue
export const [incomeTaxRate, setIncomeTaxRate] = createSignal(0.3); // 30% income tax
export const taxRevenue = createMemo(
  () =>
    (employedPopulation() + selfEmployedPopulation()) *
    productivityPerWorker() *
    incomeTaxRate()
);

// Signals to track income inequality
export const [giniCoefficient, setGiniCoefficient] = createSignal(0.35); // Default Gini coefficient (moderate inequality)
