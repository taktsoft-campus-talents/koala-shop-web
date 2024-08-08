import { ProductList } from "../components/ProductList";
import "./Products.css";
import { CategorySelector } from "../components/CategorySelector";
import { PriceSorting } from "../components/PriceSorting";

export function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <CategorySelector></CategorySelector>
      <PriceSorting />
      <ProductList />
    </div>
  );
}
