import { createMemo, createSignal } from "solid-js";
import { SECTORS } from "../data/economy/sectors";
import {
  employedPopulation,
  selfEmployedPopulation,
  workforce,
} from "./populationState";

export const [sector, setSector] = createSignal(SECTORS);

// GDP (Gross Domestic Product)
export const [productivityPerWorker, setProductivityPerWorker] =
  createSignal(50_000); // Annual productivity per worker (£)

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
