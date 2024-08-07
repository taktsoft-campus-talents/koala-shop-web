import "./Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
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
    </nav>
  );
}
