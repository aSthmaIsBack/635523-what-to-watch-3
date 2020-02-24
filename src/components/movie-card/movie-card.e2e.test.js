import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const FilmList = {
  id: 1,
  title: `True Beasts`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should image be hovered`, () => {
  const handleHoverFilm = jest.fn();

  const movieCard = shallow(
      <MovieCard
        data={FilmList}
        handleHoverFilm={handleHoverFilm}
      />
  );

  movieCard.find(`article.small-movie-card`).simulate(`mouseenter`);

  expect(handleHoverFilm).toHaveBeenCalledWith(1);
});
