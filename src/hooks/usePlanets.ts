import { useState } from 'react';

export const usePlanets = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false

  const removeData = async (id: string): Promise<void> => { 
    setIsLoading(true);
    setIsError(false);
    try {
      // await PlanetsFilm(id);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { removeData, loading: isLoading, error: isError };
};
