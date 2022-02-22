import { createData, getData, removeData, updateData } from './axios.service';

interface ApiModel {
  get: <T>(url: string) => Promise<T>;
  create: <T>(url: string, data: T) => Promise<T>;
  update: <T>(url: string, data: T) => Promise<T>;
  remove: (url: string) => Promise<void>;
}

const axiosManagement = {
  get: getData,
  create: createData,
  update: updateData,
  remove: removeData,
};

class Api implements ApiModel {
  method: ApiModel;

  constructor(method: ApiModel) {
    this.method = method;
  }

  async get<T>(url: string): Promise<T> {
    return await this.method.get(url);
  }

  async create<T>(url: string, data: T): Promise<T> {
    return await this.method.create(url, data);
  }
  
  async remove(url: string) {
    return await this.method.remove(url);
  }

  async update<T>(url: string, data: T): Promise<T> {
    return await this.method.update(url, data);
  }
}

export const api = new Api(axiosManagement);
