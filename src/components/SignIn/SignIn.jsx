import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useValidate from "../../hooks/useValidate";

import classes from "./Signin.module.css";
function SignIn() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const { validateEmail, validatePassword } = useValidate();
  const [emailError, setEmailError] = useState(false);
  const [emailPassword, setEmailPassword] = useState(false);

  const checkEmail = () => {
    const { error } = validateEmail({ email: emailValue.current.value });
    if (error) setEmailError(true);
    if (!error) setEmailError(false);
  };

  const checkPassword = () => {
    const { error } = validatePassword({
      password: passwordValue.current.value,
    });
    if (error) setEmailPassword(true);
    if (!error) setEmailPassword(false);
  };

  return (
    <div className={classes.box}>
      <h1>
        Sign in <i className="bi bi-box-arrow-in-right"></i>
      </h1>
      <form>
        <div className={classes.form_box}>
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
            {emailError && (
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
            {emailPassword && (
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

export default SignIn;
