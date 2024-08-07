import "./OfferList.css";

export const OfferList = ({ offers }) => {
  // OfferList expects 'offers' payload in the following format
  // [ { productId, productTitle }, ...]
  return (
    <>
      {offers && (
        <ul className="offer-list">
          {offers.map(({ productTitle }, i) => (
            <li key={i} className="offer-list-item">
              {productTitle}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
