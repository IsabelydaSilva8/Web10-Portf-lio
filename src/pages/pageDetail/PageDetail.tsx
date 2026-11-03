import { useNavigate, useParams } from 'react-router-dom';
import CardDescription from '../../components/cardDescription/CardDescription';
import CardLink from '../../components/cardLink/CardLink';
import CardMedia from '../../components/cardMedia/CardMedia';
import { projects } from '../../data/projects';
import styles from './PageDetail.module.css';

export default function PageDetail() {
  // Captura o parâmetro ":id" da URL
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Busca o projeto correspondente no array global usando o ID recebido
  const project = projects.find(p => p.id === Number(id));

  // SE O PROJETO NÃO FOR ENCONTRADO: Mostra mensagem de erro com segurança
  if (!project) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Projeto não encontrado!</h2>
        <button
          onClick={() => navigate(-1)}
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}
        >
          ← Voltar para a página anterior
        </button>
      </div>
    );
  }

  // SE O PROJETO EXISTIR: O código continua aqui embaixo com total segurança do TS
  return (
    <div>
      <button onClick={() => navigate(-1)} >
        ← Voltar
      </button>

      <header>
        <span>
          {project.category}
        </span>
        <h1 style={{ marginTop: '0.5rem' }}>{project.title}</h1>
        <CardDescription title={project.description} />
      </header>

      <div className={styles["full-screen"]}>
        <div className={styles["left-screen"]}>
          {project.media && project.media.map((item, index) => (
            <CardMedia
              key={index}
              tipo={item.type === 'video' ? 'video' : 'foto'} // Converte 'image'/'photo' para 'foto' se necessário
              url={item.url}
              legenda={`${project.title} - mídia ${index + 1}`}
            />
          ))}
        </div>
        <div className={styles["right-screen"]}>
          <CardLink url={project.gitHubUrl} />

          <CardDescription title='Sobre o Desenvolvimento' text={project.cardDescription} />
        </div>
      </div>
    </div>
  );
}

