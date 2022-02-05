import styles from './styles.module.scss'

export const Header = () => (
  <section className={styles.background}>
    <header className={styles.container}>
      <strong>Portfólio</strong>

      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Experiência</li>
          <li>Projetos</li>
        </ul>
      </nav>
    </header>
  </section>
)
