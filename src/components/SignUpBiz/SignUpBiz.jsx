import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpRequest from "../../helpers/httpReq";
import useInputChecker from "../../hooks/useInputChecker";
import InputField from "../InputField/InputField";
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
          <InputField
            htmlFor="name"
            lable="Name"
            handler={checkName}
            inputValue={nameValue}
            type="text"
            id="name"
            placeholder="name"
            setError={setNameHasError}
            InputHasError={nameHasError}
            msg="length at least 2 characters"
            emoji="bi bi-person"
          />
          <InputField
            htmlFor="email"
            lable="Email"
            handler={checkEmail}
            inputValue={emailValue}
            type="text"
            id="email"
            placeholder="email"
            setError={setEmailHasError}
            InputHasError={emailHasError}
            msg="must be a valid email"
            emoji="bi bi-envelope"
          />
          <InputField
            htmlFor="password"
            lable="Password"
            handler={checkPassword}
            inputValue={passwordValue}
            type="password"
            id="password"
            placeholder="password"
            setError={setPasswordHasError}
            InputHasError={passwordHasError}
            msg="length at least 6 characters"
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

export default SignUpBiz;
