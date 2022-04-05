import { peoplePath } from '../../../endpoints/people';
import { api } from '../../../services/api';

const RemovePeople = async (id: number): Promise<void> => {
  const url = peoplePath(id);
  await api.remove(url);
};

export default RemovePeople;
