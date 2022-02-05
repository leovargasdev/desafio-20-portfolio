import LogoCodelandia from 'static/logo-codelandia.svg'

import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <h3>@ {new Date().getFullYear()} - Leo Vargas</h3>
    <h3>
      Powered by <LogoCodelandia />
    </h3>
  </footer>
)
