import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {film, filmList} = props;
  return (
    <Main film={film} filmList={filmList} />
  );
};

export default App;

App.propTypes = {
  film: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    TYPE: PropTypes.string.isRequired,
    DATE: PropTypes.number.isRequired
  }).isRequired,
  filmList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
