import { useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import ModalInputsUpdate from '../modalInputsUpdate';
import { useStarships } from '../../hooks/useStarships';
import { CREATE_INPUTS } from '../../constants/starships';
import styles from './styles.module.css';

const StarshipsCreate = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, createData, isLoading, isError, 
  } = useStarships();

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleOnClose = () => {
    setIsShow(false);
  };

  const handleOnFinish = async (values: Omit<any, 'id'>) => {
    // TODO: set Entity Starships
    await createData(values);
    setIsShow(false);
  };

  const element = useMemo(() => {
    return (
      !!data && (
        <PrintConsole<any> // TODO: set starships entiti
          title={'STARSHIPS CREATE 🌇'}
          isData={!!data}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={isLoading}>
        {'Starships Create 📀'}
      </Button>
      <ErrorMessage error={isError} />
      <ModalInputsUpdate<Omit<any, 'id'>> // TODO: set Entity Starships
        inputs={CREATE_INPUTS}
        title={'STARSHIPS CREATE 📀'}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default StarshipsCreate;
