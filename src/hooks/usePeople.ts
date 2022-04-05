import { useState } from 'react';
import { People } from 'core/domain/people/models/people';
import { NewPeople } from 'core/domain/people/models/newPeople';
import CreatePeople from 'core/domain/people/repositories/createPeople';
import GetPeople from 'core/domain/people/repositories/getPeople';
import RemovePeople from 'core/domain/people/repositories/removePeople';
import UpdatePeople from 'core/domain/people/repositories/updatePeople';

export const usePeople = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Readonly<People> | null>(null);

  const getData = async (id: number): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetPeople(id);
      setData(response);
      setIsError(false);
    } catch (error) {
      setData(null);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const removeData = async (id: number): Promise<void> => { 
    setIsLoading(true);
    try {
      await RemovePeople(id);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const createData = async (data: NewPeople) => {
    setIsLoading(true);
    try {
      const response = await CreatePeople(data);
      setData(response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updateData = async (id: number, data: NewPeople) => {
    setIsLoading(true);
    try {
      const response = await UpdatePeople(id, data);
      setData(response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { 
    data, 
    getData, 
    createData, 
    updateData, 
    removeData, 
    loading: isLoading, 
    error: isError, 
  };
};
