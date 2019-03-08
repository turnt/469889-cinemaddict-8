const controlsTemplate = `
  <form class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
  </form>
`;

const commentsBtnTemplate = (count = 0) => `
  <button class="film-card__comments">${count} comment${count !== 1 ? `s` : ``}</button>
`;

const descriptionTemplate = (desc = ``) =>`
  <p class="film-card__description">${desc}</p>
`;

const posterTemplate = ({imgName = ``, imgAlt = ``} = {}) =>`
  <img src="./images/posters/${imgName}.jpg" alt="${imgAlt}" class="film-card__poster">
`;

const createMovieCardTemplate = (
    {
      comments = 0,
      description = `No description`,
      duration = 73,
      genre = `no genre`,
      imgName = ``,
      imgAlt = ``,
      rating = `0`,
      title = `No name`,
      year = 1970
    } = {},
    simple = false
) => {
  const blockName = `film-card`;
  const className = `${blockName} ${simple ? `${blockName}--no-controls` : ``}`;

  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  const movieDuration = `${hours > 0 ? `${hours}h&nbsp;` : ``}${minutes}m`;

  return `
    <article class="${className}">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${movieDuration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>

      ${posterTemplate({imgName, imgAlt})}
      ${!simple ? descriptionTemplate(description) : ``}
      ${commentsBtnTemplate(comments)}
      ${!simple ? controlsTemplate : ``}
    </article>
  `;
};

const createCardsTemplate = (cardData = {}, amount = 0, simple = false) => {
  let cardsTemplate = ``;

  for (let i = 0; i < amount; i++) {
    cardsTemplate += createMovieCardTemplate(cardData, simple);
  }

  return cardsTemplate;
};

export default createCardsTemplate;
