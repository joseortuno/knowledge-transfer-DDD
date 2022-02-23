import { useState } from 'react';
import { People } from '../core/domain/people/models/people';
import GetPeopleList from '../core/domain/people/repositories/getPeopleList';

export const usePeopleList = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<People[]>([]);

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetPeopleList();
      setData(response);
      setIsError(false);
    } catch(error) {
      setData([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, getData, isLoading, isError };
};
