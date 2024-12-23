import { createSignal } from "solid-js";
import { BUDGET, HAPPINESS, POPULATION, TAX } from "../config";
import { Law, LAWS } from "../data/laws";

// Core Stats (UK Real Data)
export const [population, setPopulation] = createSignal(POPULATION.initial);
export const [budget, setBudget] = createSignal(BUDGET.initial);
export const [happiness, setHappiness] = createSignal(HAPPINESS.initial);
export const [taxRate, setTaxRate] = createSignal(TAX.initialRate);

// Laws
export const [activeLaws, setActiveLaws] = createSignal<Law[]>([
  LAWS.find((law) => law.id === "tax_rate")!,
]);
