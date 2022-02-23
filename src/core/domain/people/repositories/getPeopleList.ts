import { peopleListPath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import PeopleEntity from '../entities/peopleEntity';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { People } from '../models/people';
import { PeopleUnparser } from '../models/peopleUnparser';

const GetPeopleList = async (): Promise<People[]> => {
  const url = peopleListPath();
  const data = await api.get<PeopleUnparser[]>(url);
  return data.map((item) => {
    const peopleParser = payloadToPeople(item);
    return PeopleEntity(peopleParser)
  });
};

export default GetPeopleList;
