import { Component, For } from "solid-js";
import { LAWS } from "../game/data/laws";
import { passLaw, unpassLaw } from "../game/logic/lawsLogic";
import { activeLaws } from "../game/state/gameState";

const LawsPanel: Component = () => {
  return (
    <div class="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Laws and Policies</h2>

      {/* Available Laws */}
      <h3 class="text-lg font-semibold mb-2">Available Laws</h3>
      <ul>
        <For
          each={LAWS.filter(
            (law) => !activeLaws().some((l) => l.id === law.id)
          )}
        >
          {(law) => (
            <li class="mb-4 border-b pb-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-gray-800">{law.name}</h3>
                  <p class="text-gray-600">{law.description}</p>
                  <p class="text-sm text-gray-500">
                    Cost: £{law.cost.toLocaleString()}
                  </p>
                </div>
                <button
                  class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  onClick={() => passLaw(law)}
                >
                  Pass Law
                </button>
              </div>
            </li>
          )}
        </For>
      </ul>

      {/* Active Laws */}
      <h3 class="text-lg font-semibold mt-6 mb-2">Active Laws</h3>
      <ul>
        <For each={activeLaws()}>
          {(law) => (
            <li class="mb-4 border-b pb-4">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-gray-800">{law.name}</h3>
                  <p class="text-gray-600">{law.description}</p>
                  <p class="text-sm text-gray-500">Currently Active</p>
                </div>
                <button
                  class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  onClick={() => unpassLaw(law.id)}
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

export default LawsPanel;
