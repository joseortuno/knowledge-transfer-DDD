import { useState } from 'react';

export const useStarships = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false
  const [data, setData] = useState<any | null>(null); // TODO: set Entity Starships

  const createData = async (data: Omit<any, 'id'>) => { // TODO: set Entity Starships
    setIsLoading(true);
    try {
      // const response = await CreateStarships(data);
      // setData(response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { data, createData, isLoading, isError };
};
