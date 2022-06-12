import styles from './Button.module.css';

interface Props {
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
}

const Button = ({ variant = 'contained', children }: Props) => {
  let btnSty = styles.contained;
  if (variant === 'outlined') btnSty = styles.outlined;
  // @TODO: add variant text style

  return (
    <button className={btnSty} type="button">
      {children}
    </button>
  );
};

export default Button;
