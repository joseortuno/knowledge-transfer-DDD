import { FC, useMemo } from 'react';
import Button from '../button';
import { usePeopleList } from '../../hooks/usePeopleList';
import ErrorMessage from '../errorMessage';
import PrintConsole from '../printConsole';
import { People } from '../../core/domain/people/model/peopleEntity';
import './styles.css';

const PeopleList: FC = () => {
  const {
    data, getData, isLoading, isError, 
  } = usePeopleList();

  const handleOnClick = async () => {
    await getData();
  };

  const element = useMemo(() => {
    return (
      !!data.length && (
        <PrintConsole<People[]>
          title={'PEOPLE LIST 🚨'}
          isData={!!data.length}
          data={data}
        />
      )
    );
  }, [data]);

  return (
    <div className="PeopleList__container">
      <Button onClick={handleOnClick} disabled={isLoading}>
        People List 👨‍👨‍👧‍👦
      </Button>
      <ErrorMessage isError={isError} />
      {element}
    </div>
  );
};

export default PeopleList;
