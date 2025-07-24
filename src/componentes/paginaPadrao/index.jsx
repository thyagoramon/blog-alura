import { Outlet } from "react-router";
import Banner from "../banner";

export default function PaginaPadrao({children}) {
  return (
    <main>
      <Banner/>
      <Outlet/>
      {children}
    </main>
  )
}
