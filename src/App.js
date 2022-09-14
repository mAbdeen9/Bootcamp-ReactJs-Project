import React, { Fragment, useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getUser from "./helpers/getUser";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userID = getUser();
    if (userID._id) setUser(userID);
  }, []);

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
        <Header user={user} />
      </header>
      <main>
        <Container>
          <Router user={user} />
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
