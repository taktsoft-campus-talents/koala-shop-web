import { PromoCard } from "../components/PromoCard";
import "./Home.css";
import QRCode from "qrcode";

export function Home() {
  const generateQR = async (text) => {
    try {
      console.log(await QRCode.toDataURL(text));
    } catch (err) {
      console.error(err);
    }
  };
  console.log(generateQR);
  return (
    <>
      <div className="homepage">
        <div className="homepage-content">
          <h2>Home</h2>
          <p>Scan this code to get a exclusive offer:</p>
          <img src="out.png" />
          <canvas id="canvas"></canvas>

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
        </div>
      </div>
    </>
  );
}
