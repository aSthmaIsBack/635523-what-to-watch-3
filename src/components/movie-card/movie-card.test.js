import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const FilmDetail = `True Detective`;

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard filmDetail={FilmDetail} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
