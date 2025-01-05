import { Policy } from "../../types/policy.types";

export const vatTax: Policy = {
  id: "vat_tax",
  name: "Value Added Tax (VAT)",
  description:
    "Imposes a Value Added Tax on goods and services, generating revenue but increasing consumer prices.",
  category: "taxation",
  valueType: "percentage",
  earning: {
    base_amount: 1_000_000_000, // £1 billion per turn
    scaling_factor: {
      type: "gdp", // Revenue scales with GDP
      multiplier: 0.1, // 10% of GDP
    },
  },
  effects: [
    {
      type: "scaling",
      target: "revenue",
      scaling_metric: "population",
      scaling_factor: 0.1, // £0.10 per citizen
      value: 0, // No fixed revenue
    },
    {
      type: "fixed",
      target: "happiness",
      value: -3, // Reduces happiness due to higher consumer costs
    },
  ],
  prerequisites: [], // No prerequisites for this policy
};
