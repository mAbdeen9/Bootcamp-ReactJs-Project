import React, { useRef } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import useInputChecker from "../../hooks/useInputChecker";
import InputField from "../InputField/InputField";
import classes from "./CreateCard.module.css";

function UpdateCard({ card, triggerParent }) {
  const token = getToken();
  const nameValue = useRef();
  const descriptionValue = useRef();
  const addressValue = useRef();
  const phoneValue = useRef();
  const imgValue = useRef();
  const [imgHasError, setImgHasErro] = useState(false);
  const [phoneHasError, setPhoneHasError] = useState(false);
  const [nameHassError, setNameHasError] = useState(false);
  const [desHassError, setDesHasError] = useState(false);
  const [addressHassError, setAddressHasError] = useState(false);
  const { checkName, checkDescription, checkPhone } = useInputChecker();

  const handleUpdated = async (e) => {
    e.preventDefault();
    const cardInfo = {
      bizName: nameValue.current.value,
      bizDescription: descriptionValue.current.value,
      bizAddress: addressValue.current.value,
      bizPhone: phoneValue.current.value,
      bizImage: imgValue.current.value || undefined,
    };

    try {
      await httpRequest("PUT", `api/cards/${card._id}`, token, cardInfo);
      toast("Card Updated successfully");
      triggerParent();
    } catch (err) {
      toast(err.response.data);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleUpdated}>
        <div className={classes.form_box}>
          <InputField
            htmlFor="Name"
            lable="Name"
            handler={checkName}
            inputValue={nameValue}
            type="text"
            id="Name"
            placeholder="name"
            setError={setNameHasError}
            InputHasError={nameHassError}
            msg="must be minimum 2 characters"
            value={card.bizName}
          />
          <InputField
            htmlFor="Description"
            lable="Description"
            handler={checkDescription}
            inputValue={descriptionValue}
            type="text"
            id="Description"
            placeholder="description"
            setError={setDesHasError}
            InputHasError={desHassError}
            msg="must be minimum 2 characters"
            value={card.bizDescription}
          />

          <InputField
            htmlFor="Address"
            lable="Address"
            handler={checkDescription}
            inputValue={addressValue}
            type="text"
            id="Address"
            placeholder="address"
            setError={setAddressHasError}
            InputHasError={addressHassError}
            msg="must be minimum 2 characters"
            value={card.bizAddress}
          />

          <InputField
            htmlFor="Phone"
            lable="Phone"
            handler={checkPhone}
            inputValue={phoneValue}
            type="number"
            id="Phone"
            placeholder="Phone"
            setError={setPhoneHasError}
            InputHasError={phoneHasError}
            msg="length at least 9 characters long"
            value={card.bizPhone}
          />

          <InputField
            htmlFor="image"
            lable="Image"
            handler={checkDescription}
            inputValue={imgValue}
            type="text"
            id="image"
            placeholder="OPTIONAL 💥  image URL"
            setError={setImgHasErro}
            InputHasError={imgHasError}
            msg="must be minimum 2 characters"
          />
        </div>
        <button className={classes.btn}>Update</button>
      </form>
    </Fragment>
  );
}

export default UpdateCard;
