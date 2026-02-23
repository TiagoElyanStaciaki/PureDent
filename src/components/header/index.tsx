import styles from './header.module.css'

export default function Header() {
    return (
        <section className={styles.sectionHeader}>
            <div className={styles.headerComponent}>
                <div className={styles.pureDent}>
                    <h1>PURE DENT</h1>
                    <h2>Odontologia</h2>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Avaliação</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}