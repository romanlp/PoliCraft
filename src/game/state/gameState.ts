import { createMemo, createSignal } from "solid-js";
import { BUDGET, GAME_SETTINGS, HAPPINESS, TAX } from "../config";
import { POLICIES } from "../data/policies";
import { Event } from "../types/event.types";
import { Policy } from "../types/policy.types";

export const [turn, setTurn] = createSignal(0);
export const currentDate = createMemo(() => {
  const initDate = new Date(GAME_SETTINGS.initialDate);
  return new Date(initDate.setMonth(initDate.getMonth() + turn()));
});
export const [enableEvent, setEnableEvent] = createSignal(false);

// Core Stats (UK Real Data)
export const [budget, setBudget] = createSignal(BUDGET.initial);
export const [happiness, setHappiness] = createSignal(HAPPINESS.initial);
export const [taxRate, setTaxRate] = createSignal(TAX.initialRate);

// Signal to track the currently active event
export const [activeEvent, setActiveEvent] = createSignal<Event | null>(null);

// Policies
export const [activePolicies, setActivePolicies] = createSignal<Policy[]>([
  POLICIES.find((policy) => policy.id === "income_tax")!,
]);

export const [turnFeedback, setTurnFeedback] = createSignal<{
  gdpChange: number; // Change in total GDP
  budgetChange: number; // Change in budget
  gdpBySector: { sector: string; value: number }[]; // GDP contribution by sector
  taxRevenue: number; // Total tax revenue
  populationChange: number; // Change in total population
  taxChange: number; // Change in tax revenue
} | null>(null);
