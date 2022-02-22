import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { basePath } from '../../endpointsPath/general';

const baseURL = basePath();
const apiInstance: AxiosInstance = axios.create({
  baseURL,
});

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    alert(
      `
      ::::STATUS_ERROR:  ${error.response?.status}
      ::::MESSAGE_ERROR:  ${error.response?.statusText}
      `,
    );
    return Promise.reject(error);
  },
);

export const getData = async <T extends {}> (url: string): Promise<T> => {
  const options: AxiosRequestConfig = { 
    url: url,
    method: 'GET',
  };
  return apiInstance(options) as unknown as T;
};

export const createData = async <T extends {}> (url: string, data: T) => {
  const options: AxiosRequestConfig = { 
    url: url,
    method: 'POST',
    data,
  };
  return await apiInstance(options) as unknown as T;
};

export const updateData = async <T extends {}>  (url: string, data: T): Promise<T> => {
  const options: AxiosRequestConfig = { 
    url: url,
    method: 'PATCH',
    data,
  };
  return await apiInstance(options) as unknown as T;
};

export const removeData = async (url: string): Promise<void> => {
  const options: AxiosRequestConfig = { 
    url: url,
    method: 'DELETE',
  };
  await apiInstance(options);
};
