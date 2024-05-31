import { Outlet } from "react-router-dom";
import Navigate from "../components/Navigate";
import Separador from "../components/Separador";

export default function Layout() {
  return (
    <div>
      <Navigate />
      <Separador />
      <Outlet />
    </div>
  );
}