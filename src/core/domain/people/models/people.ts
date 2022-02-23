import { EyeColors } from './eyeColors';
import { HairColor } from './hairColor';
import { SkinColor } from './skinColor';

export interface People {
  id: number;
  description: string;
  birthYear: string;
  created: string;
  edited: string;
  eyeColor: EyeColors;
  gender: string;
  hairColor: HairColor;
  height: number | null;
  homeworld: string;
  mass: number | null;
  name: string;
  skinColor: SkinColor;
  url: string;
}
