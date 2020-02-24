import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const film = {
  title: `Beasts`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          title={film.title}
          src={film.src}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
