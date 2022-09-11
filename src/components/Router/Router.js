import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SignUpBiz from "../SignUpBiz/SignUpBiz";

function Router() {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sing-up-biz" element={<SignUpBiz />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default Router;
