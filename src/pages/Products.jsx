import { ProductList } from "../components/ProductList";
import "./Products.css";
import { Filter } from "../components/Filter";
import { useState } from "react";

export function Products() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [sortOrder, setSortOrder] = useState("ascending");
  function handleChangeCategory(newCategory) {
    setCategory(newCategory);
  }
  function handleChangeSortBy(newSortBy) {
    setSortBy(newSortBy);
  }
  function handleChangeSortOrder(newSortOrder) {
    setSortOrder(newSortOrder);
  }
  return (
    <div className="products">
      <h2>Products</h2>
      <Filter
        category={category}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onChangeCategory={handleChangeCategory}
        onChangeSortBy={handleChangeSortBy}
        onChangeSortOrder={handleChangeSortOrder}
      />
      <ProductList category={category} sortBy={sortBy} sortOrder={sortOrder} />
    </div>
  );
}
