import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FilmMock = {
  TITLE: `Hotel`,
  TYPE: `Action`,
  DATE: 2017
};

const FilmList = [`Beasts`, `Rhapsody`, `True Detective`];

it(`Render App`, () => {
  const tree = renderer
    .create(<App film={FilmMock} filmList={FilmList} handleTitleClick={Function} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
