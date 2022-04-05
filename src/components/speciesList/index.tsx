import { FC, useMemo } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { useSpeciesList } from '../../hooks/useSpeciesList';
import styles from './styles.module.css';

const SpeciesList: FC = () => {
  const {
    data, getData, isLoading, isError, 
  } = useSpeciesList();

  const handleOnClick = async () => {
    await getData();
  };

  const element = useMemo(() => {
    return (
      !!data.length && (
        <PrintConsole<any[]> // TODO: set entity Species
          title={'SPECIES LIST 👽'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={isLoading}>
        {'Species List 👽'}
      </Button>
      <ErrorMessage error={isError} />
      {element}
    </div>
  );
};

export default SpeciesList;
