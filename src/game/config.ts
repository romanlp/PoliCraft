// General Game Settings
export const GAME_SETTINGS = {
  initialDate: new Date("2025-01-01"), // Starting date
  turnDuration: "1 month", // Time duration for each turn
};

// Population
export const POPULATION = {
  initial: 67_000_000, // Starting population
  annualGrowthRate: 0.003, // 0.3% annual growth
  monthlyGrowthRate: Math.pow(1 + 0.003, 1 / 12) - 1, // Derived monthly growth rate
};

// Budget
export const BUDGET = {
  initial: 1_300_000_000_000, // Starting budget in pounds
  averageAnnualIncome: 20_000, // Average annual taxable income per person
};

// Tax
export const TAX = {
  initialRate: 33, // Initial tax rate as a percentage
};

// Happiness
export const HAPPINESS = {
  initial: 50, // Starting happiness (0-100 scale)
  decayPerTurn: 1, // Amount happiness decreases each turn
};
