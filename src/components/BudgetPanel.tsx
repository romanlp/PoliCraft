import { For } from "solid-js";
import {
  budgetPolicies,
  policyEarning,
  policySpending,
} from "../game/state/policyState";

const BudgetPanel = () => {
  return (
    <div class="p-6 bg-white border rounded-lg shadow-md">
      <h2 class="text-lg font-bold mb-4">Budget Allocation</h2>
      <ul>
        <For each={budgetPolicies()}>
          {(policy) => (
            <li class="mb-4">
              <h3 class="font-semibold text-gray-700">{policy.name}</h3>
              <p class="text-sm text-gray-500">{policy.description}</p>

              {policy.spending && (
                <div class="flex items-center mt-2">
                  <input
                    type="range"
                    min={0}
                    max={policy.spending.base_amount! * 2} // Allow up to double the base spending
                    step={100_000_000}
                    value={policy.spending.base_amount}
                    class="w-full"
                    onInput={
                      (e) =>
                        (policy.spending!.base_amount = parseInt(
                          e.currentTarget.value
                        )) // Adjust policy spending directly
                    }
                  />
                  <span class="ml-4 text-gray-700 font-bold">
                    £{policy.spending.base_amount?.toLocaleString()}
                  </span>
                </div>
              )}

              {policy.earning && (
                <div class="flex items-center mt-2">
                  <span class="text-green-500 font-bold">
                    Generates £{policy.earning.base_amount?.toLocaleString()}
                  </span>
                </div>
              )}
            </li>
          )}
        </For>
      </ul>
      <div class="mt-6">
        <h3 class="text-md font-semibold">Summary:</h3>
        <p>
          <strong>Total Spending:</strong>{" "}
          <span
            class={`font-bold ${
              policySpending() > policyEarning()
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            £{policySpending().toLocaleString()}
          </span>
        </p>
        <p>
          <strong>Total Earning:</strong>{" "}
          <span class="text-green-600 font-bold">
            £{policyEarning().toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BudgetPanel;
