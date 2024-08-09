import "./FilterOptions.css";
export function SortOrder({ sortOrder, onChangeSortOrder }) {
  const pricing = [
    { id: 0, value: "ascending", displayValue: "ascending" },
    { id: 1, value: "descending", displayValue: "descending" },
  ];
  return (
    <div className="filter-option">
      <label htmlFor="sort-select">
        <p>
          <span className="desktop">Sort order:</span>
          <span className="mobile">Order:</span>
        </p>
      </label>
      <select
        id="sort-select"
        value={sortOrder}
        onChange={(event) => {
          onChangeSortOrder(event.target.value);
        }}
      >
        {pricing.map((order) => {
          return (
            <option key={order.id} value={order.value}>
              {order.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
