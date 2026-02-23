import styles from './patients.module.css'

export default function Patients () {
    return (
        <div className={styles.containerPatients}>
            <div className={styles.imgPatients}>
                <div className={styles.patient1}></div>
                <div className={styles.patient2}></div>
                <div className={styles.patient3}></div>
            </div>
            <p>+2.000 pacientes satisfeitos</p>
        </div>
    )
}