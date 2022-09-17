import React from "react";
import { useState } from "react";
import classes from "./InputField.module.css";
function InputField(props) {
  const valueFromProps = props.value || "";
  const [value, setValue] = useState(valueFromProps);

  const setValues = (e) => {
    setValue((state) => (state = e.target.value));
  };
  return (
    <div className={classes.in}>
      <label htmlFor={props.htmlFor}>
        {props.lable} <i className={props.emoji}></i>
      </label>
      <br />
      <input
        onBlur={props.handler(props.setError, props.inputValue)}
        ref={props.inputValue}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={value}
        onChange={setValues}
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
