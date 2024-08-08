import { ProductList } from "../components/ProductList";
import "./Products.css";
import { Filter } from "../components/Filter";

export function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <Filter />
      <ProductList />
    </div>
  );
}
