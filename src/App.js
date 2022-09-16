import React, { Fragment, useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";
import getUser from "./helpers/getUser";
import MyToast from "./components/MyToast/MyToast";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userID = getUser();
    if (userID._id) setUser(userID);
  }, []);

  return (
    <Fragment>
      <header>
        <Header user={user} />
        <MyToast />
      </header>
      <main>
        <Container>
          <Router user={user} />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
