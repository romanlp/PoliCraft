import { Component } from "solid-js";
import { budget, happiness, taxRate } from "../game/state/gameState";
import { population } from "../game/state/populationState";

const Dashboard: Component = () => {
  return (
    <div style="padding: 1rem; border: 1px solid #ccc;">
      <h2>Country Overview</h2>
      <p>Population: {population().total.toLocaleString()}</p>
      <p>Government Budget: £{budget().toLocaleString()}</p>
      <p>Happiness: {happiness()} / 100</p>
      <p>Tax Rate: {taxRate()}%</p>
    </div>
  );
};

export default Dashboard;
