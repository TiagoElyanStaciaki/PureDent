import styles from './styles/cardDescription.module.css'

interface CardDescriptionProps {
    description: string
}

export function CardDescription ({ description: Description }: CardDescriptionProps) {
    return (
        <p className={styles.desc}>{Description}</p>
    )
}