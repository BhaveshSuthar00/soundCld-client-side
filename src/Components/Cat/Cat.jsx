import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { IndividualDiv, MainDiv } from "../Home/styleComponents";

const Cart = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/tracks").then((res) => {
      setTracks(res.data);
    });
  };

  //
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://theaudiodb.p.rapidapi.com/searchalbum.php",
      params: { s: "daft_punk" },
      headers: {
        "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
        "X-RapidAPI-Key": "4c04c6f293msh597148560a8cd72p1aa97cjsne71d49060ed3",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <MainDiv>
      {tracks.map((el, index) => {
        return (
          <>
            <IndividualDiv key={index}>
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
