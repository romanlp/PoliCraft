import { Component } from "solid-js";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EventModal from "./components/EventModal";
import PoliciesPanel from "./components/PoliciesPanel";
import PopulationDashboard from "./components/PopulationDashboard";
import TurnFeedback from "./components/TurnFeedback";
import { activeEvent, setActiveEvent } from "./game/state/gameState";

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-800">
      <header class="p-4 bg-blue-600 text-white">
        <h1 class="text-3xl font-bold">PoliCraft</h1>
      </header>
      <main class="p-4">
        <TurnFeedback />
        <PopulationDashboard />
        <Dashboard />
        <PoliciesPanel />

        {/* Show EventModal when there's an active event */}
        {activeEvent() && (
          <EventModal
            event={activeEvent()}
            onClose={() => setActiveEvent(null)} // Clear the active event on close
          />
        )}
      </main>
      <footer class="p-4 text-center bg-gray-800 text-white">
        &copy; 2024 PoliCraft. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
