import { Component } from "solid-js";
import BudgetPanel from "./components/BudgetPanel";
import Dashboard from "./components/Dashboard";
import EconomicDashboard from "./components/EconomicDashboard";
import EventModal from "./components/EventModal";
import { NextTurnButton } from "./components/NextTurnButton";
import PoliciesPanel from "./components/PoliciesPanel";
import PopulationDashboard from "./components/PopulationDashboard";
import TopBar from "./components/TopBar";
import TurnFeedback from "./components/TurnFeedback";
import { activeEvent, setActiveEvent } from "./game/state/gameState";

const App: Component = () => {
  return (
    <div class="w-full bg-gray-100 text-gray-800 pt-16">
      <TopBar />
      <main class="p-4">
        <TurnFeedback />
        <PopulationDashboard />
        <EconomicDashboard />
        <BudgetPanel />
        <Dashboard />
        <PoliciesPanel />
        <NextTurnButton />

        {/* Show EventModal when there's an active event */}
        {activeEvent() && (
          <EventModal
            event={activeEvent()}
            onClose={() => setActiveEvent(null)} // Clear the active event on close
          />
        )}
      </main>
    </div>
  );
};

export default App;
