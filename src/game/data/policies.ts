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
    valueType: "percentage",
    spending: {
      base_amount: 1_500_000_000,
      scaling_factor: {
        type: "population",
        multiplier: 10,
      },
    },
    effects: [
      {
        target: "spending",
        value: 1_500_000_000, // £1.5 billion base spending
        type: "scaling",
        scaling_factor: 10, // £10 per citizen
        scaling_metric: "population",
      },
      {
        target: "happiness",
        value: 10, // Fixed happiness boost
        type: "fixed",
      },
    ],
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
    effects: [
      {
        target: "spending",
        value: 1_000_000_000, // £1 billion base spending
        type: "scaling",
        scaling_factor: 10, // £10 per citizen
        scaling_metric: "population",
      },
      {
        target: "stability",
        value: 10, // Fixed stability boost
        type: "fixed",
      },
    ],
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
    effects: [
      {
        target: "spending",
        value: 800_000_000, // £800 million base spending
        type: "scaling",
        scaling_factor: 5, // £5 per citizen
        scaling_metric: "population",
      },
      {
        target: "happiness",
        value: 3, // Fixed happiness boost
        type: "fixed",
      },
    ],
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
    effects: [
      {
        target: "revenue",
        value: 600_000_000, // £600 million base revenue
        type: "scaling",
        scaling_factor: 150, // £150 per citizen
        scaling_metric: "population",
      },
      {
        target: "happiness",
        value: -4, // Happiness penalty
        type: "fixed",
      },
    ],
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
    effects: [
      {
        target: "spending",
        value: 400_000_000, // £400 million base spending
        type: "scaling",
        scaling_factor: 2, // £2 per citizen
        scaling_metric: "population",
      },
      {
        target: "happiness",
        value: 5, // Fixed happiness boost
        type: "fixed",
      },
      {
        target: "population",
        value: 0.0005, // Slight population growth boost
        type: "fixed",
      },
    ],
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
    effects: [
      {
        target: "spending",
        value: 1_200_000_000, // £1.2 billion base spending
        type: "scaling",
        scaling_factor: 8, // £8 per citizen
        scaling_metric: "population",
      },
      {
        target: "stability",
        value: 5, // Fixed stability boost
        type: "fixed",
      },
    ],
    prerequisites: [], // No prerequisites for this policy
  },
];
