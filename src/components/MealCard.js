export default function MealCard({ meal, isSelected, onAdd }) {
  return (
    <div
      className={`meal-card ${!meal.isAvailable ? "unavailable" : ""} ${
        isSelected ? "selected" : ""
      }`}
    >
      <div className="meal-info">
        <h3 className="meal-name">{meal.name}</h3>
        <div className="meal-menu">
          <span className="meal-price">₹{meal.price}</span>
          <span
            className={`badge ${meal.isAvailable ? "badge-available" : "badge-unavailable"}`}
          >
            {meal.isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
      <button
        className="btn btn-add"
        onClick={() => onAdd(meal)}
        disabled={!meal.isAvailable || isSelected}
        aria-label={`Add ${meal.name} to selection`}
      >
        {isSelected ? "Added" : "+ Add"}
      </button>
    </div>
  );
}
