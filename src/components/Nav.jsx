import "./Nav.css";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.length;
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
        <img
          src="https://tangelocat.com/koala-shop/koala-logo-cropped.png"
          alt="logo from koala-shop"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="#" activeClassName="active">
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink to="#" activeClassName="active">
            About Us
          </NavLink>
        </li> */}
        <li>
          <NavLink className="cart-link" to="/cart" activeClassName="active">
            Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </NavLink>
        </li>
      </ul>
      {user ? (
        //Log out
        <div className="login-container">
          <div className="logout">
            {user}
            <button onClick={logout}>Log out</button>
          </div>
        </div>
      ) : (
        //Log in
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            id="name-input"
            value={name}
            minLength="3"
            maxLength="10"
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="name-input">
            <button type="submit">Log in</button>
          </label>
        </form>
      )}
    </nav>
  );
}
