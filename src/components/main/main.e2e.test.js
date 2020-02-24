import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const handleTitleClick = jest.fn();

  const welcomeScreen = shallow(
      <Main
        film={FilmMock}
        filmList={FilmList}
        handleTitleClick={handleTitleClick}
      />
  );

  const title = welcomeScreen.find(`h2.movie-card__title`);

  title.props().onClick();

  expect(handleTitleClick.mock.calls.length).toBe(1);
});
