import type { ElementType } from "react"
import styles from './styles/cardIcon.module.css'

interface CardIconProps  {
    icon: ElementType
}

export function CardIcon ({ icon: Icon }: CardIconProps) {
    return (
        <div className={styles.bgIcon}>
            <Icon />
        </div>
    )
}