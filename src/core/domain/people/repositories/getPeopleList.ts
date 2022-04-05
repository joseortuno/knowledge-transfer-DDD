import { peopleListPath } from 'core/endpoints/people';
import { api } from 'core/services/api';
import PeopleListValueObject from '../entities/peopleListValueObject';
import { payloadToPeople } from '../mappers/payloadToPeople';
import { People } from '../models/people';
import { PeopleUnparser } from '../models/peopleUnparser';

const GetPeopleList = async (): Promise<Readonly<People[]>> => {
  const url = peopleListPath();
  const data = await api.get<PeopleUnparser[]>(url);
  const peopleParser = data.map((item) => payloadToPeople(item));
  const { list } = PeopleListValueObject(peopleParser);
  return list;
};

export default GetPeopleList;
