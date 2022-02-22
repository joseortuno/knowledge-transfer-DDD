import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsCreate, { InputsType } from '../modalInputsUpdate';
import { usePeople } from '../../hooks/usePeople';
import { People } from '../../core/domain/people/model/peopleEntity';
import { INPUTS_CREATE } from '../../constants/people';
import PrintConsole from '../printConsole';

interface SelectedUpdateProps {
  id: number;
}

const SelectedUpdate: FC<SelectedUpdateProps> = ({ id }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('VEHICLE SELECTED 🏴‍☠️');
  const {
    data, getData, updateData, isLoading, 
  } = usePeople();

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

  const getInputs = (): InputsType<Omit<People, 'id'>>[] => {
    return INPUTS_CREATE.map((input) => {
      const value = data && data[input.name];
      return { ...input, value: value ? value : undefined };
    });
  };

  const element = useMemo(() => {
    return (
      !!data && (
        <PrintConsole<People> title={title} isData={!!data} data={data} />
      )
    );
  }, [data]);

  return (
    <>
      {data && (
        <ModalInputsCreate<Omit<People, 'id'>>
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
