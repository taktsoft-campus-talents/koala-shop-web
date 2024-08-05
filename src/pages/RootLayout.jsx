import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <h1>The Koala Shop</h1>
      <Outlet />
    </>
  );
}
