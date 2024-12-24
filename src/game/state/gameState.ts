import { createSignal } from "solid-js";
import { BUDGET, HAPPINESS, POPULATION, TAX } from "../config";
import { POLICIES } from "../data/policies";
import { Event } from "../types/event.types";
import { Policy } from "../types/policy.types";

// Core Stats (UK Real Data)
export const [population, setPopulation] = createSignal(POPULATION.initial);
export const [budget, setBudget] = createSignal(BUDGET.initial);
export const [happiness, setHappiness] = createSignal(HAPPINESS.initial);
export const [taxRate, setTaxRate] = createSignal(TAX.initialRate);

// Signal to track the currently active event
export const [activeEvent, setActiveEvent] = createSignal<Event | null>(null);

// Policies
export const [activePolicies, setActivePolicies] = createSignal<Policy[]>([
  POLICIES.find((policy) => policy.id === "income_tax")!,
]);

export const [feedbackVisible, setFeedbackVisible] =
  createSignal<boolean>(false);
export const [turnFeedback, setTurnFeedback] = createSignal<{
  budgetChange: number;
  happinessChange: number;
  populationChange: number;
}>({
  budgetChange: 0,
  happinessChange: 0,
  populationChange: 0,
});
