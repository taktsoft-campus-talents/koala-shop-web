import "./OfferList.css";
import { useEffect, useState } from "react";
const URL = import.meta.env.VITE_API_URL;

export const OfferList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(`${URL}/offers`);
        const data = await response.json();
        if (response.ok) {
          setOffers(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      // Dummy data
      // setOffers([
      //   { productId: 1, productTitle: "Awesome product" },
      //   { productId: 2, productTitle: "Awesome product XS" },
      //   { productId: 3, productTitle: "Awesome product XXL" },
      // ]);
    };

    fetchOffers();
  }, []);

  // Payload format: [ { productId, productTitle }, ...]
  return (
    <div className="offer-list-container">
      <h3>Special offers:</h3>
      {offers.length > 0 && (
        <ul className="offer-list">
          {offers.map(({ productTitle }, i) => (
            <li key={i} className="offer-list-item">
              {productTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
