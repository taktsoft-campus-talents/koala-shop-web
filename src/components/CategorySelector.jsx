import { useState } from "react";
export function CategorySelector() {
  const [cat, setCat] = useState(null);
  const categories = [
    { id: 0, value: "" },
    { id: 1, value: "tech" },
    { id: 2, value: "home" },
  ];
  return (
    <>
      <p>Select category:</p>

      <select
        value={cat}
        onChange={(event) => {
          setCat(event.target.value);
        }}
      >
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.value}>
              {category.value}
            </option>
          );
        })}
      </select>
    </>
  );
}
