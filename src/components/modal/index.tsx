import { FC } from 'react';
import styles from './styles.module.css';

export interface ModalProps {
  show: boolean;
  title: string;
  onClose: () => void;
  onFinish: () => void;
  className?: string;
  textSubmit?: string;
  loading?: boolean;
}

const Modal: FC<ModalProps> = ({
  show,
  title,
  onClose,
  onFinish,
  className,
  textSubmit = 'Send',
  loading = false,
  children,
}) => {
  if (!show) {
    return null;
  }

  const handleOnFinish = (event: any) => {
    event.preventDefault();
    onFinish();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <div className={`${styles.body} ${className}`}>{children}</div>
        <div className={styles.footer}>
          <button onClick={handleOnFinish} disabled={loading}>
            {textSubmit}
          </button>
          <button onClick={onClose}>{'Close'}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
