import { Link, useParams } from 'react-router-dom';
import CardList from '../../components/cardList/CardList';
import { projects } from '../../data/projects.ts';
import type { Project } from '../../data/types';

const listProject = projects as Project[];

export default function ListMW(){
    const { category } = useParams<{ category: string }>();

    const filteredProject = listProject.filter(
        (project) => project.category.toLowerCase() === category?.toLowerCase());
    
    return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#0066cc', fontWeight: 'bold' }}>
        ⬅ Voltar para a Home
      </Link>
      
      <h1 style={{ textTransform: 'uppercase', marginTop: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        Projetos {category}
      </h1>

      {filteredProject.length === 0 ? (
        <p style={{ marginTop: '20px', color: '#666' }}>Nenhum projeto encontrado nesta categoria.</p>
      ) : (
        <div >
          {filteredProject.map((item) => (
            // CORREÇÃO: O objeto enviado em 'projects' agora inclui o 'id' que estava faltando
            <CardList key={item.id} projects={{
                id: item.id ?? 0,
                title: item.title,
                description: item.description,
                media: item.media
            }} />
          ))}
        </div>
      )}
    </div>
  );
}
