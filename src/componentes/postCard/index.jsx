import { Link } from "react-router";
import styles from "./postCard.module.css";
import BotaoPrincipal from "../botaoPrincipal";

export default function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  )
}
