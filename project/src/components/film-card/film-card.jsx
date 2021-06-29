import React from 'react';
import PropTypes from 'prop-types';

function FilmCard({filmTitle}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="../../../public/img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="#">{filmTitle}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
};

export default FilmCard;
