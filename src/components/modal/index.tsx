import { FC } from 'react';
import './styles.css';

export interface ModalProps {
  isShow: boolean;
  title: string;
  onClose: () => void;
  onFinish: () => void;
  className?: string;
  textSubmit?: string;
  isLoading?: boolean;
}

const Modal: FC<ModalProps> = ({
  isShow,
  title,
  onClose,
  onFinish,
  className,
  textSubmit = 'Send',
  isLoading = false,
  children,
}) => {
  if (!isShow) {
    return null;
  }

  const handleOnFinish = (event: any) => {
    event.preventDefault();
    onFinish();
  };

  return (
    <div className={'Modal__container'}>
      <div className={'Modal__content'}>
        <div className={'Modal__header'}>
          <h4 className={'Modal__title'}>{title}</h4>
        </div>
        <div className={`Modal__body ${className}`}>{children}</div>
        <div className={'Modal__footer'}>
          <button onClick={onClose}>Close</button>
          <button onClick={handleOnFinish} disabled={isLoading}>
            {textSubmit}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
