import { HTMLInputTypeAttribute, useState } from 'react';
import Modal, { ModalProps } from '../modal';
import './styles.css';

export interface InputsType<T> {
  name: keyof T;
  type: HTMLInputTypeAttribute;
  value?: string | number;
}

interface ModalInputsCreateProps<T> extends Omit<ModalProps, 'onFinish'> {
  inputs: InputsType<T>[];
  onFinish: (values: T) => void;
}

const ModalInputsCreate = <T extends {}>({
  title,
  inputs,
  isShow,
  onClose,
  onFinish,
  ...props
}: ModalInputsCreateProps<T>) => {
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
      isShow={isShow}
      onClose={handleOnClose}
      onFinish={handleOnFinish}
      className={'ModalInputsCreate__container'}
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

export default ModalInputsCreate;
