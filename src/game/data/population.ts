import { Population } from "../types/population.types";

export const INITIAL_POPULATION: Population = {
  total: 70_000_000,
  dependents: {
    children: 0.2, // 20% of total population
    retirees: 0.15, // 15% of total population
    stay_at_home_adults: 0.05, // 5% of total population
  },
  workforce: {
    employed: {
      total: 0.65, // 65% of workforce
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
      total: 0.1, // 10% of workforce
      income_levels: {
        low: 0.5, // 50% of self-employed
        middle: 0.4, // 40% of self-employed
        high: 0.1, // 10% of self-employed
      },
    },
    unemployed: {
      total: 0.15, // 15% of workforce
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
