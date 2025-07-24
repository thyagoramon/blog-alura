import { NavLink } from "react-router";

import styles from "./menuLink.module.css";

export default function MenuLink({children, url}) {  
  return (
    <NavLink
      className={({isActive}) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ''}
      `}
      to={url}
      end
    >
      {children}
    </NavLink>
  )
}
