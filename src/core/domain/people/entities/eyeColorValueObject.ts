import { EyeColors } from '../models/eyeColors';

const EyeColorValueObject = (eyeColor: string): EyeColors => {
  return eyeColor as EyeColors;
};

export default EyeColorValueObject;
