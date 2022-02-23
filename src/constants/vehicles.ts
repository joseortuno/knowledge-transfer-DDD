import { InputsType } from '../components/modalInputsUpdate';

export const CREATE_INPUTS: InputsType<Omit<any,'id'>>[] = [ // TODO: set to vehicle Entity
  { name: 'description', type: 'text' },
  // TODO: enter all properties
];

export const SELECT_INPUT: InputsType<{id: string}>[] = [
  { name: 'id', type: 'text' },
];
