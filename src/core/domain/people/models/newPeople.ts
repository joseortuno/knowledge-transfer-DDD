import { People } from './people';

export type NewPeople = Omit<People, 'id'>;
