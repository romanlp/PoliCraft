import { Population } from "../types/population.types";

// 2022 UK Population Estimates
export const INITIAL_POPULATION: Population = {
  annualGrowthRate: 0.003, // 0.3% annual growth
  monthlyGrowthRate: Math.pow(1 + 0.003, 1 / 12) - 1, // Derived monthly growth rate
  total: 67_596_281,
  dependents: {
    children: 0.172, // 17.2% of total population
    retirees: 0.188, // 18.5% of total population
  },
  workforce: {
    employed: {
      total: 0.88, // 65% of workforce
      income_levels: {
        low: 0.6, // 60% of employed
        middle: 0.3, // 30% of employed
        high: 0.1, // 10% of employed
      },
      roles: {
        full_time: 0.8, // 80% of employed
        part_time: 0.2, // 20% of employed
      },
    },
    self_employed: {
      total: 0.12, // 10% of workforce
      income_levels: {
        low: 0.5, // 50% of self-employed
        middle: 0.4, // 40% of self-employed
        high: 0.1, // 10% of self-employed
      },
    },
    non_working: {
      unemployed: 0.043, // 5% of workforce
      stay_at_home: 0.135, // 13.5% of workforce
      income_levels: {
        low: 0.7, // 70% of unemployed
        middle: 0.25, // 25% of unemployed
        high: 0.05, // 5% of unemployed
      },
    },
  },
  family_roles: {
    single_parents: 0.1, // 10% of total population
    couples_without_children: 0.2, // 20% of total population
    couple_parents: 0.3, // 30% of total population
  },
};
