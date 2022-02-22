import { useState } from 'react';
import { Film } from '../core/domain/films/model/filmEntity';
import GetFilm from '../core/domain/films/repositories/getFilm';

export const useFilms = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false
  const [data, setData] = useState<Film | null>(null);

  const getData = async (id: string): Promise<void> => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await GetFilm(id);
      setData(response);
    } catch (error) {
      setData(null);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { data, getData, isLoading, isError };
};
