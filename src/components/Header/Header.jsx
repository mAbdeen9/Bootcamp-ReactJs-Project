import React from "react";
import classes from "./Header.module.css";
import { useState } from "react";
import { Fragment } from "react";
import myLink from "../../helpers/myNavLink";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const home = myLink({
    link: (
      <span className={classes.logo}>
        Real<i className="bi bi-geo-fill"></i>App
      </span>
    ),
    path: "/home",
    classes: classes,
  });

  const about = myLink({
    link: <span> About </span>,
    path: "/about",
    classes: classes,
  });

  const handelShowMenu = () => setShowMenu((state) => !state);

  return (
    <Fragment>
      <div className={`container-fluid ${classes.nav_box}  `}>
        <div className="container">
          <div className={classes.nav_bar}>
            <div>
              {home}
              {about}
            </div>
            <div className={classes.links}>
              <span>Sign in</span>
              <span>Sign up</span>
              <span>Sign up business</span>
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
        <div className={`container ${classes.mobile_menu}`}>
          <div>Sign in</div>
          <div>Sign up</div>
          <div>Sign up business</div>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
