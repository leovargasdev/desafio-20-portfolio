import { SectionTitle } from 'components/SectionTitle'

import styles from './styles.module.scss'

const MY_EXPERIENCES = [
  'Digital House',
  'Código Fonte TV',
  'Zuplae',
  'ContWeb',
  'iuricode',
  'Freelancer'
]

export const Experiences = () => (
  <section className={styles.background}>
    <div className={styles.container}>
      <SectionTitle>experiência</SectionTitle>

      <div className={styles.content}>
        <ul className={styles['list-experiences']}>
          {MY_EXPERIENCES.map(experience => (
            <li key={experience}>{experience}</li>
          ))}
        </ul>
        <article className={styles.experience}>
          <div>
            <strong>Professor conteudista em Frontend</strong>
            <time>Nov 2021 - Atual</time>
          </div>
          <span>Digital House</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </p>
        </article>
      </div>
    </div>
  </section>
)
