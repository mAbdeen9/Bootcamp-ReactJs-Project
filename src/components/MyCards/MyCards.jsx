import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import Card from "../Card/Card";
import classes from "./MyCards.module.css";

function MyCards() {
  const token = getToken();
  const [cards, setCards] = useState([]);

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
  }, [token]);

  return (
    <div className={classes.box}>
      <h1>My Cards </h1>
      <h3>Create new Card</h3>
      <div className={classes.card_box}>
        {cards.length >= 1 ? (
          cards.map((card, i) => {
            return (
              <Card
                key={i}
                bizName={card.bizName}
                bizDescription={card.bizDescription}
                bizAddress={card.bizAddress}
                bizPhone={card.bizPhone}
                bizImage={card.bizImage}
              />
            );
          })
        ) : (
          <p>No Cards ...</p>
        )}
      </div>
    </div>
  );
}

export default MyCards;
