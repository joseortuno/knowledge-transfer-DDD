import { peopleCreatePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import peopleEntitySetParser from '../aggregates/peopleEntitySetParser';
import PeopleEntity, { People, PeopleUnparser } from '../model/peopleEntity';

const CreatePeople = async (data: Omit<People, 'id'>): Promise<People> => {
  const people = peopleEntitySetParser(data);
  const url = peopleCreatePath();
  const response = await api.create<PeopleUnparser>(url, people);
  return PeopleEntity(response);
};

export default CreatePeople;
