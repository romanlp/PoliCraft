import { createMemo, createSignal } from "solid-js";

// Core Stats (UK Real Data)
export const [population, setPopulation] = createSignal(67_000_000); // UK population ~67 million
export const [budget, setBudget] = createSignal(1_300_000_000_000); // UK annual revenue ~£1.3 trillion
export const [happiness, setHappiness] = createSignal(50); // Neutral happiness (0-100)
export const [taxRate, setTaxRate] = createSignal(33); // Tax rate ~33%

// Derived Stats
export const taxRevenue = createMemo(() => {
  // Revenue = population * (tax rate %) * £20,000 (average taxable income per person)
  const averageTaxableIncome = 20_000; // £20,000 per person (simplified)
  return Math.floor(population() * (taxRate() / 100) * averageTaxableIncome);
});
