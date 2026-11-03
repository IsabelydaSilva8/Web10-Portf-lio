import styles from "./CardMedia.module.css";

interface CardMediaProps {
  tipo: 'foto' | 'video';
  url: string;
  legenda: string;
}

export default function CardMedia({ tipo, url, legenda }: CardMediaProps) {
  
  if (tipo === 'video') {
    return (
        <div className={styles["card"]}>
            <video className={styles["card-content"]}
                src={url}
                autoPlay    // Toca sozinho assim que carrega
                loop        // Toca sem parar (reinicia quando acaba)
                muted       // Obrigatório! Se não for mudado, o navegador bloqueia o autoplay
                playsInline // Importante para o vídeo não abrir em tela cheia no iPhone
            />
        </div>
    );
  }

  // Se não for vídeo, renderiza a imagem padrão
  return (
    <div className={styles["card"]}>
        <img className={styles["card-content"]}
        src={url} 
        alt={legenda} 
        style={{ width: '100%', display: 'block', objectFit: 'cover' }} 
        />
    </div>
  );
}
