import CardList from '../../components/cardList/CardList.tsx';
import { projects } from '../../data/projects.ts';


export default function ListWeb() {
    const listWeb = projects.filter(project => project.category === 'web');

    return(
        <div>
            {listWeb.map((item) => (
                <CardList key={item.id} projects={{
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    media: item.media
                }} />
            ))}
        </div>
    )
}