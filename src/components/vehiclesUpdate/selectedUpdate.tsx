import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsCreate, { InputsType } from '../modalInputsUpdate';
import PrintConsole from '../printConsole';
import { CREATE_INPUTS } from '../../constants/vehicles';
import { useVehicle } from '../../hooks/useVehicle';

interface SelectedUpdateProps {
  id: number;
}

const SelectedUpdate: FC<SelectedUpdateProps> = ({ id }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('VEHICLE SELECTED 🏴‍☠️');
  const {
    data, getData, updateData, isLoading, 
  } = useVehicle();

  useEffect(() => {
    getData(id.toString());
    setIsShow(true);
  }, [id]);

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async (editValues: Omit<any, 'id'>) => {
    // TODO: set Entity Vehicle
    setTitle('VEHICLE UPDATED 🪙');
    await updateData(id, { ...data, ...editValues });
    setIsShow(false);
  };

  const getInputs = (): InputsType<Omit<any, 'id'>>[] => { // TODO: set vehicle entity
    return CREATE_INPUTS.map((input) => {
      const value = data && data[input.name];
      return { ...input, value: value ? value : undefined };
    });
  };

  const element = useMemo(() => {
    return (
      !!data && (
        <PrintConsole<any> title={title} isData={!!data} data={data} /> // TODO: set vehicle entity
      )
    );
  }, [data]);

  return (
    <>
      {data && (
        <ModalInputsCreate<Omit<any, 'id'>> // TODO: set vehicle entity
          inputs={getInputs()}
          title={'VEHICLE Update 🏀 (2/2)'}
          isShow={isShow}
          onClose={handleOnClose}
          onFinish={handleOnFinish}
          isLoading={isLoading}
        />
      )}
      {element}
    </>
  );
};

export default SelectedUpdate;
