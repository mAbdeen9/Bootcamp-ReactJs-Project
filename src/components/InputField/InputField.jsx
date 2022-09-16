import React from "react";
import classes from "./InputField.module.css";
function InputField(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>
        {props.lable} <i className={props.emoji}></i>
      </label>
      <br />
      <input
        onChange={props.handler(props.setError, props.inputValue)}
        ref={props.inputValue}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
      <br />
      {props.InputHasError && (
        <span className={classes.invaild}>
          {props.lable} {props.msg}
        </span>
      )}
    </div>
  );
}

export default InputField;
