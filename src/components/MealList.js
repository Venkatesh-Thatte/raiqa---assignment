import MealCard from "./MealCard";

export default function MealList({
  meals,
  selected,
  showAll,
  sortDir,
  onAdd,
  onToggleAvail,
  onToggleSort,
}) {
  const filtered = showAll ? meals : meals.filter((m) => m.isAvailable);
  const sorted = [...filtered].sort((a, b) =>
    sortDir === "asc" ? a.price - b.price : b.price - a.price,
  );

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">
          Meals <span className="count">({sorted.length})</span>
        </h2>
        <div className="controls">
          <button
            className={`btn ${!showAll ? "btn-active" : ""}`}
            onClick={onToggleAvail}
          >
            {showAll ? "Show available only" : "Show all meals"}
          </button>
          <button className="btn btn-active" onClick={onToggleSort}>
            Price: {sortDir === "asc" ? "Low → High" : "High → Low"}
          </button>
        </div>
      </div>

      <div className="meal-list">
        {sorted.length === 0 ? (
          <p className="empty-state">No meals to display.</p>
        ) : (
          sorted.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              isSelected={selected.some((s) => s.id === meal.id)}
              onAdd={onAdd}
            />
          ))
        )}
      </div>
    </section>
  );
}
