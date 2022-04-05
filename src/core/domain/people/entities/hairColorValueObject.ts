import { HairColors } from '../models/hairColors';

const HairColorValueObject = (hairColor: string): HairColors => {
  return hairColor as HairColors;
};

export default HairColorValueObject;
