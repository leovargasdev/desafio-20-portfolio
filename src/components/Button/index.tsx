import styles from './styles.module.scss'

interface ButtonProps {
  href: string
  type?: 'primary' | 'secondary'
  children: React.ReactNode
  download?: boolean
}

export const Button = ({
  href,
  type = 'primary',
  children,
  ...rest
}: ButtonProps) => (
  <div className={styles.container} data-type={type} {...rest}>
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  </div>
)
