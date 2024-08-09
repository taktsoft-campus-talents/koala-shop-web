import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import "../styles/globalStyles.css";

export function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
