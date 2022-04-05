import { FC, useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import { usePeople } from '../../hooks/usePeople';
import PrintConsole from '../printConsole';
import ModalInputsUpdate from '../modalInputsUpdate';
import { CREATE_IMPUTS } from '../../constants/people';
import { People } from '../../core/domain/people/models/people';
import { NewPeople } from '../../core/domain/people/models/newPeople';
import styles from './styles.module.css';

const PeopleCreate: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, createData, loading, error,
  } = usePeople();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async (values: NewPeople) => {
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
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={loading}>
        {'People Create 👶'}
      </Button>
      <ErrorMessage error={error} />
      <ModalInputsUpdate<NewPeople>
        inputs={CREATE_IMPUTS}
        title={'PEOPLE CREATE 👶'}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
        loading={loading}
      />
      {element}
    </div>
  );
};

export default PeopleCreate;
