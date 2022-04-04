import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ChangeSong } from "../../Contexts/Status";
import { ElementDiv } from "../Home/styleComponents";

export const Playlist = () => {
  let dataLocalStroage = [];
  const [getplayist, setGetPlaylist] = useState([]);
  const { handleStatus2, handleHistory } = useContext(ChangeSong);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://soundcloud-serverside.herokuapp.com/list")
      .then((response) => {
        setGetPlaylist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSongPlaylist = (data) => {
    let cat = [];
    if (data === "bollywood") {
      cat = getplayist[0].playlist;
    }
    if (data === "top100") {
      cat =  getplayist[1].playlist;;
    }
    if (data === "party") {
      cat = getplayist[3].playlist;;
    }
    if (data === "new_release") {
      cat = getplayist[4].playlist;
    }
    if (data === "sad") {
      cat = getplayist[6].playlist;;
    }
    if (data === "romance") {
      cat =  getplayist[5].playlist;;
    }
    if (data === "chill") {
      cat = getplayist[7].playlist;;
    }
    if (data === "workout") {
      cat = getplayist[8].playlist;;
    }
    if (data === "goodvibes") {
      cat = getplayist[9].playlist;
    }
    dataLocalStroage.push(cat);
    handleStatus2();
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(cat[0])
    localStorage.setItem('history', JSON.stringify(history));
    handleHistory();
    localStorage.setItem("click", JSON.stringify(dataLocalStroage));
  };

  return (
    <>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("bollywood");
          }}
          src="https://cdns-images.dzcdn.net/images/cover/8139fc6191e8f102e693c83f35093b59/500x500.jpg"
          alt=""
        />
        <p>Bollywood</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("top100");
          }}
          src="https://i.pinimg.com/564x/3e/e8/75/3ee875e8002d3cc8a1a54c7584764bb1.jpg"
          alt=""
        />
        <p>Top100</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("party");
          }}
          src="https://i.scdn.co/image/ab67616d0000b273a24ce281e4b458eb83fa9c48"
          alt=""
        />
        <p>Party</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("new_release");
          }}
          src="https://i.ytimg.com/vi/IROXa2uGWMo/maxresdefault.jpg"
          alt=""
        />
        <p>New Release</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("romance");
          }}
          src="https://i.scdn.co/image/ab67616d0000b27385824eddafd30494f12f63eb"
          alt=""
        />
        <p>Romance</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("sad");
          }}
          src="https://i.scdn.co/image/ab67706c0000bebbc58636fc206c772c64a7e56c"
          alt=""
        />
        <p>Sad</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("chill");
          }}
          src="https://i.scdn.co/image/ab67706f0000000321aab90a9c6d10ccca8d6c78"
          alt=""
        />
        <p>Chill</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("workout");
          }}
          src="https://i.scdn.co/image/ab67616d0000b273a355214f56bdb7bb87d7d69e"
          alt=""
        />
        <p>Workout</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("goodvibes");
          }}
          src="https://cdn.musicvine.com/images/good-vibes-collection-cover-v2_5528980777329875.jpg"
          alt=""
        />
        <p>Good Vibes</p>
      </ElementDiv>
    </>
  );
};
