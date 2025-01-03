import { createMemo, createSignal } from "solid-js";
import { INITIAL_POPULATION } from "../data/population";

export const [population, setPopulation] = createSignal(INITIAL_POPULATION);

// Derived Metrics
export const totalPopulation = createMemo(() => population().total);

export const childrenPopulation = createMemo(
  () => totalPopulation() * population().dependents.children
);

export const retireesPopulation = createMemo(
  () => totalPopulation() * population().dependents.retirees
);

export const adultsPopulation = createMemo(
  () => totalPopulation() - childrenPopulation() - retireesPopulation()
);

export const stayAtHomeAdults = createMemo(
  () => totalPopulation() * population().workforce.non_working.stay_at_home
);

export const workforce = createMemo(
  () => adultsPopulation() - stayAtHomeAdults()
);

export const dependencyRatio = createMemo(
  () => (100 * (childrenPopulation() + retireesPopulation())) / workforce()
);

export const employedPopulation = createMemo(() => {
  const employed = workforce() * population().workforce.employed.total;
  return {
    total: employed,
    income_levels: {
      low: employed * population().workforce.employed.income_levels.low,
      middle: employed * population().workforce.employed.income_levels.middle,
      high: employed * population().workforce.employed.income_levels.high,
    },
  };
});

export const selfEmployedPopulation = createMemo(() => {
  const selfEmployed = workforce() * population().workforce.self_employed.total;
  return {
    total: selfEmployed,
    income_levels: {
      low:
        selfEmployed * population().workforce.self_employed.income_levels.low,
      middle:
        selfEmployed *
        population().workforce.self_employed.income_levels.middle,
      high:
        selfEmployed * population().workforce.self_employed.income_levels.high,
    },
  };
});

export const unemployedPopulation = createMemo(() => {
  const unemployed =
    workforce() * population().workforce.non_working.unemployed;
  return {
    total: unemployed,
    income_levels: {
      low: unemployed * population().workforce.non_working.income_levels.low,
      middle:
        unemployed * population().workforce.non_working.income_levels.middle,
      high: unemployed * population().workforce.non_working.income_levels.high,
    },
  };
});

// Family Roles
export const singleParents = createMemo(
  () => totalPopulation() * population().family_roles.single_parents
);
export const couplesWithoutChildren = createMemo(
  () => totalPopulation() * population().family_roles.couples_without_children
);
export const coupleParents = createMemo(
  () => totalPopulation() * population().family_roles.couple_parents
);
