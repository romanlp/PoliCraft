export interface Sector {
  name: string; // Sector name
  workforce_percentage: number; // % of workforce in this sector
  productivity: number; // Productivity per worker (£)
  policy_effects?: {
    productivity_boost?: number; // Boost to productivity from policies
    workforce_shift?: number; // % change in workforce from policies
  };
}
