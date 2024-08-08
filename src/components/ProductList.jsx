import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

const URL = import.meta.env.VITE_API_URL;

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

export function ProductList({ category, sortBy, sortOrder }) {
  const [products, setProducts] = useState([]);

  //fetch data from server api

  console.log(URL);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryQuery = category !== "all" ? `category=${category}&` : "";
        const sortByQuery = sortBy !== "default" ? `sort=${sortBy}&` : "";
        const sortOrderQuery = `order=${sortOrder}`;
        const response = await fetch(
          `${URL}/products?${categoryQuery}${sortByQuery}${sortOrderQuery}`
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setProducts(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(error.stack);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, sortBy, sortOrder]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> //i send each product to Alex`s component Card
      ))}
    </div>
  );
}
