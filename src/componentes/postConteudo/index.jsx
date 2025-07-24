import styles from "./postConteudo.module.css";

export default function PostConteudo({fotoCapa, titulo, children}) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{backgroundImage: `url(${fotoCapa})`}}
      ></div>
      <h2 className={styles.titulo}>
        {titulo}
      </h2>
      <div className={styles.postConteudoContainer}>
        {children}
      </div>
    </article>
  )
}
