import { People } from '../models/people';
import { PeopleParser } from '../models/peopleParser';
import PeopleEntity from './peopleEntity';

const PeopleListValueObject = (list: PeopleParser[]): Readonly<{ list: People[] }> => {
  return Object.freeze({
    list: list.map(item => PeopleEntity(item)),
  });
};

export default PeopleListValueObject;
