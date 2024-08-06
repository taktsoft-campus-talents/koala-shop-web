import { useState } from "react";
import { PromoCard } from "../components/PromoCard";

export function Home() {
  const [name, setName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h2>Home</h2>
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <input onChange={(event) => setName(event.target.value)} />
        <button type="submit">Log in</button>
        Your name: {name}
      </form>
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
    </>
  );
}
