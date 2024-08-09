import "./PromoCard.css";
import { formatPrice } from "../utils/utils";

const imagePath = import.meta.env.VITE_IMG_PATH;

export const PromoCard = ({ product }) => {
  const { title, image, price } = product;

  console.log(image);
  console.log(`${imagePath}/${image}`);
  return (
    <div className="special-offer-container">
      <div className="special-offer-card">
        <img
          src={`${imagePath}/${image}`}
          alt="Offer 1"
          className="offer-image"
        />
        <div className="offer-details">
          <h2 className="offer-title">{title}</h2>
          <h3 className="product-price">Price: {formatPrice(product.price)}</h3>
        </div>
      </div>
    </div>
  );
};
