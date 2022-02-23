import { FC, useEffect, useMemo, useState } from 'react';
import ModalInputsUpdate, { InputsType } from '../modalInputsUpdate';
import { usePeople } from '../../hooks/usePeople';
import { CREATE_IMPUTS } from '../../constants/people';
import PrintConsole from '../printConsole';

interface UpdateDataModalProps {
  id: number;
  onResetId: () => void;
}

const UpdateDataModal: FC<UpdateDataModalProps> = ({ id, onResetId }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('VEHICLE SELECTED 🏴‍☠️');
  const {
    data, getData, updateData, isLoading, 
  } = usePeople();

  useEffect(() => {
    getData(id);
    setIsShow(true);
  }, [id]);

  const handleOnClose = () => {
    setIsShow(false);
    onResetId();
  };

  const handleOnFinish = async (editValues: any) => { // TODO: set Entity Vehicle
    setTitle('VEHICLE UPDATED 🪙');
    await updateData(id, { ...data, ...editValues });
    setIsShow(false);
    onResetId();
  };

  const getInputs = (): InputsType<any>[] => { // TODO: set vehicle entity
    return CREATE_IMPUTS.map((input) => {
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
        <ModalInputsUpdate<any>
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

export default UpdateDataModal;
