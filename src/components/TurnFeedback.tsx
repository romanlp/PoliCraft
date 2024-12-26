import { Component, createMemo, Show } from "solid-js";
import { turnFeedback } from "../game/state/gameState";

const TurnFeedback: Component = () => {
  const budgetChange = createMemo(() => turnFeedback()?.budgetChange);
  const populationChange = createMemo(() => turnFeedback()?.populationChange);

  return (
    <Show when={turnFeedback()}>
      <div class="p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md mb-4">
        <h2 class="text-lg font-bold">Turn Summary</h2>
        <ul class="mt-2">
          <li>
            <strong>GDP Change:</strong> £
            {turnFeedback()?.gdpChange.toLocaleString()}
          </li>
          <li>
            <strong>Tax Revenue:</strong> £
            {turnFeedback()?.taxRevenue.toLocaleString()}{" "}
            <span
              class={
                turnFeedback()?.taxChange || 0 >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              ({turnFeedback()?.taxChange || 0 >= 0 ? "+" : ""}£
              {turnFeedback()?.taxChange.toLocaleString()})
            </span>
          </li>
          <li>
            <strong>Budget Change:</strong> £{budgetChange()?.toLocaleString()}
          </li>
          <li>
            <strong>Population Change:</strong>{" "}
            {populationChange()?.toLocaleString()}
          </li>
        </ul>
      </div>
    </Show>
  );
};

export default TurnFeedback;
