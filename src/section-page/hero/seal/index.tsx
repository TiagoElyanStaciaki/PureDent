import { BadgeCheck } from 'lucide-react'
import styles from './seal.module.css'

export default function Seal() {
    return (
        <div className={styles.sealBg}>
            <BadgeCheck className={styles.icon}/>
            <p>Exelência em odontologia</p>
        </div>
    )
}