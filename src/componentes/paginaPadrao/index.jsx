import { Outlet } from "react-router";
import Banner from "../banner";
import styles from "./paginaPadrao.module.css";

export default function PaginaPadrao() {
  return (
    <main>
      <Banner/>
      <Outlet/>
    </main>
  )
}
