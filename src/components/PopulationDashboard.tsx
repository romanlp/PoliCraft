import {
  coupleParents,
  couplesWithoutChildren,
  employedPopulation,
  population,
  selfEmployedPopulation,
  singleParents,
  totalPopulation,
  unemployedPopulation,
  workforce,
} from "../game/state/populationState";

const PopulationDashboard = () => {
  return (
    <div class="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 class="text-lg font-bold mb-4">Population Overview</h2>
      <ul>
        {/* Total Population */}
        <li>
          <strong>Total Population:</strong>{" "}
          {totalPopulation().toLocaleString()}
        </li>

        {/* Dependents */}
        <h3 class="text-md font-semibold mt-4">Dependents</h3>
        <li>
          <strong>Children:</strong>{" "}
          {(
            population().total * population().dependents.children
          ).toLocaleString()}
        </li>
        <li>
          <strong>Retirees:</strong>{" "}
          {(
            population().total * population().dependents.retirees
          ).toLocaleString()}
        </li>
        <li>
          <strong>Stay-at-Home Adults:</strong>{" "}
          {(
            population().total * population().dependents.stay_at_home_adults
          ).toLocaleString()}
        </li>

        {/* Workforce */}
        <h3 class="text-md font-semibold mt-4">Workforce</h3>
        <li>
          <strong>Total Workforce:</strong> {workforce().toLocaleString()}
        </li>
        <li>
          <strong>Employed Population:</strong>{" "}
          {employedPopulation().toLocaleString()}
        </li>
        <li>
          <strong>Self-Employed Population:</strong>{" "}
          {selfEmployedPopulation().toLocaleString()}
        </li>
        <li>
          <strong>Unemployed Population:</strong>{" "}
          {unemployedPopulation().toLocaleString()}
        </li>

        {/* Income Levels */}
        <h3 class="text-md font-semibold mt-4">Income Levels</h3>
        <li>
          <strong>Low-Income Employed:</strong>{" "}
          {(
            employedPopulation() *
            population().workforce.employed.income_levels.low
          ).toLocaleString()}
        </li>
        <li>
          <strong>Middle-Income Employed:</strong>{" "}
          {(
            employedPopulation() *
            population().workforce.employed.income_levels.middle
          ).toLocaleString()}
        </li>
        <li>
          <strong>High-Income Employed:</strong>{" "}
          {(
            employedPopulation() *
            population().workforce.employed.income_levels.high
          ).toLocaleString()}
        </li>
        <li>
          <strong>Low-Income Self-Employed:</strong>{" "}
          {(
            selfEmployedPopulation() *
            population().workforce.self_employed.income_levels.low
          ).toLocaleString()}
        </li>
        <li>
          <strong>Middle-Income Self-Employed:</strong>{" "}
          {(
            selfEmployedPopulation() *
            population().workforce.self_employed.income_levels.middle
          ).toLocaleString()}
        </li>
        <li>
          <strong>High-Income Self-Employed:</strong>{" "}
          {(
            selfEmployedPopulation() *
            population().workforce.self_employed.income_levels.high
          ).toLocaleString()}
        </li>
        <li>
          <strong>Low-Income Unemployed:</strong>{" "}
          {(
            unemployedPopulation() *
            population().workforce.unemployed.income_levels.low
          ).toLocaleString()}
        </li>
        <li>
          <strong>Middle-Income Unemployed:</strong>{" "}
          {(
            unemployedPopulation() *
            population().workforce.unemployed.income_levels.middle
          ).toLocaleString()}
        </li>
        <li>
          <strong>High-Income Unemployed:</strong>{" "}
          {(
            unemployedPopulation() *
            population().workforce.unemployed.income_levels.high
          ).toLocaleString()}
        </li>

        {/* Family Roles */}
        <h3 class="text-md font-semibold mt-4">Family Roles</h3>
        <li>
          <strong>Single Parents:</strong> {singleParents().toLocaleString()}
        </li>
        <li>
          <strong>Couples Without Children:</strong>{" "}
          {couplesWithoutChildren().toLocaleString()}
        </li>
        <li>
          <strong>Couple Parents:</strong> {coupleParents().toLocaleString()}
        </li>
      </ul>
    </div>
  );
};

export default PopulationDashboard;
