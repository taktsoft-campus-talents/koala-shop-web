import "./PromoCard.css";

export const PromoCard = ({ offer }) => {
  const { title, image, price } = offer;

  return (
    <div className="special-offer-container">
      <div className="special-offer-card">
        <img src={image} alt="Offer 1" className="offer-image" />
        <div className="offer-details">
          <h2 className="offer-title">{title}</h2>
          <p className="offer-price">{price}</p>
        </div>
      </div>
    </div>
  );
};
