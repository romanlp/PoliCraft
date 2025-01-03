import { createMemo, createSignal } from "solid-js";
import { SECTORS } from "../data/economy/sectors";
import { policySpending } from "./policyState";
import {
  employedPopulation,
  retireesPopulation,
  selfEmployedPopulation,
  stayAtHomeAdults,
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
  const lowConsumptionRate = 0.95; // 90% for low-income
  const midConsumptionRate = 0.8; // 70% for middle-income
  const highConsumptionRate = 0.6; // 50% for high-income

  const lowIncomeSpending =
    employedPopulation().income_levels.low * 22_000 * lowConsumptionRate +
    selfEmployedPopulation().income_levels.low * 30_000 * lowConsumptionRate +
    unemployedPopulation().income_levels.low * 10_000 * lowConsumptionRate;

  const middleIncomeSpending =
    employedPopulation().income_levels.middle * 55_000 * midConsumptionRate +
    selfEmployedPopulation().income_levels.middle *
      60_000 *
      midConsumptionRate +
    unemployedPopulation().income_levels.middle * 20_000 * midConsumptionRate;

  const highIncomeSpending =
    employedPopulation().income_levels.high * 125_000 * highConsumptionRate +
    selfEmployedPopulation().income_levels.high *
      140_000 *
      highConsumptionRate +
    unemployedPopulation().income_levels.high * 80_000 * highConsumptionRate;

  const retiredSpending = retireesPopulation() * 20_000 * lowConsumptionRate;

  const stayAtHomeSpending = stayAtHomeAdults() * 18_000 * lowConsumptionRate;

  return (
    lowIncomeSpending +
    middleIncomeSpending +
    highIncomeSpending +
    retiredSpending +
    stayAtHomeSpending
  );
});

// Calculate Adjusted Aggregate Demand (AAD)
export const adjustedAggregateDemand = createMemo(
  () => consumerSpending() + policySpending() + businessInvestment()
);

export const gdp = createMemo(() => {
  let totalGDP = 0;

  sector().forEach((sector) => {
    const sectorWorkforce =
      employedPopulation().total * sector.workforce_percentage +
      selfEmployedPopulation().total * sector.workforce_percentage;

    const sectorProductivity = sector.productivity;
    totalGDP += sectorWorkforce * sectorProductivity;
  });

  return totalGDP;
});

// Unemployment Rate
export const unemploymentRate = createMemo(() => {
  const totalWorkforce = workforce(); // Workforce = 65% of total population
  const unemployed =
    totalWorkforce -
    (employedPopulation().total + selfEmployedPopulation().total);
  return unemployed / totalWorkforce;
});

// Tax Revenue
export const [incomeTaxRate, setIncomeTaxRate] = createSignal(0.3); // 30% income tax
export const taxRevenue = createMemo(
  () =>
    (employedPopulation().total + selfEmployedPopulation().total) *
    productivityPerWorker() *
    incomeTaxRate()
);

// Signals to track income inequality
export const [giniCoefficient, setGiniCoefficient] = createSignal(0.35); // Default Gini coefficient (moderate inequality)
