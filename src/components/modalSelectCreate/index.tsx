import { useState } from 'react';
import Modal, { ModalProps } from '../modal';
import styles from './styles.module.css';

export interface OptionsType {
  value: number;
  label: string;
}

interface ModalSelectCreateProps extends Omit<ModalProps, 'onFinish'> {
  options: OptionsType[];
  onFinish: (value: OptionsType | undefined) => void;
}

const ModalSelectCreate = ({
  title,
  options,
  show,
  onClose,
  onFinish,
  ...props
}: ModalSelectCreateProps) => {
  const [values, setValues] = useState<OptionsType>(options[0]);

  const handleOnSelectChange = (event: any) => {
    const selectedOption = options.find((option) => {
      return Number(event.target.value) === option.value;
    });
    !!selectedOption && setValues(selectedOption);
  };

  const handleOnFinish = () => {
    onFinish(values) as unknown as OptionsType;
  };

  const handleOnClose = () => {
    onClose();
  };

  return (
    <Modal
      title={title}
      show={show}
      onClose={handleOnClose}
      onFinish={handleOnFinish}
      className={styles.container}
      {...props}
    >
      {!!options.length && (
        <select onChange={handleOnSelectChange}>
          <option value={undefined}>{'Select an option ⬇️'}</option>
          {options.map(({ value, label }, key) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}
    </Modal>
  );
};

export default ModalSelectCreate;
