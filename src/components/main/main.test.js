import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const FilmMock = {
  TITLE: `Hotel`,
  TYPE: `Action`,
  DATE: 2017
};

const FilmList = [`Beasts`, `Rhapsody`, `True Detective`];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main film={FilmMock} filmList={FilmList} handleTitleClick={Function} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
