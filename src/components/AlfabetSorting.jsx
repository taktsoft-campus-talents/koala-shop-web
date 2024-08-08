import { useState } from "react";
export function AlfabetSorting() {
  const [alfSorting, setAlfSorting] = useState(null);
  const pricing = [
    { id: 0, value: "" },
    { id: 1, value: "a to z" },
    { id: 2, value: "z to a" },
  ];
  return (
    <>
      <p>Sort by name:</p>

      <select
        value={alfSorting}
        onChange={(event) => {
          setAlfSorting(event.target.value);
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
