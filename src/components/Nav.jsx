import "./Nav.css";

export function Nav() {
  return (
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
          <a href="#cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
}
