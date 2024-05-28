import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
