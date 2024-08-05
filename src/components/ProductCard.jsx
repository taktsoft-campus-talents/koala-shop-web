import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const { title, category, desc, img, price, stock } = product;
  // const ProductCard = () => {
  // Dummy data
  //   const title = "MSI GeForce RTX 4090 Gaming X Trio 24G";
  //   const category = "graphics cards";
  //   const desc = `24GB GDDR6X Memory, 384-bit, 21 Gbps.
  // The new GAMING models with TRI FROZR 3 ensure maximum performance when playing and creating content. With the stylish design and powerful features, gamers can get started.
  // MSI The GAMING series is the ideal graphics card for all gamers, including adventurers, esports participants, live streamers and many more. The GAMING range represents the spirit of gamers and the power of graphics cards with a stylish exterior.
  // Stay cool and quiet. The TRI Frozr 3 cooling design from MSI improves heat dissipation around the graphics card.
  // The fans are completely stopped so there is no noise when active cooling is not required. As soon as the temperature rises when playing, the fans automatically rotate again.`;
  //   const img = "https://m.media-amazon.com/images/I/81KR0fO8WgL._AC_SL1500_.jpg";
  //   const price = 2011.95;
  //   const stock = 0;
  return (
    <div className="product-card-container">
      <img className="product-img" src={img} alt={title} />
      <div
        className={stock > 0 ? "product-stock" : "product-stock out-of-stock"}
      >
        {stock > 0 ? `${stock} in stock` : "out of stock"}
      </div>
      <h5 className="product-category">{category}</h5>
      <h2 className="product-title">{title}</h2>
      <div className="product-cart-row">
        <h3 className="product-price">Price: €{price}</h3>
        <button className="button-primary">Add to cart</button>
      </div>
      <ul className="product-desc">
        {desc.split("\n").map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};
