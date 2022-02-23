import { peopleCreatePath } from '../../../../endpointsPath/people';
import { getId } from '../../../../utils/getId';
import { api } from '../../../services/api';
import PeopleEntity from '../entities/peopleEntity';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { peopleToPayload } from '../mappers/peopleToPayload';
import { People } from '../models/people';
import { NewPeople } from '../models/newPeople';
import { PeopleUnparser } from '../models/peopleUnparser';

const CreatePeople = async (data: NewPeople): Promise<Readonly<People>> => {
  const id = getId();
  const peopleUnparser = peopleToPayload({...data, id })
  const url = peopleCreatePath();
  const response = await api.create<PeopleUnparser>(url, peopleUnparser);
  const peopleParser = payloadToPeople(response);
  return PeopleEntity(peopleParser);
};

export default CreatePeople;
