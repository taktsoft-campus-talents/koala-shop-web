import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export function ProductList() {
  const [products, setProducts] = useState([]);

  //fetch data from server api
  const URL = "http://...."; // get url from Henning
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> //i send each product to Alex`s component Card
      ))}
    </div>
  );
}
