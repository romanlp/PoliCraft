import { Component, For } from "solid-js";
import {
  setBudget,
  setHappiness,
  setPopulation,
} from "../game/state/gameState";
import { Event } from "../game/types/event.type";

const EventModal: Component<{ event: Event | null; onClose: () => void }> = (
  props
) => {
  const handleChoice = (index: number) => {
    const choice = props.event!.choices![index];

    // Apply the effects of the chosen option
    if (choice.effects.budget !== undefined) {
      setBudget((prev) => prev + choice.effects.budget!);
    }
    if (choice.effects.happiness !== undefined) {
      setHappiness((prev) =>
        Math.max(0, Math.min(100, prev + choice.effects.happiness!))
      );
    }
    if (choice.effects.population !== undefined) {
      setPopulation((prev) => Math.max(0, prev + choice.effects.population!));
    }

    // Close the modal after handling the choice
    props.onClose();
  };

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-xl font-bold">{props.event?.name}</h2>
        <p class="mt-2">{props.event?.description}</p>

        {props.event?.choices ? (
          <ul class="mt-4">
            <For each={props.event.choices}>
              {(choice, index) => (
                <li class="mt-2">
                  <button
                    class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={() => handleChoice(index())}
                  >
                    {choice.description}
                  </button>
                </li>
              )}
            </For>
          </ul>
        ) : (
          <button
            class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={props.onClose}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default EventModal;
