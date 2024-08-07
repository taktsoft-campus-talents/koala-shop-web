// import { useContext, useState } from "react";
import { PromoCard } from "../components/PromoCard";
// import { UserContext } from "../context/UserContext";

export function Home() {
  // const [name, setName] = useState("");
  // const { login } = useContext(UserContext);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   login(name);
  // }

  return (
    <>
      <h2>Home</h2>

      {/* <form action="" onSubmit={(event) => handleSubmit(event)}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button type="submit">Log in</button>
        Your name: {name}
      </form> */}
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
