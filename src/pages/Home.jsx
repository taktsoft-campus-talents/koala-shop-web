import { PromoCard } from "../components/PromoCard";
// import { OfferList } from "../components/OfferList";
import "./Home.css";

export function Home() {
  return (
    <>
      <div className="homepage">
        <div className="homepage-content">
          <h2>The Koala-shop</h2>
          {/* <OfferList /> */}
          <div className="qrcode">
            Scan this code to get an exclusive disccount!
            <img src="src/assets/qrcode.png" alt="" />
          </div>
          <PromoCard
            product={{
              id: 1,
              title: "Koala Mug",
              description: "Description 1",
              price: 2400,
              image: "koala-mug.jpg",
              category: "Category 1",
              leftInStock: 10,
            }}
          />
        </div>
      </div>
    </>
  );
}
