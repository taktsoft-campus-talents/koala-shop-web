import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export function RootLayout() {
  return (
    <>
      <Nav />
      <h1>The Koala Shop</h1>
      <Outlet />
    </>
  );
}
