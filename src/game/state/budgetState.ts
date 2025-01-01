import { createMemo } from "solid-js";
import { POLICIES } from "../data/policies";

// Filter policies with spending or earning
export const budgetPolicies = createMemo(() =>
  POLICIES.filter((policy) => policy.spending || policy.earning)
);

// Calculate total spending and earning
export const totalSpending = createMemo(() =>
  budgetPolicies()
    .filter((policy) => policy.spending)
    .reduce((total, policy) => total + (policy.spending?.base_amount || 0), 0)
);

export const totalEarning = createMemo(() =>
  budgetPolicies()
    .filter((policy) => policy.earning)
    .reduce((total, policy) => total + (policy.earning?.base_amount || 0), 0)
);
