export interface Population {
  total: number; // Total population

  // Dependents
  dependents: {
    children: number; // % of total population
    retirees: number; // % of total population
    stay_at_home_adults: number; // % of total population (e.g., caregivers)
  };

  // Workforce
  workforce: {
    employed: {
      total: number; // % of workforce
      income_levels: {
        low: number; // % of employed
        middle: number; // % of employed
        high: number; // % of employed
      };
      roles: {
        full_time: number; // % of employed
        part_time: number; // % of employed
      };
    };
    self_employed: {
      total: number; // % of workforce
      income_levels: {
        low: number; // % of self-employed
        middle: number; // % of self-employed
        high: number; // % of self-employed
      };
    };
    unemployed: {
      total: number; // % of workforce
      income_levels: {
        low: number; // % of unemployed
        middle: number; // % of unemployed
        high: number; // % of unemployed
      };
    };
  };

  // Family Roles (Overlap, No Employment Tracking)
  family_roles: {
    single_parents: number; // % of total population
    couples_without_children: number; // % of total population
    couple_parents: number; // % of total population
  };
}
