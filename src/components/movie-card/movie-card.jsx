import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {data: {id, title, src}, handleHoverFilm} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleHoverFilm(id)}
      onMouseLeave={() => handleHoverFilm()}
    >
      <div className="small-movie-card__image">
        <img src={src} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  handleHoverFilm: PropTypes.func.isRequired
};

