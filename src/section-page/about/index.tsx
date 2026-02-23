import { CircleStar, Cpu, Heart, ShieldUser } from 'lucide-react'
import styles from './about.module.css'
import { Card } from './card'

export default function About() {

    return (
        <section className={styles.sectionAbout}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutTitle}>
                    <h1>Por que escolher nossa clínica?</h1>
                    <p>Unimos a melhor tecnologia do mercado com um time de especialistas dedicados ao seu bem-estar.</p>
                </div>
                <div className={styles.cards}>  
                    <div>
                        <Card.Root>
                            <Card.Icon icon={Cpu} />
                            <Card.Title title='Tecnologia de ponta'/>
                            <Card.Description description='Equipamentos digitais modernos para diagnósticos precisos.'/>
                        </Card.Root>
                    </div>

                    <div>
                        <Card.Root>
                            <Card.Icon icon={CircleStar} />
                            <Card.Title title='Time Especializado'/>
                            <Card.Description description='Time de especialistas altamente qualificados e atualizados.'/>
                        </Card.Root>
                    </div>

                    <div>
                        <Card.Root>
                            <Card.Icon icon={Heart} />
                            <Card.Title title='Atendimento Humano'/>
                            <Card.Description description='Cuidado, atenção e acolhimento em cada etapa do tratamento.'/>
                        </Card.Root>
                    </div>

                    <div>
                        <Card.Root>
                            <Card.Icon icon={ShieldUser} />
                            <Card.Title title='Segurança Total'/>
                            <Card.Description description='Procedimentos seguros, estéreis e indolores.'/>
                        </Card.Root>
                    </div>
                </div>
            </div>
        </section>
    )
}