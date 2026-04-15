"use client";
import { useState, useEffect } from "react";
import { meals as allMeals } from "../data/meals";
import MealList from "../components/MealList";
import SelectedMeals from "../components/SelectedMeals";

export default function Home() {
  const [selected, setSelected] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [sortDir, setSortDir] = useState("asc");

  // Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("item_selected");
    if (saved) setSelected(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("item_selected", JSON.stringify(selected));
  }, [selected]);

  function handleAdd(meal) {
    if (!selected.some((m) => m.id === meal.id) && meal.isAvailable) {
      setSelected((prev) => [...prev, meal]);
    }
  }

  function handleRemove(id) {
    setSelected((prev) => prev.filter((m) => m.id !== id));
  }

  function handleReset() {
    setSelected([]);
  }

  return (
    <main className="app-wrapper">
      <header className="app-header">
        <h1>Home Chef Meals</h1>
        <p>Browse meals from local chefs and build your order.</p>
      </header>
      <div className="app-grid">
        <MealList
          meals={allMeals}
          selected={selected}
          showAll={showAll}
          sortDir={sortDir}
          onAdd={handleAdd}
          onToggleAvail={() => setShowAll((v) => !v)}
          onToggleSort={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
        />
        <SelectedMeals
          selected={selected}
          sortDir={sortDir}
          onRemove={handleRemove}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}
