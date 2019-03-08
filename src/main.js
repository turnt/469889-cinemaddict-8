import createFilters from './components/filters';
import createCards from './components/movie-cards';
import {setEvents} from './utils/utils';

const dummyFiltersData = [
  {url: `all`, label: `All movies`, active: true},
  {url: `watchlist`, label: `Watchlist`, count: 13},
  {url: `history`, label: `History`, count: 4},
  {url: `favorites`, label: `Favorites`, count: 8},
  {url: `stats`, label: `Stats`, additional: true},
];
const dummyMovieData = {
  title: `The Assassination Of Jessie James By The Coward Robert Ford`,
  rating: 9.8,
  year: 2018,
  duration: 73,
  genre: `Comedy`,
  imgName: `three-friends`,
  imgAlt: `Three friends`,
  comments: 13,
  description: `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`
};
const staticAmountOfCards = 7;
const staticAmountOfChartCards = 2;

const filtersContainer = document.querySelector(`.main-navigation`);
filtersContainer.innerHTML = createFilters(dummyFiltersData);

const filmsContainer = document.querySelector(`.films`);

if (filmsContainer) {
  const filmsListContainer = filmsContainer.querySelector(
      `.films-list .films-list__container`
  );

  const toggleFilter = (e) => {
    const activeNavigationClass = `main-navigation__item--active`;
    const filterItem = e.currentTarget;

    if (!filterItem.classList.contains(activeNavigationClass)) {
      const randomAmount = Math.ceil(Math.random() * staticAmountOfCards);
      const previousFilter = filterItem.parentNode.querySelector(`.${activeNavigationClass}`);

      if (previousFilter) {
        previousFilter.classList.remove(activeNavigationClass);
      }

      filterItem.classList.add(activeNavigationClass);
      filmsListContainer.innerHTML = createCards(dummyMovieData, randomAmount);
    }
  };

  filmsListContainer.innerHTML = createCards(dummyMovieData, staticAmountOfCards);

  const filters = filtersContainer.querySelectorAll(`[href]`);
  setEvents(filters, {eventName: `click`, cb: toggleFilter});

  const [topRatedContainer, mostCommented] = filmsContainer.querySelectorAll(
      `.films-list--extra .films-list__container`
  );

  if (topRatedContainer) {
    topRatedContainer.innerHTML = createCards(dummyMovieData, staticAmountOfChartCards, true);
  }
  if (mostCommented) {
    mostCommented.innerHTML = createCards(dummyMovieData, staticAmountOfChartCards, true);
  }
}

