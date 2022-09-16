import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={`container-fluid ${classes.footer_box}`}>
      <div className="container">
        <div className={classes.footerInner_box}>
          <p>Made With 💙 By Mohammad Abdeen © 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
