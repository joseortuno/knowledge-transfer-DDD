import { peoplePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import PeopleEntity from '../entities/peopleEntity';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { People } from '../models/people';
import { PeopleUnparser } from '../models/peopleUnparser';

const GetPeople = async (id: number): Promise<Readonly<People>> => {
  const url = peoplePath(id);
  const data = await api.get<PeopleUnparser>(url);
  const parserData = payloadToPeople(data);
  return PeopleEntity(parserData);
};

export default GetPeople;
