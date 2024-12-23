import { createSignal } from "solid-js";
import { BUDGET, HAPPINESS, POPULATION, TAX } from "../config";
import { Law, LAWS } from "../data/laws";
import { Event } from "../types/event.type";

// Core Stats (UK Real Data)
export const [population, setPopulation] = createSignal(POPULATION.initial);
export const [budget, setBudget] = createSignal(BUDGET.initial);
export const [happiness, setHappiness] = createSignal(HAPPINESS.initial);
export const [taxRate, setTaxRate] = createSignal(TAX.initialRate);

// Signal to track the currently active event
export const [activeEvent, setActiveEvent] = createSignal<Event | null>(null);

// Laws
export const [activeLaws, setActiveLaws] = createSignal<Law[]>([
  LAWS.find((law) => law.id === "tax_rate")!,
]);
