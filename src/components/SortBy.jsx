export function SortBy({ sortBy, onChangeSortBy }) {
  const pricing = [
    { id: 0, value: "default", displayValue: "Default" },
    { id: 1, value: "price", displayValue: "Price" },
    { id: 2, value: "title", displayValue: "Product name" },
  ];
  return (
    <>
      <p>Sort by:</p>

      <select
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
    </>
  );
}
