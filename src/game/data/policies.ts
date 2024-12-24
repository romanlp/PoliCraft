import { Policy } from "../types/policy.types";

export const POLICIES: Policy[] = [
  {
    id: "income_tax",
    name: "Income Tax Policy",
    description: "Generates revenue from citizen incomes.",
    category: "taxation",
    earning: {
      base_amount: 1_000_000_000,
      scaling_factor: {
        type: "population",
        multiplier: 500,
      },
    },
  },
  {
    id: "healthcare",
    name: "Healthcare Budget",
    description: "Provides universal healthcare to all citizens.",
    category: "welfare",
    spending: {
      base_amount: 1_500_000_000,
      scaling_factor: {
        type: "population",
        multiplier: 10,
      },
    },
    per_turn_effects: {
      happiness: 10,
    },
  },
  {
    id: "defense_budget",
    name: "Base Defense Budget",
    description: "Funds essential defense operations.",
    category: "security",
    spending: {
      base_amount: 1_000_000_000,
      scaling_factor: {
        type: "population",
        multiplier: 10,
      },
    },
    per_turn_effects: {
      stability: 10,
    },
  },
];
