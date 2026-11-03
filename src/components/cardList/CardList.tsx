import { useNavigate } from 'react-router-dom';
import { ButtonRealistc } from '../buttonRealistc/ButtonRealistc';
import styles from './CardList.module.css';

// 1. Criamos as interfaces para o TypeScript entender a estrutura do seu JSON
interface Media {
  type: 'video' | 'image' | string;
  url: string;
}

interface ProjectType {
  id: number;
  title: string;
  description: string;
  media: Media[];
}

interface CardListProps {
  projects: ProjectType; // Agora o TS reconhece este tipo
}

export default function CardList({ projects }: CardListProps) {
  const navigate = useNavigate();
  // Verificação de segurança caso o array de mídia esteja vazio
  const primaryMedia = projects.media?.[0];

  if (!primaryMedia) return null;

  return (
    <>
      <div className={styles["card-realistc"]}>
        <div className={styles["card-left"]}>
          {primaryMedia.type === 'video' ? (
            <video className={styles["card-media"]} src={primaryMedia.url} autoPlay loop muted playsInline />
          ) : (
            <img className={styles["card-media"]} src={primaryMedia.url} alt={projects.title} />
          )}
        </div>
        <div className={styles["card-right"]}>
          <h2 className={styles["card-titulo"]}>{projects.title}</h2>
          <p className={styles["card-conteudo"]}>{projects.description}</p>
          <div>
            <ButtonRealistc 
              texto="Saiba mais" 
              onClick={() => {
                navigate(`/project/${projects.id}`);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
