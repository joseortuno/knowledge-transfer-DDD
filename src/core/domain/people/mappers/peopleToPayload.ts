import { People } from "../models/people"
import { PeopleUnparser } from "../models/peopleUnparser"

export const peopleToPayload = ({
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
}
: People): PeopleUnparser => {
  const heightValue = height === null ? null : height.toString();
  const massValue = mass === null ? null : mass.toString();
  
  return {
    id,
    description,
    properties: {
      birth_year: birthYear,
      created,
      edited,
      eye_color: eyeColor,
      gender,
      hair_color: hairColor,
      height: heightValue,
      homeworld,
      mass: massValue,
      name,
      skin_color: skinColor,
      url,
    }
  }
}
