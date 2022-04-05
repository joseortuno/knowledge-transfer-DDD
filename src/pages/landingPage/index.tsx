import FilmSelect from 'components/filmsSelect';
import PeopleSelect from 'components/peopleSelect';
import PeopleCreate from 'components/peopleCreate';
import PeopleList from 'components/peopleList';
import PeopleRemove from 'components/peopleRemove';
import PeopleUpdate from 'components/peopleUpdate';
import SpeciesList from 'components/speciesList';
import PlanetsRemove from 'components/planetsRemove';
import StarshipsCreate from 'components/starshipsCreate';
import VehiclesUpdate from 'components/vehiclesUpdate';
import styles from './styles.module.css';

const LandingPage = () => {
  console.log('The results will be displayed here: ');
  
  return (
    <div className={styles.container}>
      <h1>Knowledge Transfer: DDD 🚸</h1>
      <div className={styles.text}>
      The results are displayed in the console 🐼 🦁 🙈
      </div>
      <div className={styles.section}>
        <h2>People 🕺 💃🏽</h2>
        <PeopleSelect />
        <PeopleList />
        <PeopleRemove />
        <PeopleCreate />
        <PeopleUpdate />
      </div>
      <div className={styles.section}>
        <h2>Films 🎬 🍿</h2>
        <FilmSelect />
      </div>
      <div className={styles.section}>
        <h2>Species 👽 🚀</h2>
        <SpeciesList />
      </div>
      <div className={styles.section}>
        <h2>Planets 🪐 😄</h2>
        <PlanetsRemove />
      </div>
      <div className={styles.section}>
        <h2>Starships ✈️ 🛳</h2>
        <StarshipsCreate />
      </div>
      <div className={styles.section}>
        <h2>Vehicles 🚗 🚑</h2>
        <VehiclesUpdate />
      </div>
    </div>
  );
};

export default LandingPage;
