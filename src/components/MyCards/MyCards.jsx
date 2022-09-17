import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import Card from "../Card/Card";
import classes from "./MyCards.module.css";
import { toast } from "react-toastify";
import OverLay from "../OverLay/OverLay";
import UpdateCard from "../CreateCard/UpdateCard";

function MyCards() {
  const token = getToken();
  const [cards, setCards] = useState([]);
  const [reload, setReload] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState();
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await httpRequest("GET", "api/cards", token);
        setCards(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCards();
  }, [token, reload, showModal]);

  const handleDel = (cardId) => {
    return async () => {
      try {
        await httpRequest("delete", `api/cards/${cardId}`, token);
        setReload((state) => (state = state + 1));
        toast("card deleted successfully");
      } catch (err) {
        toast("card not found");
      }
    };
  };

  const handleEdit = (card) => {
    return async () => {
      setShowModal((state) => !state);
      setCardToUpdate(card);
    };
  };

  return (
    <div className={classes.box}>
      <h1>My Cards </h1>
      <h3>Create new Card</h3>
      <div className={classes.card_box}>
        {cards.length >= 1 ? (
          cards.map((card, i) => {
            return (
              <Fragment key={i}>
                <Card
                  bizName={card.bizName}
                  bizDescription={card.bizDescription}
                  bizAddress={card.bizAddress}
                  bizPhone={card.bizPhone}
                  bizImage={card.bizImage}
                  handleDel={handleDel(card._id)}
                  handleEdit={handleEdit(card)}
                />
              </Fragment>
            );
          })
        ) : (
          <p>No Cards ...</p>
        )}
      </div>
      {showModal && (
        <OverLay>
          <UpdateCard
            triggerParent={() => setShowModal((state) => !state)}
            card={cardToUpdate}
          />
          <div></div>
        </OverLay>
      )}
    </div>
  );
}

export default MyCards;
