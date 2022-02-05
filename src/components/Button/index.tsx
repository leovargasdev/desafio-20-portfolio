import styles from './styles.module.scss'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button = ({ type = 'primary', children }: ButtonProps) => (
  <div className={styles.container} data-type={type}>
    <button type="button">{children}</button>
  </div>
)
