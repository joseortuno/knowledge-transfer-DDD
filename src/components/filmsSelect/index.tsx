import { FC, useMemo, useState } from 'react';
import Button from '../button';
import { useFilms } from '../../hooks/useFilms';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { Film } from '../../core/domain/films/model/filmEntity';
import ModalInputsCreate from '../modalInputsUpdate';
import { SELECT_FILMS_INPUT } from '../../constants/films';
import './styles.css';

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
    <div className="Film__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        Film Select 🎥
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<{ id: string }>
        inputs={SELECT_FILMS_INPUT}
        title={'INPUT SELECT 🎥'}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default FilmSelect;
