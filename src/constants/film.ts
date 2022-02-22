import { InputsType } from '../components/modalInputsUpdate';
import { Film } from '../core/domain/films/model/filmEntity';

export const INPUTS: InputsType<Omit<Film,'id'>>[] = [
  { name: 'description', type: 'text' },
  { name: 'created', type: 'text' },
  { name: 'director', type: 'text' },
  { name: 'edited', type: 'text' },
  { name: 'episodeId', type: 'number' },
  { name: 'openingCrawl', type: 'text' },
  { name: 'producer', type: 'text' },
  { name: 'releaseDate', type: 'text' },
  { name: 'title', type: 'text' },
  { name: 'url', type: 'url' },
];

export const INPUTS_SELECT: InputsType<{id: string}>[] = [
  { name: 'id', type: 'text' },
];
