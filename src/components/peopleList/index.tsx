import { FC, useMemo } from 'react';
import Button from '../button';
import { usePeopleList } from '../../hooks/usePeopleList';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/models/people';
import styles from './styles.module.css';

const PeopleList: FC = () => {
  const {
    data, getData, loading, error, 
  } = usePeopleList();

  const handleOnClick = async () => {
    await getData();
  };

  const element = useMemo(() => {
    return (
      !!data.length && (
        <PrintConsole<Readonly<People[]>>
          title={'PEOPLE LIST 🚨'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className={styles.container}>
      <Button onClick={handleOnClick} disabled={loading}>
        {'People List 👨‍👨‍👧‍👦'}
      </Button>
      <ErrorMessage error={error} />
      {element}
    </div>
  );
};

export default PeopleList;
