import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const FilmMock = {
  TITLE: `The Grand Budapest Hotel`,
  TYPE: `Drama`,
  DATE: 2014
};

const handleTitleClick = () => {};

ReactDOM.render(
    <App
      film={FilmMock}
      filmList={films}
      handleTitleClick={handleTitleClick} />,
    document.querySelector(`#root`)
);
