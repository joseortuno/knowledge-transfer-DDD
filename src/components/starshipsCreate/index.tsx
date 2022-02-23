import { useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import ModalInputsCreate from '../modalInputsUpdate';
import { useStarships } from '../../hooks/useStarships';
import './styles.css';
import { CREATE_INPUTS } from '../../constants/starships';

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
    <div className="StarshipsCreate__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        Starships Create 📀
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<Omit<any, 'id'>> // TODO: set Entity Starships
        inputs={CREATE_INPUTS}
        title={'STARSHIPS CREATE 📀'}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default StarshipsCreate;
