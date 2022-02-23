import { FC, useEffect } from "react";
import { useVehiclesList } from '../../hooks/useVehiclesList';
import ModalSelectCreate, { OptionsType } from "../modalSelectCreate";

interface SelectDataModalProps {
  isShow: boolean;
  onIsShow: (show: boolean) => void;
  onId: (id: number) => void;
  onError: (isError: boolean) => void;
}

const SelectDataModal: FC<SelectDataModalProps> = ({ isShow, onIsShow, onId, onError }) => {
  const {
    data, getData, isLoading, isError, 
  } = useVehiclesList();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    onError(isError);
  }, [isError]);

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
      title={'VEHICLES Update 🧨 (1/2)'}
      options={getOptions()}
      isShow={isShow}
      onClose={handleOnClose}
      onFinish={handleOnFinish}
      textSubmit={'Select'}
      isLoading={isLoading}
    />
  )
}

export default SelectDataModal;