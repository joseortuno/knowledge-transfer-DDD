import { PeopleParser } from '../models/peopleParser';
import { PeopleUnparser } from '../models/peopleUnparser';

export const payloadToPeople = ({
  id,
  description = '',
  properties: {
    birth_year = '',
    created = '',
    edited = '',
    eye_color = '',
    gender = '',
    hair_color = '',
    height = null,
    homeworld = '',
    mass = null,
    name = '',
    skin_color = '',
    url = '',
  },
}: PeopleUnparser): PeopleParser => {
  return {
    id,
    description,
    birthYear: birth_year,
    created,
    edited,
    eyeColor: eye_color,
    gender,
    hairColor: hair_color,
    height: Number(height),
    homeworld,
    mass: Number(mass),
    name,
    skinColor: skin_color,
    url,
  };
};
