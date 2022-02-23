import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsCreate, { InputsType } from '../modalInputsUpdate';
import { usePeople } from '../../hooks/usePeople';
import { CREATE_IMPUTS } from '../../constants/people';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/models/people';

interface SelectedUpdateProps {
  id: number;
}

const SelectedUpdate: FC<SelectedUpdateProps> = ({ id }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('PEOPLE SELECTED 🏂');
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

  const handleOnFinish = async (editValues: Omit<People, 'id'>) => {
    setTitle('PEOPLE UPDATED 🎾');
    await updateData(id, { ...data, ...editValues });
    setIsShow(false);
  };

  const getInputs = (): InputsType<Omit<People, 'id'>>[] => {
    return CREATE_IMPUTS.map((input) => {
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
          title={'PEOPLE Update 🏀 (2/2)'}
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
