import { Outlet } from "react-router-dom";
import Navigate from "../components/Navigate";

export default function Layout() {
  return (
    <div>
      <Navigate />
      <Outlet />
    </div>
  );
}