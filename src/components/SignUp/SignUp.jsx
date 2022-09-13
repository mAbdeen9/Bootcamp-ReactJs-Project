import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useValidate from "../../hooks/useValidate";
import classes from "./SignUp.module.css";
import httpRequest from "../../helpers/httpReq";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm) return;
    const userInfo = {
      email: emailValue.current.value,
      password: passwordValue.current.value,
      name: nameValue.current.value,
      biz: false,
    };

    try {
      const res = await httpRequest("POST", "api/users/", "", userInfo);
      toast(`${res.data.name} you successfully sign up `);
      navigate("/sign-in");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <div className={classes.box}>
      <h2>Sign up to Real App</h2>
      <h3>Open a new account, It's free 🤩 </h3>
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
              <span className={classes.invaild_email}>
                "Name" length at least 2 characters
              </span>
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
              <span className={classes.invaild_email}>
                "Email" must be a valid email
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password">
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
                "Password" length at least 6 characters
              </span>
            )}
          </div>
          <div>
            <button className={classes.btn}>Sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
