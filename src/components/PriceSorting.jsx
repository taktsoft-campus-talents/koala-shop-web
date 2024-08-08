import { useState } from "react";
export function PriceSorting() {
  const [sorting, setSorting] = useState(null);
  const pricing = [
    { id: 0, value: "" },
    { id: 1, value: "lower price first" },
    { id: 2, value: "higher price first" },
  ];
  return (
    <>
      <p>Sort by price:</p>

      <select
        value={sorting}
        onChange={(event) => {
          setSorting(event.target.value);
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
