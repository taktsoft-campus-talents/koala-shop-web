import { useState } from "react";

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
    </>
  );
}
