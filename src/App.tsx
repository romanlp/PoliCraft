import { Component } from "solid-js";
import "./App.css";
import Dashboard from "./components/Dashboard";

const App: Component = () => {
  return (
    <div style="padding: 1rem; font-family: Arial, sans-serif; line-height: 1.6;">
      <header style="margin-bottom: 2rem;">
        <h1>PoliCraft</h1>
        <p>
          Shape the future of your nation by managing policies, budgets, and
          citizen happiness.
        </p>
      </header>

      {/* Dashboard: Displays core stats */}
      <Dashboard />

      {/* Placeholder for additional UI panels */}
      <div style="margin-top: 2rem;">
        <h2>Coming Soon</h2>
        <ul>
          <li>Budget Management Panel</li>
          <li>Laws and Policies Panel</li>
          <li>Events and Crises</li>
        </ul>
      </div>

      <footer style="margin-top: 3rem; font-size: 0.8rem; color: #666;">
        <p>&copy; 2024 PoliCraft. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
