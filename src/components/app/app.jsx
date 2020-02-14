import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line no-unused-vars,react/prop-types
  const {film} = props;
  return (
    <Main film={film}/>
  );
};

export default App;
