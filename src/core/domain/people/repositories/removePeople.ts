import { peoplePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';

const RemovePeople = async (id: string): Promise<void> => {
  const url = peoplePath(id);
  await api.remove(url);
};

export default RemovePeople;