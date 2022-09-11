import React, { Fragment } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Router />
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
