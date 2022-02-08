import { Button } from 'components/Button'
import { SectionTitle } from 'components/SectionTitle'
import { IconLink } from 'static/icons'
import styles from './styles.module.scss'

export const Projects = () => (
  <section className={styles.background}>
    <div className={styles.container}>
      <SectionTitle>projetos</SectionTitle>

      <div className={styles.projects}>
        {[1, 2, 3, 4].map(project => (
          <article key={project} className={styles.project}>
            <span className={styles['project-image']}>FOTO</span>
            <strong>Nome do projeto</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </p>
            <span className={styles['project-tag']}>
              Tecnologias usadas no projeto
            </span>
            <Button href="/">
              <IconLink /> Visualizar
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
)
