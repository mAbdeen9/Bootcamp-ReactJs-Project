import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useValidate from "../../hooks/useValidate";
import classes from "./Signin.module.css";

function SignIn() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const { validateEmail, validatePassword } = useValidate();
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setpasswordIsTouched] = useState(false);

  const checkEmail = () => {
    setEmailIsTouched(true);
    const { error } = validateEmail({ email: emailValue.current.value });
    if (error) setEmailHasError(true);
    if (!error) setEmailHasError(false);
  };

  const checkPassword = () => {
    setpasswordIsTouched(true);
    const { error } = validatePassword({
      password: passwordValue.current.value,
    });
    if (error) setPasswordHasError(true);
    if (!error) setPasswordHasError(false);
  };

  const validForm =
    !emailHasError && !passwordHasError && emailIsTouched && passwordIsTouched;

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
      <h1>
        Sign in <i className="bi bi-box-arrow-in-right"></i>
      </h1>
      <form onSubmit={handleSubmit}>
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

export default SignIn;
