import { Component, For } from "solid-js";
import { POLICIES } from "../game/data/policies";
import { passPolicy, unpassPolicy } from "../game/logic/lawsLogic";
import { setTaxRate, taxRate } from "../game/state/gameState";
import { activePolicies } from "../game/state/policyState";

const groupedPolicies = () => {
  const availablePolicies = POLICIES.filter(
    (policy) => !activePolicies().some((p) => p.id === policy.id)
  );

  const categories = Array.from(
    new Set(availablePolicies.map((policy) => policy.category))
  );
  return categories.map((category) => ({
    category,
    policies: availablePolicies.filter(
      (policy) => policy.category === category
    ),
  }));
};

const PoliciesPanel: Component = () => {
  return (
    <div class="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Policies</h2>

      {/* Available Policies */}
      <h3 class="text-lg font-semibold mb-2">Available Policies</h3>
      <ul>
        <For each={groupedPolicies()}>
          {(group) => (
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">{group.category}</h3>
              <ul>
                <For each={group.policies}>
                  {(policy) => (
                    <li class="mb-4 border-b pb-4">
                      <div class="flex justify-between items-center">
                        <div>
                          <h3 class="font-bold text-gray-800">{policy.name}</h3>
                          <p class="text-gray-600">{policy.description}</p>
                        </div>
                        <button
                          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          onClick={() => passPolicy(policy)}
                        >
                          Enable Policy
                        </button>
                      </div>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </ul>

      {/* Active Laws */}
      <h3 class="text-lg font-semibold mt-6 mb-2">Active Laws</h3>
      <ul>
        <For each={activePolicies()}>
          {(policy) => (
            <li class="mb-4 border-b pb-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-gray-800">{policy.name}</h3>
                  <p class="text-gray-600">{policy.description}</p>
                  {policy.id === "income_tax" && (
                    <div class="mt-2">
                      <label for="taxRate" class="text-sm text-gray-500">
                        Tax Rate: {taxRate()}%
                      </label>
                      <input
                        id="taxRate"
                        type="range"
                        min="0"
                        max="50"
                        value={taxRate()}
                        class="w-full"
                        onInput={(e) =>
                          setTaxRate(parseInt(e.currentTarget.value))
                        }
                      />
                    </div>
                  )}

                  {/* Earning Section */}
                  {policy.earning && (
                    <div class="mt-2">
                      <label class="text-sm text-gray-600">
                        Revenue: £{policy.earning.base_amount?.toLocaleString()}{" "}
                        + Scaling
                      </label>
                    </div>
                  )}

                  {/* Spending Section */}
                  {policy.spending && (
                    <div class="mt-2">
                      <label class="text-sm text-gray-600">
                        Spending: £
                        {policy.spending.base_amount?.toLocaleString()} +
                        Scaling
                      </label>
                    </div>
                  )}
                </div>
                <button
                  class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => unpassPolicy(policy.id)}
                >
                  Unpass Law
                </button>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default PoliciesPanel;
