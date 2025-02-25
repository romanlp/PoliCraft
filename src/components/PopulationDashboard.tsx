import {
  adultsPopulation,
  childrenPopulation,
  coupleParents,
  couplesWithoutChildren,
  dependencyRatio,
  employedPopulation,
  population,
  retireesPopulation,
  selfEmployedPopulation,
  singleParents,
  totalPopulation,
  unemployedPopulation,
  workforce,
} from "../game/state/populationState";

const PopulationDashboard = () => {
  return (
    <div class="p-6 bg-white border rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-blue-700">Population Overview</h2>

      {/* Total Population */}
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700">Total Population</h3>
        <p class="text-3xl font-bold text-gray-900">
          {totalPopulation().toLocaleString()}
        </p>
      </div>

      {/* Dependents */}
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700">Dependents</h3>
        <ul class="mt-2">
          <li>
            <strong>Children:</strong> {childrenPopulation().toLocaleString()}
          </li>
          <li>
            <strong>Retirees:</strong> {retireesPopulation().toLocaleString()}
          </li>
          <li>
            <strong>Stay-at-Home Adults:</strong>{" "}
            {(
              population().total *
              population().workforce.non_working.stay_at_home
            ).toLocaleString()}
          </li>
          <li>
            <strong>Dependency Ratio:</strong>
            {dependencyRatio().toLocaleString()}
          </li>
        </ul>
      </div>

      {/* Workforce */}
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700">Workforce</h3>
        <ul class="mt-2">
          <li>
            <strong>Total Adults:</strong> {adultsPopulation().toLocaleString()}
          </li>
          <li>
            <strong>Total Workforce:</strong> {workforce().toLocaleString()}
          </li>
          <li>
            <strong>Employed Population:</strong>{" "}
            {employedPopulation().total.toLocaleString()}
          </li>
          <li>
            <strong>Self-Employed Population:</strong>{" "}
            {selfEmployedPopulation().total.toLocaleString()}
          </li>

          <li>
            <strong>Total working:</strong>{" "}
            {(
              employedPopulation().total + selfEmployedPopulation().total
            ).toLocaleString()}
          </li>
          <li>
            <strong>Unemployed Population:</strong>{" "}
            {unemployedPopulation().total.toLocaleString()}
          </li>
        </ul>
      </div>

      {/* Income Levels */}
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700">Income Levels</h3>
        <ul class="mt-2 grid grid-cols-2 gap-4">
          <li>
            <strong>Low-Income Employed:</strong>{" "}
            {(
              employedPopulation().total *
              population().workforce.employed.income_levels.low
            ).toLocaleString()}
          </li>
          <li>
            <strong>Middle-Income Employed:</strong>{" "}
            {(
              employedPopulation().total *
              population().workforce.employed.income_levels.middle
            ).toLocaleString()}
          </li>
          <li>
            <strong>High-Income Employed:</strong>{" "}
            {(
              employedPopulation().total *
              population().workforce.employed.income_levels.high
            ).toLocaleString()}
          </li>
          <li>
            <strong>Low-Income Self-Employed:</strong>{" "}
            {(
              selfEmployedPopulation().total *
              population().workforce.self_employed.income_levels.low
            ).toLocaleString()}
          </li>
          <li>
            <strong>Middle-Income Self-Employed:</strong>{" "}
            {(
              selfEmployedPopulation().total *
              population().workforce.self_employed.income_levels.middle
            ).toLocaleString()}
          </li>
          <li>
            <strong>High-Income Self-Employed:</strong>{" "}
            {(
              selfEmployedPopulation().total *
              population().workforce.self_employed.income_levels.high
            ).toLocaleString()}
          </li>
        </ul>
      </div>

      {/* Family Roles */}
      <div>
        <h3 class="text-lg font-semibold text-gray-700">Family Roles</h3>
        <ul class="mt-2">
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
    </div>
  );
};

export default PopulationDashboard;
