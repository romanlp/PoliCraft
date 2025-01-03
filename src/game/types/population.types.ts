export interface Population {
  total: number; // Total population

  // Dependents
  dependents: {
    // People aged between 0-14
    children: number; // % of total population
    // People aged 65+
    retirees: number; // % of total population
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
    non_working: {
      unemployed: number; // % of workforce actively seeking jobs
      stay_at_home: number; // % of workforce not actively seeking jobs
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
