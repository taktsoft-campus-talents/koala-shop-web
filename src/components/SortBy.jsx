import "./FilterOptions.css";
export function SortBy({ sortBy, onChangeSortBy }) {
  const pricing = [
    { id: 0, value: "default", displayValue: "Default" },
    { id: 1, value: "price", displayValue: "Price" },
    { id: 2, value: "title", displayValue: "Product name" },
  ];
  return (
    <div className="filter-option">
      <label htmlFor="sortby-select">
        <p>
          <span className="desktop">Sort by:</span>
          <span className="mobile">Sort:</span>
        </p>
      </label>

      <select
        id="sortby-select"
        value={sortBy}
        onChange={(event) => {
          onChangeSortBy(event.target.value);
        }}
      >
        {pricing.map((order) => {
          return (
            <option key={order.id} value={order.value}>
              {order.displayValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}
