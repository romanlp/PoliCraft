export interface Law {
  id: string; // Unique identifier
  name: string; // Display name
  description: string; // Description of the law
  cost: number; // One-time cost to pass the law (in £)
  perTurnEffects?: {
    happiness?: number; // Happiness change per turn
    budget?: number; // Budget change per turn
    populationGrowth?: number; // Adjust population growth
  };
}

export const LAWS: Law[] = [
  {
    id: "tax_rate",
    name: "Income Tax Policy",
    description:
      "Sets the income tax rate, generating revenue for the government.",
    cost: 0, // No upfront cost for changing the tax rate
    perTurnEffects: {
      budget: 0, // Will calculate dynamically based on the tax rate
    },
  },
  {
    id: "basic_income",
    name: "Universal Basic Income",
    description:
      "Provide every citizen with a basic income, boosting happiness but at a cost.",
    cost: 500_000_000, // £500 million
    perTurnEffects: {
      happiness: 5, // +5 happiness per turn
      budget: -50_000_000, // -£50 million per turn
    },
  },
  {
    id: "carbon_tax",
    name: "Carbon Tax",
    description:
      "Tax carbon emissions to raise revenue and fight climate change.",
    cost: 0, // No initial cost
    perTurnEffects: {
      budget: 100_000_000, // +£100 million per turn
      happiness: -2, // -2 happiness per turn
    },
  },
];
