import { People } from "../models/people";

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
}: People): Readonly<People> => {
  return Object.freeze({
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
  });
};

export default PeopleEntity;
