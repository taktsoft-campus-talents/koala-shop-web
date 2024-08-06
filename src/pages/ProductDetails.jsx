import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/utils";
import "./ProductDetails.css";

const URL = import.meta.env.VITE_API_URL;

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${URL}/products/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!product) {
    return <div className="error-message">Product not found.</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.img}
        alt={product.title}
        className="product-details-image"
      />
      <h1 className="product-details-title">{product.title}</h1>
      <p className="product-details-price">
        Price: {formatPrice(product.price)}
      </p>
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
