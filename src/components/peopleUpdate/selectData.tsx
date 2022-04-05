import { FC, useEffect } from 'react';
import { usePeopleList } from '../../hooks/usePeopleList';
import ModalSelectCreate, { OptionsType } from '../modalSelectCreate';

interface SelectDataModalProps {
  show: boolean;
  onIsShow: (show: boolean) => void;
  onId: (id: number) => void;
  onError: (isError: boolean) => void;
}

const SelectDataModal: FC<SelectDataModalProps> = ({
  show, onIsShow, onId, onError, 
}) => {
  const {
    data, getData, loading, error, 
  } = usePeopleList();

  useEffect(() => {
    getData();
  }, [show]);

  useEffect(() => {
    onError(error);
  }, [error]);

  const handleOnClose = (): void => {
    onIsShow(false);
  };

  const handleOnFinish = (values: OptionsType | undefined): void => {
    if (values?.value) {
      onId(values.value);
      onIsShow(false);
    }
  };

  const getOptions = (): OptionsType[] => {
    return data.map(({ id, name }) => ({ value: id, label: name }));
  };

  return (
    <ModalSelectCreate
      title={'PEOPLE Update 🏀 (1/2)'}
      options={getOptions()}
      show={show}
      onClose={handleOnClose}
      onFinish={handleOnFinish}
      textSubmit={'Select'}
      loading={loading}
    />
  );
};

export default SelectDataModal;
