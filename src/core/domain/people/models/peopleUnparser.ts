import { EyeColors } from './eyeColors';
import { HairColor } from './hairColor';
import { SkinColor } from './skinColor';

export interface PeopleUnparser {
  id: number;
  description: string;
  properties: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: EyeColors;
    gender: string;
    hair_color: HairColor;
    height: string | null;
    homeworld: string;
    mass: string | null;
    name: string;
    skin_color: SkinColor;
    url: string;
  };
}
