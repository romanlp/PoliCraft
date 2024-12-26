import { Policy } from "../types/policy.types";
import { incomeTax } from "./policies/incomeTax";
import { vatTax } from "./policies/vatTax";

export const POLICIES: Policy[] = [
  incomeTax,
  vatTax,
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
  {
    id: "renewable_energy_subsidies",
    name: "Renewable Energy Subsidies",
    description:
      "Encourages the adoption of renewable energy sources, reducing carbon emissions and improving public satisfaction.",
    category: "infrastructure",
    spending: {
      base_amount: 800_000_000,
      scaling_factor: {
        type: "population",
        multiplier: 5,
      },
    },
    per_turn_effects: {
      happiness: 3,
    },
    prerequisites: [],
  },
  {
    id: "corporate_tax",
    name: "Corporate Tax Policy",
    description:
      "Generates revenue by taxing corporate profits. May reduce business satisfaction and discourage investments.",
    category: "taxation",
    earning: {
      base_amount: 600_000_000, // £600 million per turn
      scaling_factor: {
        type: "population",
        multiplier: 150, // £150 per citizen
      },
    },
    per_turn_effects: {
      happiness: -4, // Reduced happiness decay
    },
    prerequisites: [], // No prerequisites for this policy
  },
  {
    id: "small_business_grants",
    name: "Small Business Grants",
    description:
      "Supports small businesses through financial grants, boosting happiness and encouraging economic growth.",
    category: "economic",
    spending: {
      base_amount: 400_000_000, // £400 million per turn
      scaling_factor: {
        type: "population",
        multiplier: 2, // £2 per citizen
      },
    },
    per_turn_effects: {
      happiness: 5, // Improves happiness
      population_growth: 0.0005, // Slight increase in population growth
    },
    prerequisites: [], // No prerequisites for this policy
  },
  {
    id: "technology_research_grants",
    name: "Technology Research Grants",
    description:
      "Invests in cutting-edge technology research to boost productivity and stability in the long term.",
    category: "infrastructure",
    spending: {
      base_amount: 1_200_000_000, // £1.2 billion per turn
      scaling_factor: {
        type: "population",
        multiplier: 8, // £8 per citizen
      },
    },
    per_turn_effects: {
      stability: 5, // Improves stability
    },
    prerequisites: [], // No prerequisites for this policy
  },
];
