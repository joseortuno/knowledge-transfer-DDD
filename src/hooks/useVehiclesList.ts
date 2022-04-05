import { useState } from 'react';

export const useVehiclesList = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // TODO: false
  const [data, setData] = useState<any[]>([]); // TODO: set Entity Vehicles

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // const response = await GetVehiclesList();
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
