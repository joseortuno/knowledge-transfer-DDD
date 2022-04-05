import { FC, useMemo, useState } from 'react';
import Button from '../button';
import { useFilms } from '../../hooks/useFilms';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { Film } from '../../core/domain/films/model/filmEntity';
import ModalInputsUpdate from '../modalInputsUpdate';
import { SELECT_FILMS_INPUT } from '../../constants/films';
import styles from './styles.module.css';

const FilmSelect: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const {
    data, getData, isLoading, isError, 
  } = useFilms();

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
        <PrintConsole<Film>
          title={'FILM SELECT 🎥'}
          isData={!!data}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={isLoading}>
        {'Film Select 🎥'}
      </Button>
      <ErrorMessage error={isError} />
      <ModalInputsUpdate<{ id: string }>
        inputs={SELECT_FILMS_INPUT}
        title={'INPUT SELECT 🎥'}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default FilmSelect;
