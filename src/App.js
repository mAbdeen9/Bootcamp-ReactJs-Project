import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Router />
      </main>
    </Fragment>
  );
}

export default App;
