import { InputsType } from '../components/modalInputsUpdate';

export const CREATE_INPUTS: InputsType<Omit<any,'id'>>[] = [ // TODO: set to StarShips Entity
  { name: 'description', type: 'text' },
  // TODO: enter all properties
];
