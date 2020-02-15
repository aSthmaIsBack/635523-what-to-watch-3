import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FilmMock = {
  TITLE: `The Grand Budapest Hotel`,
  TYPE: `Drama`,
  DATE: 2014
};

const FilmList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App film={FilmMock} filmList={FilmList}/>,
    document.querySelector(`#root`)
);
