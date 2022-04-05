import { FC } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <div className={styles.container}>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
