import { SkinColors } from '../models/skinColors';

const SkinColorValueObject = (skinColor: string): SkinColors => {
  return skinColor as SkinColors;
};

export default SkinColorValueObject;
