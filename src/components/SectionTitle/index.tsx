import styles from './styles.module.scss'

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className={styles.container}>{children}</h2>
)
