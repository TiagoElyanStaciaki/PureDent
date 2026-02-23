import styles from './styles/cardTitle.module.css'

interface CardTitleProps {
    title: string
}

export function CardTitle ({ title: Title }: CardTitleProps) {
    return (
        <h1 className={styles.title}>{Title}</h1>
    )
}