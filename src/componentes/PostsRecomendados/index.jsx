import PostCard from "../postCard";
import styles from "./PostsRecomendados.module.css";

export default function PostsRecomendados({posts}) {
  return (
    <div>
      <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
      <ul className={styles.postsRecomendados}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
