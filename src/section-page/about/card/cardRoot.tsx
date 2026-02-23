import type { ReactNode } from "react";
import styles from './styles/cardRoot.module.css'

interface CardRootProps {
    children: ReactNode
}

export function CardRoot ({ children }: CardRootProps) {
    return (
        <div className={styles.cardRoot}>
            {children}
        </div>
    )
}