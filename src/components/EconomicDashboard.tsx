import {
  adjustedAggregateDemand,
  gdp,
  giniCoefficient,
  priceLevel,
  taxRevenue,
  unemploymentRate,
} from "../game/state/economyState";

const EconomicDashboard = () => {
  return (
    <div class="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 class="text-lg font-bold mb-4">Economic Overview</h2>
      <ul>
        <li>
          <strong>GDP:</strong> £{gdp().toLocaleString()}
        </li>
        <li>
          <strong>Gini Coefficient (Income Inequality):</strong>{" "}
          {giniCoefficient().toFixed(2)}
        </li>
        <li>
          <strong>Unemployment Rate:</strong>{" "}
          {(unemploymentRate() * 100).toFixed(2)}%
        </li>
        <li>
          <strong>Tax Revenue:</strong> £{taxRevenue().toLocaleString()}
        </li>
        <li>
          <strong>Price Level:</strong> {priceLevel().toFixed(2)} (Baseline:
          1.0)
        </li>
        <li>
          <strong>Adjusted Aggregate Demand:</strong> £
          {adjustedAggregateDemand().toLocaleString()}
        </li>
        <li>
          <strong>GDP (Aggregate Supply):</strong> £{gdp().toLocaleString()}
        </li>
      </ul>
    </div>
  );
};

export default EconomicDashboard;
