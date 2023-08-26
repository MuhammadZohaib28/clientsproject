import React from "react";
import "./cards.scss";
import { cardData } from "../data";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cardscontainer">
        {cardData.map((item) => {
          return (
            <div className="cardcontainer">
              <div className="imgcontainer">
                <img src={item.picture} alt="" />
              </div>
              <p>{item.desciption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
