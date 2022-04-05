import { People } from '../models/people';
import { PeopleParser } from '../models/peopleParser';
import EyeColorValueObject from './eyeColorValueObject';
import HairColorValueObject from './hairColorValueObject';
import SkinColorValueObject from './skinColorValueObject';

const PeopleEntity = ({
  id,
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
}: PeopleParser): Readonly<People> => {
  const _eyeColor = EyeColorValueObject(eyeColor);
  const _hairColor = HairColorValueObject(hairColor);
  const _skinColor = SkinColorValueObject(skinColor);

  return Object.freeze({
    id,
    description,
    birthYear,
    created,
    edited,
    eyeColor: _eyeColor,
    gender,
    hairColor: _hairColor,
    height,
    homeworld,
    mass,
    name,
    skinColor: _skinColor,
    url,
  });
};

export default PeopleEntity;
