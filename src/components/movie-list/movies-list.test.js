import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const filmList = [
  {
    id: 5,
    title: `Beasts`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: 3,
    title: `Rhapsody`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: 2,
    title: `Detective`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
];

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(
        <MoviesList
          filmList={filmList}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
