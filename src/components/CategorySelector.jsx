import "./FilterOptions.css";
export function CategorySelector({ category, onChangeCategory }) {
  const categories = [
    { id: 0, value: "all", displayValue: "All" },
    { id: 1, value: "tech", displayValue: "Technology" },
    { id: 2, value: "home", displayValue: "Home" },
  ];
  return (
    <div className="filter-option">
      <label htmlFor="category-select">
        <p>
          <span className="desktop">Select category:</span>
          <span className="mobile">Category:</span>
        </p>
      </label>

      <select
        id="category-select"
        value={category}
        onChange={(event) => {
          onChangeCategory(event.target.value);
        }}
      >
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.value}>
              {category.displayValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}
