import { peopleUpdatePath } from '../../../endpoints/people';
import { api } from '../../../services/api';
import PeopleEntity from '../entities/peopleEntity';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { peopleToPayload } from '../mappers/peopleToPayload';
import { People } from '../models/people';
import { NewPeople } from '../models/newPeople';
import { PeopleUnparser } from '../models/peopleUnparser';

const UpdatePeople = async (
  id: number,
  data: NewPeople,
): Promise<Readonly<People>> => {
  const url = peopleUpdatePath(id);
  const peopleUnparser = peopleToPayload({ ...data, id });
  const response = await api.update<PeopleUnparser>(url, peopleUnparser);
  const peopleParser = payloadToPeople(response);
  return PeopleEntity(peopleParser);
};

export default UpdatePeople;
