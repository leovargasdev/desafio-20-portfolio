import { Button } from 'components/Button'
import { SectionTitle } from 'components/SectionTitle'
import { IconGithub, IconLinkedin } from 'static/icons'

import LooperIcon from 'static/looper.svg'
import styles from './styles.module.scss'

export const Banner = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <SectionTitle>Olá, eu sou</SectionTitle>
      <h1>Leo Vargas</h1>
      <SectionTitle>Desenvolvedor Front-end {'&'} UI Designer.</SectionTitle>

      <div>
        <Button>
          <IconLinkedin />
          Linkedin
        </Button>
        <Button type="secondary">
          <IconGithub /> Github
        </Button>
      </div>
    </div>
    <LooperIcon />
  </section>
)
