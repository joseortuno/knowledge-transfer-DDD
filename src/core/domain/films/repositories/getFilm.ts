import { filmsPath } from '../../../endpoints/films';
import { api } from '../../../services/api';
import FilmEntity, { Film, FilmUnparser } from '../model/filmEntity';

const GetFilm = async (id: string): Promise<Film> => {
  const data = await api.get<FilmUnparser>(filmsPath(id));
  return FilmEntity(data);
};

export default GetFilm;
