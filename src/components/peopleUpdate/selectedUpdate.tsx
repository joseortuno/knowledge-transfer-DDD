import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsUpdate, { InputsType } from '../modalInputsUpdate';
import { usePeople } from '../../hooks/usePeople';
import { CREATE_IMPUTS } from '../../constants/people';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/models/people';
import { NewPeople } from '../../core/domain/people/models/newPeople';

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

  const handleOnFinish = async (editValues: NewPeople) => {
    setTitle('PEOPLE UPDATED 🎾');
    await updateData(id, { ...data, ...editValues });
    setIsShow(false);
  };

  const getInputs = (): InputsType<NewPeople>[] => {
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
        <ModalInputsUpdate<NewPeople>
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
