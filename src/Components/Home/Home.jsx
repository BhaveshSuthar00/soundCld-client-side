import axios from "axios";
import React, { useState, useEffect } from "react";
import Cat from "../Cat/Cat"
import { HeaderTitleDiv } from "./styleComponents";

const Home = () => {
  let cat = ["Workout", "Party", "Chill", "Relax", "Sleep", "Study"];
  return (
    <div>
      {cat.map((el) => {
        return (
          <div className="Main-div">
            <HeaderTitleDiv>
              <h3>{el}</h3>
              <p>Popular playlists from the SoundCloud community</p>
            </HeaderTitleDiv>
            <Cat current={el} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
