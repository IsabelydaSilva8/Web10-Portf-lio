import CardList from '../../components/cardList/CardList.tsx';
import { projects } from '../../data/projects.ts';


export default function ListMob() {
    const listMobile = projects.filter(project => project.category === 'mob');

    return(
        <div>
            {listMobile.map((item) => (
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