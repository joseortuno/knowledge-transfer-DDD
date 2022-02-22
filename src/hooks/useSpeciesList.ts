import { useState } from 'react';

export const useSpeciesList = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false
  const [data, setData] = useState<any[]>([]); // TODO: set entity Species

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // const response = await GetSpeciesList();
      // setData(response);
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