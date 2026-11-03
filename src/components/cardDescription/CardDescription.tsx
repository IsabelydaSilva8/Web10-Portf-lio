import styles from './CardDescription.module.css';

interface ProjectType{
    title: string;
    text?: string;
}

export default function CardDescription({ text, title }: ProjectType) {
    return (
        <div className={styles["card"]}>
            <h2 className={styles["card-title"]}>{title}</h2>
            <p className={styles["card-text"]}>{text}</p>
        </div>
    )
}