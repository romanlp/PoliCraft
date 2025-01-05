import { createMemo, For } from "solid-js";
import { gdp } from "../game/state/economyState";
import {
  activePolicies,
  policyEarning,
  policySpending,
} from "../game/state/policyState";
import { population } from "../game/state/populationState";
import { Effect } from "../game/types/policy.types";

const BudgetPanel = () => {
  // Separate policies contributing to earning and spending
  const earningPolicies = createMemo(() =>
    activePolicies().filter((policy) =>
      policy.effects?.some((effect) => effect.target === "revenue")
    )
  );

  const spendingPolicies = createMemo(() =>
    activePolicies().filter((policy) =>
      policy.effects?.some((effect) => effect.target === "spending")
    )
  );

  return (
    <div class="p-6 bg-white border rounded-lg shadow-md">
      <h2 class="text-lg font-bold mb-4">Government Budget</h2>

      {/* Earnings Section */}
      <div class="mb-6">
        <h3 class="text-md font-semibold text-green-600">Earnings</h3>
        <p>
          <strong>Total Earnings:</strong>{" "}
          <span class="text-green-600 font-bold">
            £{policyEarning().toLocaleString()}
          </span>
        </p>
        <ul class="mt-2">
          <For each={earningPolicies()}>
            {(policy) => (
              <li class="text-sm text-gray-700">
                <strong>{policy.name}:</strong> £
                {policy.effects
                  ?.filter((effect) => effect.target === "revenue")
                  .reduce(
                    (total, effect) => total + calculateEffectValue(effect),
                    0
                  )
                  .toLocaleString()}
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* Spending Section */}
      <div>
        <h3 class="text-md font-semibold text-red-600">Spending</h3>
        <p>
          <strong>Total Spending:</strong>{" "}
          <span class="text-red-600 font-bold">
            £{policySpending().toLocaleString()}
          </span>
        </p>
        <ul class="mt-2">
          <For each={spendingPolicies()}>
            {(policy) => (
              <li class="text-sm text-gray-700">
                <strong>{policy.name}:</strong> £
                {policy.effects
                  ?.filter((effect) => effect.target === "spending")
                  .reduce(
                    (total, effect) => total + calculateEffectValue(effect),
                    0
                  )
                  .toLocaleString()}
              </li>
            )}
          </For>
        </ul>
      </div>

      {/* Net Balance */}
      <div class="mt-6">
        <h3 class="text-md font-semibold">Net Balance</h3>
        <p>
          <span
            class={`font-bold ${
              policyEarning() > policySpending()
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            £{(policyEarning() - policySpending()).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

/**
 * Helper function to calculate the value of a specific effect.
 */
function calculateEffectValue(effect: Effect): number {
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
  if (metric === "gdp") return gdp();
  return 0; // Default fallback
}

export default BudgetPanel;
