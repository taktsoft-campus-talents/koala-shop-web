import "./Nav.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

export function Nav() {
  const { user, logout } = useContext(UserContext);
  const [name, setName] = useState("");
  const { login } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    login(name);
  }

  return user ? (
    <nav className="navbar">
      <div className="logo">🐨</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#cart">Cart 🛒</a>
        </li>
      </ul>

      <div>Logged in as {user}</div>
      <button onClick={logout}>Log out</button>
    </nav>
  ) : (
    <>
      <nav className="navbar">
        <div className="logo">🐨</div>
        <ul className="navbar-links">
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="#deals">Deals</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#cart">Cart 🛒</a>
          </li>
        </ul>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Log in</button>
          Your name: {name}
        </form>
      </nav>
    </>
  );
}
