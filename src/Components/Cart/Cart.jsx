import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { IndividualDiv, MainDiv } from "../Home/styleComponents";

const Cart = ({ category }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/tracks").then(({ data }) => {
      setTracks(data);
    });
  }, []);

  console.log(tracks);
  return (
    <MainDiv>
      {tracks.map((el) => {
        return (
          <>
            <IndividualDiv>
              <img src={el.image} alt="" />
              <p>{el.catogery}</p>
              <p>{el.title}</p>
            </IndividualDiv>
          </>
        );
      })}
    </MainDiv>
  );
};

export default Cart;
