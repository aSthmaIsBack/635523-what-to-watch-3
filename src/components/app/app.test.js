import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FilmMock = {
  TITLE: `Hotel`,
  TYPE: `Action`,
  DATE: 2017
};

const FilmList = [
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

it(`Render App`, () => {
  const tree = renderer
    .create(<App film={FilmMock} filmList={FilmList} handleTitleClick={Function} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
