import { InputsType } from '../components/modalInputsUpdate';
import { People } from '../core/domain/people/models/people';

export const CREATE_IMPUTS: InputsType<Omit<People,'id'>>[] = [
  { name: 'description', type: 'text' },
  { name: 'birthYear', type: 'text' },
  { name: 'created', type: 'text' },
  { name: 'edited', type: 'text' },
  { name: 'eyeColor', type: 'text' },
  { name: 'gender', type: 'text' },
  { name: 'hairColor', type: 'text' },
  { name: 'height', type: 'number' },
  { name: 'homeworld', type: 'text' },
  { name: 'mass', type: 'number' },
  { name: 'name', type: 'text' },
  { name: 'skinColor', type: 'text' },
  { name: 'url', type: 'url' },
];

export const SELECT_PEOPLE_INPUT: InputsType<{id: string}>[] = [
  { name: 'id', type: 'text' },
];
