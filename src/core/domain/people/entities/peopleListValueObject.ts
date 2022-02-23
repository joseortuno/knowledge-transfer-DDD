import { People } from '../models/people';
import PeopleEntity from './peopleEntity';

export const PeopleListValueObject = (list: People[]): Readonly<{ list: People[] }> => {
  return Object.freeze({
    list: list.map(item => PeopleEntity(item)),
  })
}
