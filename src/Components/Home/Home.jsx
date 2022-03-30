import axios from "axios";
import React, { useState, useEffect } from "react";
import Cat from "../Cat/Cat"
import { HeaderTitleDiv } from "./styleComponents";

const Home = () => {
  let cat = ["Workout", "Party", "Chill", "Relax", "Sleep", "Study"];
  return (
    <div>
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
  );
};

export default Home;
