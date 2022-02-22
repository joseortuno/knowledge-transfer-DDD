import { peoplePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import PeopleEntity, { People, PeopleUnparser } from '../model/peopleEntity';

const GetPeople = async (id: string): Promise<People> => {
  const url = peoplePath(id);
  const data = await api.get<PeopleUnparser>(url);
  return PeopleEntity(data);
};

export default GetPeople;
