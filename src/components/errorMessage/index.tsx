import { FC } from 'react';
import './styles.css';

interface ErrorMessageProps {
  isError: boolean;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ isError }) => {
  return (
    <div className="ErrorMessage__container">{isError && <div>❌</div>}</div>
  );
};

export default ErrorMessage;
