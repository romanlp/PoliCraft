import { Component } from "solid-js";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LawsPanel from "./components/LawsPanel";

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-800">
      <header class="p-4 bg-blue-600 text-white">
        <h1 class="text-3xl font-bold">PoliCraft</h1>
      </header>
      <main class="p-4">
        <Dashboard />
        <LawsPanel />
      </main>
      <footer class="p-4 text-center bg-gray-800 text-white">
        &copy; 2024 PoliCraft. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
