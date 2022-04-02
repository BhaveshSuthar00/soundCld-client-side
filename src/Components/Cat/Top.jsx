import axios from "axios";
import { useEffect, useState } from "react";
import { ElementDiv } from "../Home/styleComponents";

export const Top = ({ handleStatus }) => {
  let dataLocalStroage = [];
  const [category, setCategory] = useState({
    pop: [],
    rock: [],
    jezz: [],
    classical: [],
  });
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://soundcloud-serverside.herokuapp.com/api/category/all")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSongPlaylist = (data) => {
    let cat = [];
    if (data === "pop") {
      // console.log(data, category.pop);
      cat = category.pop;
      // console.log("catdata", cat);
    }
    if (data === "classical") {
      // console.log(data, category.classical);
      cat = category.classical;
    }
    if (data === "rock") {
      // console.log(data, category.rock);
      cat = category.rock;
    }
    if (data === "jazz") {
      // console.log(data, category.jezz);
      cat = category.jazz;
    }
    while (dataLocalStroage.length > 0) {
      dataLocalStroage.pop();
    }
    dataLocalStroage.push(cat);
    handleStatus();
    localStorage.setItem("click", JSON.stringify(dataLocalStroage));
  };
  return (
    <>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("pop");
          }}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553"
          alt=""
        />
        <p>Pop</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("classical");
          }}
          src="https://i.scdn.co/image/ab67706c0000bebb1da40ad6c7704a5997ca72d7"
          alt=""
        />
        <p>Classical</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("rock");
          }}
          src="https://cdn.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.webp"
          alt=""
        />
        <p>Rock</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("jazz");
          }}
          src="https://brainpickers.co.uk/img/game-icons/jazz-song-challenge.png"
          alt=""
        />
        <p>Jazz</p>
      </ElementDiv>
    </>
  );
};
