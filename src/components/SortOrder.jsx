export function SortOrder({ sortOrder, onChangeSortOrder }) {
  const pricing = [
    { id: 0, value: "ascending", displayValue: "ascending" },
    { id: 1, value: "descending", displayValue: "descending" },
  ];
  return (
    <>
      <p>Sort order:</p>
      <select
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
    </>
  );
}
