import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const film = {
  id: 5,
  title: `Beasts`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          data={film}
          handleHoverFilm={Function}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
