import { Law } from "../data/laws";
import { budget, setActiveLaws, setBudget } from "../state/gameState";

export function passLaw(law: Law) {
  if (budget() >= law.cost) {
    setBudget((prev) => prev - law.cost); // Deduct cost from budget
    setActiveLaws((prev) => [...prev, law]); // Add law to active laws
    console.log(`Passed law: ${law.name}`);
  } else {
    console.log("Not enough budget to pass this law!");
  }
}

export function unpassLaw(lawId: string) {
  setActiveLaws((prev) => prev.filter((law) => law.id !== lawId)); // Remove the law from active laws
  console.log(`Unpassed law: ${lawId}`);
}
