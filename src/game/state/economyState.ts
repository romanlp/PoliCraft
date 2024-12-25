import { createMemo, createSignal } from "solid-js";
import {
  employedPopulation,
  selfEmployedPopulation,
  workforce,
} from "./populationState";

// GDP (Gross Domestic Product)
export const [productivityPerWorker, setProductivityPerWorker] =
  createSignal(50_000); // Annual productivity per worker (£)
export const gdp = createMemo(
  () =>
    (employedPopulation() + selfEmployedPopulation()) * productivityPerWorker()
);

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
