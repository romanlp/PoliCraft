import { gdp, taxRevenue, unemploymentRate } from "../game/state/economyState";

const EconomicDashboard = () => {
  return (
    <div class="p-4 bg-gray-100 border rounded-lg shadow-md">
      <h2 class="text-lg font-bold mb-4">Economic Overview</h2>
      <ul>
        <li>
          <strong>GDP:</strong> £{gdp().toLocaleString()}
        </li>
        <li>
          <strong>Unemployment Rate:</strong>{" "}
          {(unemploymentRate() * 100).toFixed(2)}%
        </li>
        <li>
          <strong>Tax Revenue:</strong> £{taxRevenue().toLocaleString()}
        </li>
      </ul>
    </div>
  );
};

export default EconomicDashboard;
