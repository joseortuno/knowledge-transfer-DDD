import { peopleUpdatePath } from '../../../../endpointsPath/people';
import { api } from '../../../services/api';
import PeopleEntity from '../entities/peopleEntity';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { peopleToPayload } from '../mappers/peopleToPayload';
import { People } from '../models/people';
import { PeopleUnparser } from '../models/peopleUnparser';

const UpdatePeople = async (
  id: number,
  data: Omit<People, 'id'>,
): Promise<People> => {
  const url = peopleUpdatePath(id);
  const peopleUnparser = peopleToPayload({...data, id })
  const response = await api.update<PeopleUnparser>(url, peopleUnparser);
  const peopleParser = payloadToPeople(response);
  return PeopleEntity(peopleParser);
};

export default UpdatePeople;
