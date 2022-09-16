import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpRequest from "../../helpers/httpReq";
import useInputChecker from "../../hooks/useInputChecker";
import classes from "./SignUpBiz.module.css";

function SignUpBiz() {
  const navigate = useNavigate();
  const emailValue = useRef();
  const passwordValue = useRef();
  const nameValue = useRef();
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const [nameHasError, setNameHasError] = useState(false);
  const { checkEmail, checkPassword, checkName } = useInputChecker();
  const validForm = !emailHasError && !passwordHasError && !nameHasError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validForm) return;
    const userInfo = {
      email: emailValue.current?.value,
      password: passwordValue?.current?.value,
      name: nameValue.current?.value,
      biz: true,
    };
    try {
      const res = await httpRequest("POST", "api/users/", "", userInfo);
      toast(`${res.data.name} you successfully sign up`);
      navigate("/sign-in");
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <div className={classes.box}>
      <h2>Sign up as Business Partner</h2>
      <h3>Open a new account, It's free 👍 </h3>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_box}>
          <div>
            <label htmlFor="name">
              Name <i className="bi bi-person"></i>
            </label>
            <br />
            <input
              onChange={checkName(setNameHasError, nameValue)}
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
              onChange={checkEmail(setEmailHasError, emailValue)}
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
              onChange={checkPassword(setPasswordHasError, passwordValue)}
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
            <button className={classes.btn}>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpBiz;
