import { Policy } from "../../types/policy.types";

export const vatTax: Policy = {
  id: "vat_tax",
  name: "Value Added Tax (VAT)",
  description:
    "Imposes a Value Added Tax on goods and services, generating revenue but increasing consumer prices.",
  category: "taxation",
  valueType: "percentage",
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
