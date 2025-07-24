import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown'

import posts from '@/json/posts.json';

import PostConteudo from "@/componentes/postConteudo";
import PaginaPadrao from "@/componentes/paginaPadrao";
import NaoEncontrada from "../naoEncontrada";

import styles from "./postagem.module.css";
import PostsRecomendados from "@/componentes/PostsRecomendados";

export default function Postagem() {
  const {id} = useParams()

  const post = posts.find(post => post.id === Number(id))
  
  if (!post) {
    return <NaoEncontrada/>
  }

  const postsRecomendados = posts
    .filter(post => post.id !== Number(id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
  ;  
  
  return (
    <PaginaPadrao>
      <PostConteudo
        fotoCapa = {`/posts/${post.id}/capa.png`}
        titulo = {post.titulo}
      >
        <div className={styles.postMarkdownContainer}>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>
        <PostsRecomendados posts={postsRecomendados}/>
      </PostConteudo>
    </PaginaPadrao>
  )
}
