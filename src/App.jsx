import React from "react";
import GlobalStyle from "./components/GlobalStyle"; //이게 필요한가?
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
