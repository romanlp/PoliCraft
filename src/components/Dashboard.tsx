import { Component } from "solid-js";
import { advanceTurn } from "../game/logic/advanceTurn";
import {
  budget,
  happiness,
  population,
  taxRate,
} from "../game/state/gameState";

const Dashboard: Component = () => {
  return (
    <div style="padding: 1rem; border: 1px solid #ccc;">
      <h2>Country Overview</h2>
      <p>Population: {population().toLocaleString()}</p>
      <p>Government Budget: £{budget().toLocaleString()}</p>
      <p>Happiness: {happiness()} / 100</p>
      <p>Tax Rate: {taxRate()}%</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={advanceTurn}
      >
        Advance Turn
      </button>
    </div>
  );
};

export default Dashboard;
