import { EyeColors } from './eyeColors';
import { HairColors } from './hairColors';
import { SkinColors } from './skinColors';

export interface People {
  id: number;
  description: string;
  birthYear: string;
  created: string;
  edited: string;
  eyeColor: EyeColors;
  gender: string;
  hairColor: HairColors;
  height: number | null;
  homeworld: string;
  mass: number | null;
  name: string;
  skinColor: SkinColors;
  url: string;
}
