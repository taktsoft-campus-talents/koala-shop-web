import { useState } from "react";
import { CategorySelector } from "./CategorySelector";
import { PriceSorting } from "./PriceSorting";
import { AlfabetSorting } from "./AlfabetSorting";
import "./Filter.css";

export function Filter() {
  const [filter, setFilter] = useState([null]);
  const filters = [
    { id: 0, value: "select a filter" },
    { id: 1, value: "by category" },
    { id: 2, value: "by price" },
    { id: 3, value: "by name" },
  ];
  let selector = null;
  {
    if (filter == "by category") {
      selector = <CategorySelector />;
    } else if (filter == "by price") {
      selector = <PriceSorting />;
    } else if (filter == "by name") {
      selector = <AlfabetSorting />;
    }
  }
  return (
    <>
      <div className="filter">
        <p>Filter:</p>
        <select
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
            console.log(event.target.value);
          }}
        >
          {filters.map((filterCat) => {
            return (
              <option key={filterCat.id} value={filterCat.value}>
                {filterCat.value}
              </option>
            );
          })}
        </select>
        {selector}
      </div>
    </>
  );
}
