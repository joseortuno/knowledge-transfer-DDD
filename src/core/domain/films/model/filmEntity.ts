export interface FilmUnparser {
  id: number;
  description: string;
  properties: {
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    title: string;
    url: string;
  };
}

export interface Film {
  id: number;
  description: string;
  created: string;
  director: string;
  edited: string;
  episodeId: number;
  openingCrawl: string;
  producer: string;
  releaseDate: string;
  title: string;
  url: string;
}

const FilmEntity = ({
  id,
  description,
  properties: {
    created,
    director,
    edited,
    episode_id,
    opening_crawl,
    producer,
    release_date,
    title,
    url,
  },
}: FilmUnparser): Readonly<Film> => {
  return Object.freeze({
    id,
    description,
    created,
    director,
    edited,
    episodeId: episode_id,
    openingCrawl: opening_crawl,
    producer,
    releaseDate: release_date,
    title,
    url,
  });
};

export default FilmEntity;
