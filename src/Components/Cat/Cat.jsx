import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { IndividualDiv, MainDiv } from "../Home/styleComponents";

const Cart = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {}, []);

  const handleSaved = () => {
    console.log("here");
  };

  return (
    <MainDiv>
      {tracks.map((el, index) => {
        return (
          <>
            <IndividualDiv key={index} onClick={handleSaved}>
              <img src={el.image} alt="" className="cat-image" />
              <p>{el.title}</p>
            </IndividualDiv>
          </>
        );
      })}
    </MainDiv>
  );
};

export default Cart;
