import { Law } from "../data/laws";
import {
  activeLaws,
  budget,
  setActiveLaws,
  setBudget,
  setTaxRate,
} from "../state/gameState";

export function passLaw(law: Law) {
  // Check if the law is already active
  const isAlreadyActive = activeLaws().some(
    (activeLaw) => activeLaw.id === law.id
  );
  if (isAlreadyActive) {
    console.log(`Law already active: ${law.name}`);
    return; // Exit early if the law is already active
  }

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

  // Reset the tax rate to 0 if the tax rate law is unpassed
  if (lawId === "tax_rate") {
    setTaxRate(0);
  }

  console.log(`Unpassed law: ${lawId}`);
}
