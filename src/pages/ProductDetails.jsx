import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/utils";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";
import { Breadcrumb } from "../components/Breadcrumb";

const URL = import.meta.env.VITE_API_URL;
const imagePath = import.meta.env.VITE_IMG_PATH;

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${URL}/products/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); //check if data is correct

        if (Array.isArray(data) && data.length > 0) {
          const product = data[0]; // Access the first product in the array
          setProduct(product);
        } else {
          console.error("Product data is not in the expected format.");
        }
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
  const handleAddToCart = () => {
    if (product && product.leftinstock > 0) {
      addProductToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        leftInStock: product.leftinstock,
      });
    }
  };

  return (
    <div className="product-details">
      {product && (
        <>
          <Breadcrumb
            links={[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: `/products/${id}`, label: product.title },
            ]}
          />
          <h1 className="product-details-title">{product.title}</h1>
          <div className="product-details-container">
            <div className="product-details-image-container">
              <img
                src={`${imagePath}/${product.image}`}
                alt={product.title}
                className="product-details-image"
              />
            </div>
            <div className="product-details-info">
              <div
                className={
                  product.leftinstock > 0
                    ? "product-details-stock"
                    : "product-details-stock out-of-stock"
                }
              >
                {product.leftinstock > 0
                  ? `${product.leftinstock} in stock`
                  : "Out of stock"}
              </div>
              <p className="product-details-price">
                Price:{" "}
                {product.price
                  ? formatPrice(product.price)
                  : "Price not available"}
              </p>
              <div className="product-details-description">
                <p className="description">
                  <strong>Description:</strong>
                </p>
                <p className="description">{product.description}</p>
              </div>
              <p className="product-details-delivery">
                Delivery in 2-5 days 📦
              </p>
              <button
                className="button-primary-details"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
