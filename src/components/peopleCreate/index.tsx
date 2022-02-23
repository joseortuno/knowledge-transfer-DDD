import { FC, useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import { usePeople } from '../../hooks/usePeople';
import PrintConsole from '../printConsole';
import ModalInputsCreate from '../modalInputsUpdate';
import { CREATE_IMPUTS } from '../../constants/people';
import { People } from '../../core/domain/people/models/people';
import './styles.css';

const PeopleCreate: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, createData, isLoading, isError, 
  } = usePeople();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async (values: Omit<People, 'id'>) => {
    await createData(values);
    setIsShow(false);
  };

  const element = useMemo(() => {
    return (
      !!data && (
        <PrintConsole<People>
          title={'PEOPLE CREATE 👶'}
          isData={!!data}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className="PeopleCreate__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        People Create 👶
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<Omit<People, 'id'>>
        inputs={CREATE_IMPUTS}
        title={'PEOPLE CREATE 👶'}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
        isLoading={isLoading}
      />
      {element}
    </div>
  );
};

export default PeopleCreate;
