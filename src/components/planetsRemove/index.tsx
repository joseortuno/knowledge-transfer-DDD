import { FC, useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import ModalInputsUpdate from '../modalInputsUpdate';
import { SELECT_PLANETS_INPUT } from '../../constants/planets';
import { usePlanets } from '../../hooks/usePlanets';
import { usePlanetsList } from '../../hooks/usePlanetsList';
import { People } from '../../core/domain/people/models/people';
import styles from './styles.module.css';

const PlanetsRemove: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { removeData, loading, error } = usePlanets();
  const { data, getData } = usePlanetsList();

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
          title={'PLANETS LIST AFTER REMOVE ACTION 🧺'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={loading}>
        {'Planets Remove 🎈'}
      </Button>
      <ErrorMessage error={error} />
      <ModalInputsUpdate<{ id: string }>
        inputs={SELECT_PLANETS_INPUT}
        title={'INPUT SELECT 🎥'}
        show={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PlanetsRemove;
