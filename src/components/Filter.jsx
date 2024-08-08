import { CategorySelector } from "./CategorySelector";
import { SortBy } from "./SortBy";
import { SortOrder } from "./SortOrder";
import "./Filter.css";

export function Filter({
  category,
  sortBy,
  sortOrder,
  onChangeCategory,
  onChangeSortBy,
  onChangeSortOrder,
}) {
  return (
    <>
      <div className="filter">
        <CategorySelector
          category={category}
          onChangeCategory={onChangeCategory}
        />
        <SortBy sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
        <SortOrder
          sortOrder={sortOrder}
          onChangeSortOrder={onChangeSortOrder}
        />
      </div>
    </>
  );
}
