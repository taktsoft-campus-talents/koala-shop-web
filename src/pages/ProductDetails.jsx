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
        src={product.img}
        alt={product.title}
        className="product-details-image"
      />
      <h1 className="product-details-title">{product.title}</h1>
      <p className="product-details-price">Price: €{product.price}</p>
      <p className="product-details-description">{product.description}</p>
      <div
        className={
          product.leftInStock > 0
            ? "product-details-stock"
            : "product-details-stock out-of-stock"
        }
      >
        {product.leftInStock > 0
          ? `${product.leftInStock} in stock`
          : "out of stock"}
      </div>
    </div>
  );
}
