import { gdp, taxRevenue } from "../state/economyState";
import { setHappiness } from "../state/gameState";
import { activePolicies } from "../state/policyState";
import { population } from "../state/populationState";
import type { Effect } from "../types/policy.types";

/**
 * Handles all active policies and applies their effects.
 */
export function handlePolicies() {
  console.log("Handling active policies...");

  activePolicies().forEach((policy) => {
    policy.effects?.forEach((effect) => {
      applyEffect(effect); // Apply each effect of the policy
    });
  });

  console.log("Policies handled.");
}

/**
 * Applies a single policy effect to the relevant game metric.
 */
export function applyEffect(effect: Effect) {
  let metricValue = 0;

  // Retrieve the value of the scaling metric, if applicable
  if (effect.type === "scaling" && effect.scaling_metric) {
    metricValue = getMetricValue(effect.scaling_metric);
  }

  // Calculate the effect value
  const totalEffectValue =
    effect.type === "scaling"
      ? effect.value + metricValue * (effect.scaling_factor ?? 0)
      : effect.value;

  // Apply the effect to the target
  if (effect.target === "happiness") {
    setHappiness((prev) => Math.max(0, Math.min(100, prev + totalEffectValue)));
  }
  //   else if (effect.target === "gdp") {
  //     setGDP((prev) => prev + totalEffectValue);
  //   } else if (effect.target === "stability") {
  //     setStability((prev) => Math.max(0, Math.min(100, prev + totalEffectValue)));
  //   }
}

/**
 * Retrieves the value of the specified scaling metric.
 */
function getMetricValue(metric: string): number {
  if (metric === "population") return population().total;
  if (metric === "gdp") return gdp();
  if (metric === "tax_revenue") return taxRevenue();
  return 0; // Default fallback
}
