import { EVENTS } from "../data/events";
import { setBudget, setHappiness, setPopulation } from "../state/gameState";

export function triggerRandomEvent() {
  // Filter events based on their probability
  const eventPool = EVENTS.filter((event) => Math.random() < event.probability);

  if (eventPool.length === 0) {
    console.log("No events triggered this turn.");
    return null; // No event triggered
  }

  // Select a random event from the filtered pool
  const event = eventPool[Math.floor(Math.random() * eventPool.length)];

  console.log(`Event Triggered: ${event.name}`);
  console.log(event.description);

  // Apply the event's effects
  if (event.effects) {
    if (event.effects.budget !== undefined) {
      setBudget((prev) => prev + event.effects!.budget!);
    }
    if (event.effects.happiness !== undefined) {
      setHappiness((prev) =>
        Math.max(0, Math.min(100, prev + event.effects!.happiness!))
      );
    }
    if (event.effects.population !== undefined) {
      setPopulation((prev) => Math.max(0, prev + event.effects!.population!));
    }
  }

  return event; // Return the triggered event for further handling
}
