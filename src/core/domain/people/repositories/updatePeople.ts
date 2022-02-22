import { peopleUpdatePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import peopleEntitySetParser from '../aggregates/peopleEntitySetParser';
import PeopleEntity, { People, PeopleUnparser } from '../model/peopleEntity';

const UpdatePeople = async (
  id: number,
  data: Omit<People, 'id'>,
): Promise<People> => {
  const people = peopleEntitySetParser(data);
  const url = peopleUpdatePath(id);
  const response = await api.update<PeopleUnparser>(url, people);
  return PeopleEntity(response);
};

export default UpdatePeople;
