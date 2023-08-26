import React from "react";
import "./wait.scss";
import { stats } from "../data";

const Wait = () => {
  return (
    <div className="wait">
      <div className="container">
        <h1>Why Wait?</h1>
        <p>
          Imagine completing your grocery shopping within minutes while
          immersing yourself in a futuristic adventure. On the Way offers you
          that unique experience and much more.
        </p>
        <div className="statscontainer">
          {stats.map((item) => {
            return (
              <div className="stats" key={item.id}>
                <h2>{item.num}</h2>
                <span>{item.tagline}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wait;
