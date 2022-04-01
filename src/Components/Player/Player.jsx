import React, { useState, useEffect } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

// https://soundcloud-serverside.herokuapp.com/ => to all the route songs
import axios from "axios";

const Player = () => {
  const [data, setData] =
    useState(false) || JSON.parse(localStorage.getItem("status"));

  let localstr = JSON.parse(localStorage.getItem("click")) || [];

  useEffect(() => {}, [data]);
  return (
    <div>
      <ReactJkMusicPlayer
        defaultVolume={0.5}
        theme={"dark"}
        audioLists={localstr[0]}
        mode={"full"}
        preload={false}
        showDownload={false}
      />
    </div>
  );
};

export default Player;
