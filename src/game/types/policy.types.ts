// Define a TypeScript type for policy categories in lower case and snake_case
export type PolicyCategory =
  | "taxation" // Includes income tax, corporate tax, etc.
  | "economic" // Trade tariffs, subsidies, stimulus packages
  | "welfare" // Healthcare, education, welfare-related policies
  | "infrastructure" // Public transport, road maintenance, broadband
  | "social" // Universal Basic Income, cultural policies
  | "security"; // Defense budgets, public safety initiatives

export type PolicyEffectTarget =
  | "happiness"
  | "stability"
  | "gdp"
  | "population"
  | "revenue"
  | "spending";

export interface Effect {
  target: PolicyEffectTarget;
  value: number; // Base effect value (fixed or scaled)
  type: "fixed" | "scaling" | "conditional"; // Type of effect
  scaling_factor?: number; // Multiplier for scaling effects
  scaling_metric?: "population" | "gdp" | "tax_revenue" | "sector_contribution"; // Context for scaling
  condition?: {
    metric: "tax_revenue" | "spending" | "stability";
    operator: ">" | "<" | "=";
    value: number;
  }; // Conditional logic for applying effects
}

export interface Policy {
  id: string; // Unique identifier
  name: string; // Display name
  description: string; // Brief description of the policy
  category: PolicyCategory; // Category of the policy
  cost?: number; // One-time cost to pass the policy

  valueType?: "boolean" | "number" | "percentage"; // Type of value the policy holds
  valueRange?: [number, number]; // Min and max values for the policy

  // Revenue generation
  earning?: {
    base_amount?: number; // Fixed amount of revenue per turn
    scaling_factor?: {
      type: "population" | "gdp"; // What the revenue scales with
      multiplier: number; // Revenue per unit (e.g., £10 per citizen)
    };
  };

  // Spending allocation
  spending?: {
    base_amount?: number; // Fixed amount of spending per turn
    scaling_factor?: {
      type: "population" | "event_driven"; // What the spending scales with
      multiplier: number; // Spending per unit (e.g., £50 per citizen)
    };
  };

  // Recurring effects
  effects?: Effect[]; // Effects applied each turn

  // Prerequisite policies
  prerequisites?: string[]; // IDs of policies that must be active
}
