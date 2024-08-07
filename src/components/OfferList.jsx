import "./OfferList.css";
import { useEffect, useState } from "react";
import { PromoCard } from "./PromoCard";
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
      //   { productId: 1, title: "Awesome product", image: "https://tangelocat.com/koala-shop/koala-t-shirt.jpg", price: 1000 },
      //   { productId: 2, title: "Awesome product XS", image: "https://tangelocat.com/koala-shop/koala-t-shirt.jpg", price: 900  },
      //   { productId: 3, title: "Awesome product XXL", image: "https://tangelocat.com/koala-shop/koala-t-shirt.jpg", price: 1150  },
      // ]);
    };

    fetchOffers();
  }, []);

  // Expected payload format: [ { productId, title, image, price }, ...]
  return (
    <div className="offer-list-container">
      <h3>Special offers:</h3>
      {offers.length > 0 && (
        <ul className="offer-list">
          {offers.map((offer) => (
            <PromoCard key={offer.productId} offer={offer} />
          ))}
        </ul>
      )}
    </div>
  );
};
