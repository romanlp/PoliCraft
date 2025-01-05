import { createMemo, createSignal } from "solid-js";
import { POLICIES } from "../data/policies";
import { Effect, Policy } from "../types/policy.types";
// import { gdp } from "./economyState";
import { population } from "./populationState";

// Policies
export const [activePolicies, setActivePolicies] = createSignal<Policy[]>([
  POLICIES.find((policy) => policy.id === "income_tax")!,
]);

const [policyValues, setPolicyValues] = createSignal<Record<string, number>>({
  income_tax: 15,
  vat_tax: 20,
});

export const getPolicyValue = (policyId: string) => policyValues()[policyId];
export const setPolicyValue = (policyId: string, value: number) =>
  setPolicyValues((prev) => ({ ...prev, [policyId]: value }));

// Filter policies with spending or earning
export const budgetPolicies = createMemo(() =>
  activePolicies().filter((policy) => policy.spending || policy.earning)
);

/**
 * Calculate total tax revenue from active policies.
 */
export const policyEarning = createMemo(() =>
  activePolicies()
    .flatMap((policy) => policy.effects ?? []) // Flatten all effects
    .filter((effect) => effect.target === "revenue") // Filter for tax revenue effects
    .reduce((total, effect) => total + applyEffectForCalculation(effect), 0)
);

/**
 * Calculate total spending from active policies.
 */
export const policySpending = createMemo(() =>
  activePolicies()
    .flatMap((policy) => policy.effects ?? []) // Flatten all effects
    .filter((effect) => effect.target === "spending") // Filter for spending effects
    .reduce((total, effect) => total + applyEffectForCalculation(effect), 0)
);

/**
 * Helper function to calculate effect values for tax revenue or spending.
 */
function applyEffectForCalculation(effect: Effect): number {
  let metricValue = 0;

  if (effect.type === "scaling" && effect.scaling_metric) {
    metricValue = getMetricValue(effect.scaling_metric);
  }

  return effect.type === "scaling"
    ? effect.value + metricValue * (effect.scaling_factor ?? 0)
    : effect.value;
}

/**
 * Retrieves the value of the specified scaling metric.
 */
function getMetricValue(metric: string): number {
  if (metric === "population") return population().total;
  // if (metric === "gdp") return gdp();
  return 0; // Default fallback
}

// Calculate total spending and earning
// export const policySpending = createMemo(() =>
//   budgetPolicies()
//     .filter((policy) => policy.spending)
//     .reduce((total, policy) => total + (policy.spending?.base_amount || 0), 0)
// );

// export const totalEarning = createMemo(() =>
//   budgetPolicies()
//     .filter((policy) => policy.earning)
//     .reduce((total, policy) => total + (policy.earning?.base_amount || 0), 0)
// );
