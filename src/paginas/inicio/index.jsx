import PostCard from '@/componentes/postCard'

import posts from '@/json/posts.json'

import styles from './inicio.module.css'

export default function Inicio() {
	return (
		<ul className={styles.posts}>
			{posts.map(post => (
				<li key={post.id}>
					<PostCard post={post}/>
				</li>
			))}
		</ul>
	)
}
