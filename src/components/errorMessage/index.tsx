import { VFC } from 'react';
import styles from './styles.module.css';

interface ErrorMessageProps {
  error: boolean;
}

const ErrorMessage: VFC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={styles.container}>
      {error && <div>{'❌'}</div>}
    </div>
  );
};

export default ErrorMessage;
