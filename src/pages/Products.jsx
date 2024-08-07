import { ProductList } from "../components/ProductList";
import "./Products.css";

export function Products() {
  return (
    <div className="products">
      <h2>Products</h2>
      <ProductList />
    </div>
  );
}
