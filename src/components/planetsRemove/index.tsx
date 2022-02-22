import { FC, useMemo, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/model/peopleEntity';
import ModalInputsCreate from '../modalInputsUpdate';
import { INPUTS_SELECT } from '../../constants/planets';
import { usePlanets } from '../../hooks/usePlanets';
import { usePlanetsList } from '../../hooks/usePlanetsList';
import './styles.css';

const PlanetsRemove: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { removeData, isLoading, isError } = usePlanets();
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
    <div className="PlanetsRemove__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        Planets Remove 🎈
      </Button>
      <ErrorMessage isError={isError} />
      <ModalInputsCreate<{ id: string }>
        inputs={INPUTS_SELECT}
        title={'INPUT SELECT 🎥'}
        isShow={isShow}
        onClose={handleOnClose}
        onFinish={handleOnFinish}
      />
      {element}
    </div>
  );
};

export default PlanetsRemove;
