import { createMemo, createSignal } from "solid-js";
import { BUDGET, HAPPINESS, POPULATION, TAX } from "./config";

// Core Stats (UK Real Data)
export const [population, setPopulation] = createSignal(POPULATION.initial);
export const [budget, setBudget] = createSignal(BUDGET.initial);
export const [happiness, setHappiness] = createSignal(HAPPINESS.initial);
export const [taxRate, setTaxRate] = createSignal(TAX.initialRate);

// Derived Stats
export const taxRevenue = createMemo(() => {
  const monthlyIncome = BUDGET.averageAnnualIncome / 12; // Average monthly income per person
  return Math.floor(population() * (taxRate() / 100) * monthlyIncome);
});
