import {
  activePolicies,
  budget,
  setActivePolicies,
  setBudget,
  setTaxRate,
} from "../state/gameState";
import { Policy } from "../types/policy.types";

export function passPolicy(policy: Policy) {
  // Check if the policy is already active
  const isAlreadyActive = activePolicies().some(
    (activeLaw) => activeLaw.id === policy.id
  );
  if (isAlreadyActive) {
    console.log(`Law already active: ${policy.name}`);
    return; // Exit early if the law is already active
  }

  if (budget() >= (policy.cost || 0)) {
    setBudget((prev) => prev - (policy.cost || 0)); // Deduct cost from budget
    setActivePolicies((prev) => [...prev, policy]); // Add law to active laws
    console.log(`Passed law: ${policy.name}`);
  } else {
    console.log("Not enough budget to pass this law!");
  }
}

export function unpassPolicy(lawId: string) {
  setActivePolicies((prev) => prev.filter((law) => law.id !== lawId)); // Remove the law from active laws

  // Reset the tax rate to 0 if the tax rate law is unpassed
  if (lawId === "tax_rate") {
    setTaxRate(0);
  }

  console.log(`Unpassed law: ${lawId}`);
}
