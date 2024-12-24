import { Component, createMemo, Show } from "solid-js";
import { turnFeedback } from "../game/state/gameState";

const TurnFeedback: Component = () => {
  const budgetChange = createMemo(() => turnFeedback().budgetChange);
  const happinessChange = createMemo(() => turnFeedback().happinessChange);
  const populationChange = createMemo(() => turnFeedback().populationChange);

  return (
    <Show when={budgetChange() || happinessChange() || populationChange()}>
      <div class="p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md mb-4">
        <h2 class="text-lg font-bold">Turn Summary</h2>
        <ul class="mt-2">
          <li>
            <strong>Budget Change:</strong> £{budgetChange().toLocaleString()}
          </li>
          <li>
            <strong>Happiness Change:</strong>{" "}
            {happinessChange() > 0 ? "+" : ""}
            {happinessChange()} / 100
          </li>
          <li>
            <strong>Population Change:</strong>{" "}
            {populationChange().toLocaleString()}
          </li>
        </ul>
      </div>
    </Show>
  );
};

export default TurnFeedback;
