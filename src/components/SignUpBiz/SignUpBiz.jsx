import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useValidate from "../../hooks/useValidate";
import classes from "./SignUpBiz.module.css";

function SignUpBiz() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const nameValue = useRef();
  const { validateEmail, validatePassword, validateName } = useValidate();
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);

  const checkEmail = () => {
    const { error } = validateEmail({ email: emailValue.current.value });
    if (error) setEmailHasError(true);
    if (!error) setEmailHasError(false);
  };

  const checkPassword = () => {
    const { error } = validatePassword({
      password: passwordValue.current.value,
    });
    if (error) setPasswordHasError(true);
    if (!error) setPasswordHasError(false);
  };
  const checkName = () => {
    const { error } = validateName({
      name: nameValue.current.value,
    });
    if (error) setNameHasError(true);
    if (!error) setNameHasError(false);
  };
  const validForm = !emailHasError && !passwordHasError && !nameHasError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validForm) return;
    const userInfo = {
      email: emailValue.current.value,
      password: passwordValue.current.value,
    };
    console.log(userInfo);
  };

  return (
    <div className={classes.box}>
      <h2>Sign up as Business Partner</h2>
      <h3>Open a new account, It's free 👍 </h3>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_box}>
          <div>
            <label htmlFor="email">
              Name <i className="bi bi-person"></i>
            </label>
            <br />
            <input
              onChange={checkName}
              ref={nameValue}
              type="text"
              name="name"
              id="name"
              placeholder="name"
            />
            <br />
            {nameHasError && (
              <span className={classes.invaild_email}> invalid name !</span>
            )}
          </div>
          <div>
            <label htmlFor="email">
              Email <i className="bi bi-envelope"></i>
            </label>
            <br />
            <input
              onBlur={checkEmail}
              ref={emailValue}
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
            <br />
            {emailHasError && (
              <span className={classes.invaild_email}> invalid email !</span>
            )}
          </div>
          <div>
            <label htmlFor="email">
              Password <i className="bi bi-key"></i>
            </label>
            <br />
            <input
              onChange={checkPassword}
              ref={passwordValue}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              maxLength={10}
            />
            <br />
            {passwordHasError && (
              <span className={classes.invaild_password}>
                invalid password !
              </span>
            )}
          </div>
          <div>
            <button className={classes.btn}>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpBiz;
