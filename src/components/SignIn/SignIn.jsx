import React from "react";
import classes from "./Signin.module.css";
import { useState } from "react";
import { useRef } from "react";
import httpRequest from "../../helpers/httpReq";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import wait from "../../helpers/wait";
import useInputChecker from "../../hooks/useInputChecker";
import InputField from "../InputField/InputField";

function SignIn() {
  const emailValue = useRef();
  const passwordValue = useRef();
  const navigate = useNavigate();
  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);
  const { checkEmail, checkPassword } = useInputChecker();
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
      await wait(1500);
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
          <InputField
            htmlFor="email"
            lable="Email"
            handler={checkEmail}
            inputValue={emailValue}
            type="email"
            id="email"
            placeholder="email"
            setError={setEmailHasError}
            InputHasError={emailHasError}
            msg="invalid email !"
            emoji="bi bi-envelope"
          />
          <InputField
            htmlFor="password"
            lable="Password"
            handler={checkPassword}
            inputValue={passwordValue}
            type="Password"
            id="Password"
            placeholder="Password"
            setError={setPasswordHasError}
            InputHasError={passwordHasError}
            msg="invalid password !"
            emoji="bi bi-key"
          />
          <div>
            <button className={classes.btn}>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
