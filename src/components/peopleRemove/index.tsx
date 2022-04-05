import { FC, useMemo, useState } from 'react';
import Button from '../button';
import { usePeople } from '../../hooks/usePeople';
import ErrorMessage from '../errorMessage';
import { usePeopleList } from '../../hooks/usePeopleList';
import PrintConsole from '../printConsole';
import ModalInputsUpdate from '../modalInputsUpdate';
import { SELECT_PEOPLE_INPUT } from '../../constants/people';
import { People } from '../../core/domain/people/models/people';
import styles from './styles.module.css';

const PeopleRemove: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { removeData, loading, error } = usePeople();
  const { data, getData } = usePeopleList();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async ({ id }: { id: string }) => {
    id && (await removeData(Number(id)));
    await getData();
    setIsShow(false);
  };

  const element = useMemo(() => {
    return (
      !!data.length && (
        <PrintConsole<Readonly<People[]>>
          title={'PEOPLE LIST AFTER REMOVE ACTION 🎳'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={loading}>
        {'People Remove 🔥'}
      </Button>
      <ErrorMessage error={error} />
      <ModalInputsUpdate<{ id: string }>
        inputs={SELECT_PEOPLE_INPUT}
        title={'INPUT SELECT 🎥'}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PeopleRemove;
