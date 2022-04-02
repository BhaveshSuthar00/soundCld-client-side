import axios from "axios";
import "../Home/home.css";
import React, { useState, useEffect,useContext } from "react";
import { HistoryTracks } from "./History";
import { HeaderTitleDiv, HomeDiv } from "./styleComponents";
import { Top } from "../Cat/Top";
import { Playlist } from "../Cat/Playlist";
import { ChangeSong } from "../../Contexts/Status";
const Home = ({ handleStatus, status }) => {
  const {handleStatus2} = useContext(ChangeSong)
  let cat = ["Top", "Party", "Chill", "Bollywood", "Relax", "Workout"];
  useEffect(()=>{
    let localPlayer = JSON.parse(localStorage.getItem("playerAble")) || [];
    localPlayer.pop();
    localStorage.setItem('playerAble', JSON.stringify(localPlayer));
    handleStatus2();
  },[])
  return (
    <>
      <HomeDiv>
        <div>
          <div className="Main-div">
            <HeaderTitleDiv>
              <h3>Top category</h3>
              <p>Popular playlists from the SoundCloud community</p>
            </HeaderTitleDiv>
            <div id="elements-data">
              <Top handleStatus={handleStatus} status={status} />
            </div>
            <br />
            <br />
            <HeaderTitleDiv>
              <h3>Top Playlists</h3>
              <p>Popular playlists from the SoundCloud community</p>
            </HeaderTitleDiv>
            <div id="elements-data">
              <Playlist handleStatus={handleStatus} status={status} />
            </div>
          </div>
        </div>
        <div className="Listening-History">
          <HistoryTracks />
        </div>
      </HomeDiv>
    </>
  );
};

export default Home;
