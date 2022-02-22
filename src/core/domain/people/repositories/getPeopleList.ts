import { peopleListPath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import PeopleEntity, { People, PeopleUnparser } from '../model/peopleEntity';

const GetPeopleList = async (): Promise<People[]> => {
  const url = peopleListPath();
  const data = await api.get<PeopleUnparser[]>(url);
  return data.map((person) => PeopleEntity(person));
};

export default GetPeopleList;
