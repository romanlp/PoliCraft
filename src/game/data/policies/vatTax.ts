import { Policy } from "../../types/policy.types";

export const vatTax: Policy = {
  id: "vat_tax",
  name: "Value Added Tax (VAT)",
  description:
    "Imposes a Value Added Tax on goods and services, generating revenue but increasing consumer prices.",
  category: "taxation",
  earning: {
    base_amount: 1_000_000_000, // £1 billion per turn
    scaling_factor: {
      type: "gdp", // Revenue scales with GDP
      multiplier: 0.1, // 10% of GDP
    },
  },
  per_turn_effects: {
    happiness: -3, // Reduces happiness due to higher consumer costs
  },
  prerequisites: [], // No prerequisites for this policy
};
