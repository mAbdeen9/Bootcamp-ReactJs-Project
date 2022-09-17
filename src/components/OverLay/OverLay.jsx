import React from "react";
import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./OverLay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

function OverLay(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default OverLay;
