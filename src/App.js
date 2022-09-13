import React, { Fragment } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        ltr
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
