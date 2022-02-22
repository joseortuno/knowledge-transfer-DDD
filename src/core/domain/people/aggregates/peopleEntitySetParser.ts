import { People, PeopleUnparser } from '../model/peopleEntity';
import { getId } from '../../../../utils/getId';

const peopleEntitySetParser = ({
  description,
  birthYear,
  created,
  edited,
  eyeColor,
  gender,
  hairColor,
  height,
  homeworld,
  mass,
  name,
  skinColor,
  url,
}: Omit<People, 'id'>): Readonly<PeopleUnparser> => {
  const id = getId();

  return Object.freeze({
    id,
    description,
    properties: {
      birth_year: birthYear,
      created,
      edited,
      eye_color: eyeColor,
      gender,
      hair_color: hairColor,
      height: height.toString(),
      homeworld,
      mass: mass.toString(),
      name,
      skin_color: skinColor,
      url,
    },
  });
};

export default peopleEntitySetParser;
