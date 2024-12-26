import { Policy } from "../../types/policy.types";

export const incomeTax: Policy = {
  id: "income_tax",
  name: "Income Tax Policy",
  description: "Generates revenue from citizen incomes.",
  category: "taxation",
  earning: {
    scaling_factor: {
      type: "population",
      multiplier: 500,
    },
  },
};
