import styles from "./rodape.module.css";
import MarcaRegistrada from '@/assets/marca_registrada.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={MarcaRegistrada} alt="Marca registrada"/>
      Desenvolvido por Thyago Ramon e Alura.
    </footer>
  )
}
