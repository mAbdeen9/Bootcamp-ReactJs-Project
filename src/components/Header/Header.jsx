import React from "react";
import classes from "./Header.module.css";
import { useState } from "react";
import { Fragment } from "react";
import links from "../../helpers/links";
import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.clear("meta-data");
    navigate("/home", { replace: true });
    window.location.reload(true);
  };
  const handelShowMenu = () => setShowMenu((state) => !state);
  const { home, about, SignIn, SignUp, SignUpBiz, SignOut, MyCard } = links(
    classes,
    handelShowMenu,
    signOut
  );

  return (
    <Fragment>
      <div className={`container-fluid ${classes.nav_box}`}>
        <div className="container">
          <div className={classes.nav_bar}>
            <div>
              {home}
              {about}
              {user?.biz && MyCard}
            </div>
            <div className={classes.links}>
              {!user && SignIn}
              {!user && SignUp}
              {!user && SignUpBiz}
              {user && SignOut}
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
            {!user && SignIn}
            {!user && SignUp}
            {!user && SignUpBiz}
            {user && SignOut}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
