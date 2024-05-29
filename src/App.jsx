import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
import AppContextProvider from "./components/AppContextProvider";

const App = () => {
  return (
    <div>
      <h2>나의 월별 지출내역</h2>
      <AppContextProvider>
        <GlobalStyle />
        <Router />
      </AppContextProvider>
    </div>
  );
};

export default App;
