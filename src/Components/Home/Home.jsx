import axios from "axios";
import "../Home/home.css"
import React, { useState, useEffect } from "react";
import Cat from "../Cat/Cat";
import { HistoryTracks } from "./History";
import { HeaderTitleDiv } from "./styleComponents";

const Home = () => {
  let cat = ["Workout", "Party", "Chill", "Relax", "Sleep", "Study"];
  return (
    <>
      <div className="Head-div">
        <div className="playlist-div">
          {cat.map((el, index) => {
            return (
              <div className="Main-div" key={index}>
                <HeaderTitleDiv>
                  <h3>{el}</h3>
                  <p>Popular playlists from the SoundCloud community</p>
                </HeaderTitleDiv>
                <Cat current={el} key={index} />
              </div>
            );
          })}
        </div>
        <hr className="vertical-hr" />
        <div className="Listening-History">
          <HistoryTracks />
        </div>
      </div>
    </>
  );
};

export default Home;
