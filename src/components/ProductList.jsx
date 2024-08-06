import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

const URL = import.meta.env.VITE_API_URL; // get url from Henning

// const dummyData = [
//   {
//     title: "Kühlschrank",
//     category: "Technik",
//     description: "hält sehr kühl. wichtig für Eis",
//     img: "https://m.media-amazon.com/images/I/81If+KcnIkL._AC_UF894,1000_QL80_.jpg",
//     price: 350.0,
//     leftInStock: 4,
//   },
//   {
//     title: "Schuhe",
//     category: "Mode",
//     description: "für an die Füsse. halten warm",
//     img: "https://m.media-amazon.com/images/I/81If+KcnIkL._AC_UF894,1000_QL80_.jpg",
//     price: 120.0,
//     leftInStock: 16,
//   },
// ];

export function ProductList() {
  const [products, setProducts] = useState([]);

  //fetch data from server api

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${URL}/products`);
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          console.log(data);
        }
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
