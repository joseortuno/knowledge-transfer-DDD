import { FC, useMemo, useState } from 'react';
import Button from '../button';
import { usePeople } from '../../hooks/usePeople';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/model/peopleEntity';
import ModalInputsCreate from '../modalInputsUpdate';
import { INPUTS_SELECT } from '../../constants/people';
import './styles.css';

const PeopleSelect: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, getData, isLoading, isError, 
  } = usePeople();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async ({ id }: { id: string }) => {
    id && (await getData(id));
    setIsShow(false);
  };

  const element = useMemo(() => {
    return (
      !!data && (
        <PrintConsole<People>
          title={'PEOPLE  🙆‍♀️ '}
          isData={!!data}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className="PeopleSelect__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        People Select 🙆‍♀️
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<{ id: string }>
        inputs={INPUTS_SELECT}
        title={'PEOPLE SELECT  🙆‍♀️ '}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PeopleSelect;
