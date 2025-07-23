import { Link } from "react-router";

import MenuLink from "../menuLink";

import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink url='/'>Início</MenuLink>
        <MenuLink url='/sobre'>Sobre</MenuLink>
      </nav>
    </header>
  );
}
