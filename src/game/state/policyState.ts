import { createMemo, createSignal } from "solid-js";
import { POLICIES } from "../data/policies";
import { Policy } from "../types/policy.types";

// Policies
export const [activePolicies, setActivePolicies] = createSignal<Policy[]>([
  POLICIES.find((policy) => policy.id === "income_tax")!,
]);

// Filter policies with spending or earning
export const budgetPolicies = createMemo(() =>
  activePolicies().filter((policy) => policy.spending || policy.earning)
);

// Calculate total spending and earning
export const policySpending = createMemo(() =>
  budgetPolicies()
    .filter((policy) => policy.spending)
    .reduce((total, policy) => total + (policy.spending?.base_amount || 0), 0)
);

export const totalEarning = createMemo(() =>
  budgetPolicies()
    .filter((policy) => policy.earning)
    .reduce((total, policy) => total + (policy.earning?.base_amount || 0), 0)
);
