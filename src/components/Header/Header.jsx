import React from "react";
import classes from "./Header.module.css";
import { useState } from "react";
import { Fragment } from "react";
import links from "../../helpers/links";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handelShowMenu = () => setShowMenu((state) => !state);
  const { home, about, SignIn, SignUp, SignUpBiz } = links(
    classes,
    handelShowMenu
  );

  return (
    <Fragment>
      <div className={`container-fluid ${classes.nav_box}`}>
        <div className="container">
          <div className={classes.nav_bar}>
            <div>
              {home}
              {about}
            </div>
            <div className={classes.links}>
              {SignIn}
              {SignUp}
              {SignUpBiz}
            </div>
            <div className={classes.burger}>
              <div onClick={handelShowMenu} className={classes.boxBurger}>
                <i className="bi bi-list"> </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={`container-fluid ${classes.mobile_box}`}>
          <div className={`container ${classes.mobile_menu}`}>
            {SignIn}
            {SignUp}
            {SignUpBiz}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
