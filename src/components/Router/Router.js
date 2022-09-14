import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SignUpBiz from "../SignUpBiz/SignUpBiz";
import CreateCard from "../CreateCard/CreateCard";
import MyCards from "../MyCards/MyCards";

function Router({ user }) {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-biz" element={<SignUpBiz />} />
        {user?.biz && <Route path="/create-card" element={<CreateCard />} />}
        {user?.biz && <Route path="/" element={<CreateCard />} />}
        {user?.biz && <Route path="/my-cards" element={<MyCards />} />}
        <Route path="*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default Router;
