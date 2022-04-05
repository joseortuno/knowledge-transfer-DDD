import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsUpdate, { InputsType } from '../modalInputsUpdate';
import { usePeople } from '../../hooks/usePeople';
import { CREATE_IMPUTS } from '../../constants/people';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/models/people';
import { NewPeople } from '../../core/domain/people/models/newPeople';

interface UpdateDataModalProps {
  id: number;
  onResetId: () => void;
}

const UpdateDataModal: FC<UpdateDataModalProps> = ({ id, onResetId }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('PEOPLE SELECTED 🏂');
  const {
    data, getData, updateData, loading, 
  } = usePeople();

  useEffect(() => {
    getData(id);
    setIsShow(true);
  }, [id]);

  const handleOnClose = () => {
    setIsShow(false);
    onResetId();
  };

  const handleOnFinish = async (editValues: NewPeople) => {
    setTitle('PEOPLE UPDATED 🎾');
    await updateData(id, { ...data, ...editValues });
    setIsShow(false);
    onResetId();
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
          show={isShow}
          onClose={handleOnClose}
          onFinish={handleOnFinish}
          loading={loading}
        />
      )}
      {element}
    </>
  );
};

export default UpdateDataModal;
