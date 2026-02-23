import Buttons from './buttons'
import styles from './hero.module.css'
import Patients from './patients'
import Seal from './seal'

export default function Hero () {
    return (
        <section className={styles.sectionHero}>
            <div className={styles.bgGradient}>
                <div className={styles.containerContent}>
                    <Seal/>
                    <div className={styles.title}>
                        <h1>Sorrisos modernos</h1>
                        <h2>começam aqui.</h2>
                    </div>
                    <p>Tecnologia, estética e cuidado humano para transformar seu sorriso com segurança e excelência.</p>
                    <div className={styles.containerBtns}>
                        <Buttons/>
                    </div>
                    <Patients/>
                </div>
            </div>
        </section>
    )
}