import { createMemo, createSignal } from "solid-js";
import { INITIAL_POPULATION } from "../data/population";

export const [population, setPopulation] = createSignal(INITIAL_POPULATION);

// Derived Metrics
export const totalPopulation = createMemo(() => population().total);

export const workforce = createMemo(() => totalPopulation() * 0.65);
export const employedPopulation = createMemo(
  () => workforce() * population().workforce.employed.total
);
export const selfEmployedPopulation = createMemo(
  () => workforce() * population().workforce.self_employed.total
);
export const unemployedPopulation = createMemo(
  () => workforce() * population().workforce.unemployed.total
);

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
