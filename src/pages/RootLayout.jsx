import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import "../styles/globalStyles.css";
import "./RootLayout.css";

export function RootLayout() {
  return (
    <>
      <Nav />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}
