export default function SelectedMeals({
  selected,
  sortDir,
  onRemove,
  onReset,
}) {
  const sorted = [...selected].sort((a, b) =>
    sortDir === "asc" ? a.price - b.price : b.price - a.price,
  );
  const total = selected.reduce((sum, m) => sum + m.price, 0);

  const prices = selected.map((m) => m.price);
  const minPrice = prices.length > 1 ? Math.min(...prices) : null;
  const maxPrice = prices.length > 1 ? Math.max(...prices) : null;

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">
          Selection <span className="count">({selected.length})</span>
        </h2>
        {selected.length > 0 && (
          <button className="btn btn-danger" onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      <div className="meal-list">
        {sorted.length === 0 ? (
          <p className="empty-state">No meals selected yet.</p>
        ) : (
          <>
            {sorted.map((meal) => (
              <div key={meal.id} className="sel-item">
                <div className="meal-info">
                  <p className="meal-name">{meal.name}</p>
                  <div className="meal-menu">
                    <span className="meal-price">₹{meal.price}</span>
                    {meal.price === minPrice && (
                      <span className="badge badge-min">cheapest</span>
                    )}
                    {meal.price === maxPrice && (
                      <span className="badge badge-max">priciest</span>
                    )}
                  </div>
                </div>
                <button
                  className="btn btn-remove"
                  onClick={() => onRemove(meal.id)}
                  aria-label={`Remove ${meal.name}`}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="total-row">
              <span className="total-label">Total</span>
              <span className="total-amount">₹{total}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
