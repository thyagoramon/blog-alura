import { Children } from "react";
import { Link, useLocation } from "react-router";

import styles from "./menuLink.module.css";

export default function MenuLink({children, url}) {
  const localizacao = useLocation()
  
  return (
    <Link
      className={`
        ${styles.link}
        ${localizacao.pathname === url ? styles.linkDestacado : ''}
      `}
      to={url}
    >{children}</Link>
  )
}
