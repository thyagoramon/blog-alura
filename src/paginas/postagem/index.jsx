import { useParams } from "react-router";
import ReactMarkdown from 'react-markdown'

import posts from '@/json/posts.json';

import PostConteudo from "@/componentes/postConteudo";

import styles from "./postagem.module.css";

export default function Postagem() {
  const {id} = useParams()

  const post = posts.find(post => post.id === Number(id))

  
  return (
    <PostConteudo
      fotoCapa = {`/posts/${post.id}/capa.png`}
      titulo = {post.titulo}
    >
      <div className={styles.postMarkdownContainer}>
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostConteudo>
  )
}
