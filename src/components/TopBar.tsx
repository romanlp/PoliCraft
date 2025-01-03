import { createMemo } from "solid-js";
import { gdp, taxRevenue } from "../game/state/economyState";
import { currentDate, turn } from "../game/state/gameState";
import { totalPopulation } from "../game/state/populationState";

const TopBar = () => {
  const gdpDisplay = createMemo(() => Math.floor(gdp() / 1_000_000_000));
  const incomeDisplay = createMemo(() => taxRevenue() / 1_000_000_000);
  const populationDisplay = createMemo(() => totalPopulation() / 1_000_000);

  return (
    <div class="fixed top-0 left-0 right-0 bg-slate-100 text-black p-4 shadow-md z-50">
      <div class="flex justify-between items-center">
        {/* GDP */}
        <div class="flex flex-col items-start">
          <h3 class="text-xs font-semibold">GDP</h3>
          <p class="text-md font-bold">£{gdpDisplay().toLocaleString()}B</p>
        </div>
        {/* Population */}
        <div class="flex flex-col items-start">
          <h3 class="text-xs font-semibold">Population</h3>
          <p class="text-md font-bold">
            {populationDisplay().toFixed(1).toLocaleString()}M
          </p>
        </div>
        {/* Income */}
        <div>
          <h3 class="text-sm font-semibold">Income</h3>
          <p class="text-lg font-bold text-green-400">
            £{incomeDisplay().toFixed(2).toLocaleString()}B
          </p>
        </div>
        {/* Expenses */}
        <div>
          <h3 class="text-sm font-semibold">Expenses</h3>
          <p class="text-lg font-bold text-red-400">
            {/* £{spending().toLocaleString()} */}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold">
            {currentDate().toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric",
            })}
          </h3>
          <p class="text-lg font-bold text-red-400">Turn {turn()}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
