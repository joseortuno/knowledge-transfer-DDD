import { FC, useMemo, useState } from 'react';
import Button from '../button';
import { usePeople } from '../../hooks/usePeople';
import ErrorMessage from '../errorMessage';
import { usePeopleList } from '../../hooks/usePeopleList';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/model/peopleEntity';
import ModalInputsCreate from '../modalInputsUpdate';
import { INPUTS_SELECT } from '../../constants/people';
import './styles.css';

const PeopleRemove: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { removeData, isLoading, isError } = usePeople();
  const { data, getData } = usePeopleList();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async ({ id }: { id: string }) => {
    id && (await removeData(id));
    await getData();
    setIsShow(false);
  };

  const element = useMemo(() => {
    return (
      !!data.length && (
        <PrintConsole<People[]>
          title={'PEOPLE LIST AFTER REMOVE ACTION 🎳'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className="PeopleRemove__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        People Remove 🔥
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<{ id: string }>
        inputs={INPUTS_SELECT}
        title={'INPUT SELECT 🎥'}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PeopleRemove;
