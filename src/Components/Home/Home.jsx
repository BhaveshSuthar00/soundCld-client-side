import axios from "axios";
import "../Home/home.css";
import React, { useState, useEffect } from "react";

import { HistoryTracks } from "./History";
import { HeaderTitleDiv, HomeDiv } from "./styleComponents";
import { Top } from "../Cat/Top";

const Home = () => {
  let cat = ["Top", "Party", "Chill", "Bollywood", "Relax", "Workout"];
  return (
    <>
      <HomeDiv>
        <div>
          <div className="Main-div">
            <HeaderTitleDiv>
              <h3>Top</h3>
              <p>Popular playlists from the SoundCloud community</p>
            </HeaderTitleDiv>
            <div id="elements-data">
              <Top />
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
