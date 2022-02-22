import { useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import ModalSelectCreate, { OptionsType } from '../modalSelectCreate';
import SelectedUpdate from './selectedUpdate';
import { useVehiclesList } from '../../hooks/useVehiclesList';
import './styles.css';

const VehiclesUpdate = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const {
    data, getData, isLoading, isError, 
  } = useVehiclesList();

  const handleOnClick = async () => {
    getData();
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = (values: OptionsType | undefined) => {
    if (values?.value) {
      setId(values.value);
      setIsShow(false);
      return;
    }
  };

  const getOptions = (): OptionsType[] => {
    return data.map(({ id, name }) => ({ value: id, label: name }));
  };

  return (
    <div className="VehiclesUpdate__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        Vehícles Update 🧨
      </Button>
      <ErrorMessage isError={isError} />
      <ModalSelectCreate
        title={'VEHICLES Update 🧨 (1/2)'}
        options={getOptions()}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
        textSubmit={'Select'}
      />
      {id && <SelectedUpdate id={id} />}
    </div>
  );
};

export default VehiclesUpdate;
