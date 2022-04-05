import { filmsPath } from 'core/endpoints/films';
import { api } from 'core/services/api';
import FilmEntity, { Film, FilmUnparser } from '../model/filmEntity';

const GetFilm = async (id: string): Promise<Film> => {
  const data = await api.get<FilmUnparser>(filmsPath(id));
  return FilmEntity(data);
};

export default GetFilm;
