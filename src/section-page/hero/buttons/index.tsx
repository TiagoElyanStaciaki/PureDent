import { CirclePlay } from 'lucide-react'
import styles from './buttons.module.css'

export default function Buttons () {

    const book = () => {

        const phoneNumber = '5599999999999'
        const text = 'Olá, gostaria de agendar uma consulta!'

        const url = `https://wa.me/${phoneNumber}?text=${text}`
        window.open(url, '_blank')
    }

    return (
        <div className={styles.containerBtns}>
            <button className={styles.appointment} type="button" onClick={book}>Agende sua consulta</button>
            <button className={styles.meet} type="button"><CirclePlay className={styles.icon} /> Conheça a clínica</button>
        </div>
    )
}