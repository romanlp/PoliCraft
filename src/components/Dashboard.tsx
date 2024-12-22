import { Component } from "solid-js";
import {
  budget,
  happiness,
  population,
  taxRate,
  taxRevenue,
} from "../game/state/gameState";

const Dashboard: Component = () => {
  return (
    <div style="padding: 1rem; border: 1px solid #ccc;">
      <h2>Country Overview</h2>
      <p>Population: {population().toLocaleString()}</p>
      <p>Government Budget: £{budget().toLocaleString()}</p>
      <p>Happiness: {happiness()} / 100</p>
      <p>Tax Rate: {taxRate()}%</p>
      <p>Tax Revenue: £{taxRevenue().toLocaleString()}</p>
    </div>
  );
};

export default Dashboard;
