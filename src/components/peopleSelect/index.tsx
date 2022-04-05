import { FC, useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import ModalInputsUpdate from '../modalInputsUpdate';
import { People } from '../../core/domain/people/models/people';
import PrintConsole from '../printConsole';
import { SELECT_PEOPLE_INPUT } from '../../constants/people';
import { usePeople } from '../../hooks/usePeople';
import styles from './styles.module.css';

const PeopleSelect: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, getData, loading, error,
  } = usePeople();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async ({ id }: { id: string }) => {
    id && (await getData(Number(id)));
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
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={loading}>
        {'People Select 🙆‍♀️'}
      </Button>
      <ErrorMessage error={error} />
      <ModalInputsUpdate<{ id: string }>
        inputs={SELECT_PEOPLE_INPUT}
        title={'PEOPLE SELECT  🙆‍♀️ '}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PeopleSelect;
