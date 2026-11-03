import styles from "./CardLink.module.css";

interface CardLinkProps {
  url: string;
}

export default function CardLink({ url }: CardLinkProps) {
  // Adicionado o return para o HTML ser renderizado na tela
  return (
    <div className={styles["card"]}>
      <a 
        className={styles["card-text"]} 
        href={url}
        target="_blank" 
        rel="noopener noreferrer"
      >
        Ver Repositório no GitHub
      </a>
    </div>
  );
}
