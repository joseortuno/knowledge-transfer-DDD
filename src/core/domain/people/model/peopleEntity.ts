export interface PeopleUnparser {
  id: number;
  description: string;
  properties: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    url: string;
  };
}

export interface People {
  id: number;
  description: string;
  birthYear: string;
  created: string;
  edited: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skinColor: string;
  url: string;
}

const PeopleEntity = ({
  id,
  description,
  properties: {
    birth_year,
    created,
    edited,
    eye_color,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    url,
  },
}: PeopleUnparser): Readonly<People> => {
  return Object.freeze({
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
  });
};

export default PeopleEntity;
