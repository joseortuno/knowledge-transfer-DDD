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
    height: string | null;
    homeworld: string;
    mass: string | null;
    name: string;
    skin_color: string;
    url: string;
  };
}
