import axios from "axios";
import "../Home/home.css";
import React, { useState, useEffect } from "react";
import { HistoryTracks } from "./History";
import { HeaderTitleDiv, HomeDiv } from "./styleComponents";
import { Top } from "../Cat/Top";
import { Playlist } from "../Cat/Playlist";

const Home = ({ handleStatus, status }) => {
  let cat = ["Top", "Party", "Chill", "Bollywood", "Relax", "Workout"];
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
