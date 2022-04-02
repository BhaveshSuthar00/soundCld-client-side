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
  // useEffect(()=>{
    // try {
      
    // } catch (er) {
    //   console.log(er);
    // }
  // },[])

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
    // var bollywood = getplayist[0].playlist;
      var top100 = getplayist[1].playlist;
      var party = getplayist[3].playlist;
      var new_release = getplayist[4].playlist;
      var romance = getplayist[5].playlist;
      var sad = getplayist[6].playlist;
      var chill = getplayist[7].playlist;
      var workout = getplayist[8].playlist;
      var good_vibes = getplayist[9].playlist;
    let cat = [];
    if (data === "bollywood") {
      // console.log(data, category.pop);
      cat = getplayist[0].playlist;
      // console.log("catdata", cat);
    }
    if (data === "top100") {
      // console.log(data, category.classical);
      cat = top100;
    }
    if (data === "party") {
      // console.log(data, category.rock);
      cat = party;
    }
    if (data === "new_release") {
      // console.log(data, category.jezz);
      cat = new_release;
    }
    if (data === "sad") {
      // console.log(data, category.pop);
      cat = sad;
      // console.log("catdata", cat);
    }
    if (data === "romance") {
      // console.log(data, category.classical);
      cat = romance;
    }
    if (data === "chill") {
      // console.log(data, category.rock);
      cat = chill;
    }
    if (data === "workout") {
      // console.log(data, category.jezz);
      cat = workout;
    }
    if (data === "goodvibes") {
      // console.log(data, category.jezz);
      cat = good_vibes;
    }
    // while (dataLocalStroage.length > 0) {
    //   dataLocalStroage.pop();
    // }
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
          src="https://www.music-bazaar.com/album-images/vol32/1545/1545873/3419275-big/Party-Songs-Best-Dance-Running-CD2-cover.jpg"
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
