// General Game Settings
export const GAME_SETTINGS = {
  initialDate: new Date("2025-01-01"), // Starting date
  turnDuration: "1 month", // Time duration for each turn
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
