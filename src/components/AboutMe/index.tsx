import { Button } from 'components/Button'
import { SectionTitle } from 'components/SectionTitle'
import { IconDownloadCloud, IconMail } from 'static/icons'

import styles from './styles.module.scss'

export const AboutMe = () => (
  <section className={styles.background}>
    <div className={styles.container}>
      <span>FOTO</span>

      <div className={styles.content}>
        <SectionTitle>Sobre mim</SectionTitle>
        <strong>Chapecó, SC, Brasil</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
          commodo dolor, nec bibendum velit.
        </p>

        <ul className={styles['social-media']}>
          {[1, 2, 3, 4, 5, 6].map(icon => (
            <li key={icon}>
              <a href="/">
                <IconMail />
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <Button type="secondary">
            <IconDownloadCloud /> Currículo
          </Button>
          <Button>
            <IconMail /> E-mail
          </Button>
        </div>
      </div>
    </div>
  </section>
)
