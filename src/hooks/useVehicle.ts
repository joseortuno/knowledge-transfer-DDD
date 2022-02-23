import { useState } from 'react';

export const useVehicle = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false
  const [data, setData] = useState<any | null>(null); // TODO: set Entity Vehicle

  const getData = async (id: string): Promise<void> => {
    setIsLoading(true);
    try {
      // const response = await GetVehicle(id);
      // setData(response);
      setIsError(false);
    } catch (error) {
      setData(null);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updateData = async (id: number, data: Omit<any, 'id'>) => { // TODO: set Entity Vehicle
    setIsLoading(true);
    try {
      // const response = await UpdateVehicle(id, data);
      // setData(response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { data, getData, updateData, isLoading, isError };
};