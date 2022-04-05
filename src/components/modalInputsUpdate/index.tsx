import { HTMLInputTypeAttribute, useState } from 'react';
import Modal, { ModalProps } from '../modal';
import styles from './styles.module.css';

export interface InputsType<T> {
  name: keyof T;
  type: HTMLInputTypeAttribute;
  value?: string | number;
}

interface ModalInputsUpdateProps<T> extends Omit<ModalProps, 'onFinish'> {
  inputs: InputsType<T>[];
  onFinish: (values: T) => void;
}

const ModalInputsUpdate = <T extends Record<string, unknown>>({
  title,
  inputs,
  show,
  onClose,
  onFinish,
  ...props
}: ModalInputsUpdateProps<T>) => {
  const [values, setValues] = useState<any>({});

  const handleOnInputChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnFinish = (): T => {
    const _values = values;
    setValues(null);
    return onFinish(_values) as unknown as T;
  };

  const handleOnClose = () => {
    setValues(null);
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
      {inputs.map(({ name, type, value }, key) => {
        return (
          <input
            key={key}
            onChange={handleOnInputChange}
            type={type}
            placeholder={name as string}
            name={name as string}
            defaultValue={value}
          />
        );
      })}
    </Modal>
  );
};

export default ModalInputsUpdate;
