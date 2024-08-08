export function CategorySelector({ category, onChangeCategory }) {
  const categories = [
    { id: 0, value: "all", displayValue: "All" },
    { id: 1, value: "tech", displayValue: "Technology" },
    { id: 2, value: "home", displayValue: "Home" },
  ];
  return (
    <>
      <p>Select category:</p>

      <select
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
    </>
  );
}
