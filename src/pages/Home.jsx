import { PromoCard } from "../components/PromoCard";

export function Home() {
  return (
    <div>
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
  );
}
