import React from "react";
import classes from "./Signin.module.css";
import useValidate from "../../hooks/useValidate";
import { useState } from "react";
import { useRef } from "react";
import httpRequest from "../../helpers/httpReq";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const navigate = useNavigate();
  const { validateEmail, validatePassword } = useValidate();
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const checkEmail = () => {
    let delay;
    clearTimeout(delay);
    delay = setTimeout(() => {
      const { error } = validateEmail({ email: emailValue.current.value });
      if (error) setEmailHasError(true);
      if (!error) setEmailHasError(false);
    }, 2000);
  };

  const checkPassword = () => {
    const { error } = validatePassword({
      password: passwordValue.current.value,
    });
    if (error) setPasswordHasError(true);
    if (!error) setPasswordHasError(false);
  };

  const validForm = !emailHasError && !passwordHasError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm) return;
    const userInfo = {
      email: emailValue.current.value,
      password: passwordValue.current.value,
    };

    try {
      const response = await httpRequest("POST", "api/auth", "", userInfo);
      localStorage.setItem("meta-data", JSON.stringify(response.data.token));
      toast("Successfully logged in 👋🏻 ");
      navigate("/", { replace: true });
      window.location.reload(true);
    } catch (err) {
      toast(err.response.data);
    }
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
              onChange={checkEmail}
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
