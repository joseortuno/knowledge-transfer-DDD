import { FC } from 'react';
import './styles.css';

interface PeopleButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const PeopleButton: FC<PeopleButtonProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default PeopleButton;
