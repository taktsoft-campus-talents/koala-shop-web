import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export function ProductList() {
  const [products, setProducts] = useState([
    {
      title: "Kühlschrank",
      category: "Technik",
      desc: "hält sehr kühl. wichtig für Eis",
      img: "https://m.media-amazon.com/images/I/81If+KcnIkL._AC_UF894,1000_QL80_.jpg",
      price: 350.0,
      stock: 4,
    },
    {
      title: "Schuhe",
      category: "Mode",
      desc: "für an die Füsse. halten warm",
      img: "https://m.media-amazon.com/images/I/81If+KcnIkL._AC_UF894,1000_QL80_.jpg",
      price: 120.0,
      stock: 16,
    },
  ]);

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
