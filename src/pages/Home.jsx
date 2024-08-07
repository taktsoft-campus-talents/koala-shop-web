import { PromoCard } from "../components/PromoCard";
import "./Home.css";

export function Home() {
  return (
    <>
      <div className="homepage">
        <div className="homepage-content">
          <h2>Home</h2>
          <PromoCard
            offer={{
              id: 1,
              title: "Laptop",
              description: "Description 1",
              price: 500,
              image: "image1.jpg",
              category: "Category 1",
              leftInStock: 10,
            }}
          />
        </div>
      </div>
    </>
  );
}
