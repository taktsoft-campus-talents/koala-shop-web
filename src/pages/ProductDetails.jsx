import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import "./ProductDetails.css";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const URL = "http://localhost:3000"; // replace with the actual api URL later

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${URL}/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        className="product-details-image"
      />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
