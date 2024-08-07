import "./Nav.css";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const { user, logout, login } = useContext(UserContext);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    login(name);
    setName("");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://tangelocat.com/koala-shop/koala-kawai-logo.png" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="#">Deals</Link>
        </li>
        <li>
          <Link to="#">About Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      {user ? (
        <>
          <div>Logged in as {user}</div>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      )}
    </nav>
  );
}
