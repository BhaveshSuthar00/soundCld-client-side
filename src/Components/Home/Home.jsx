import "../Home/home.css";
import React, { useEffect, useContext } from "react";
import { HistoryTracks } from "./History";
import { HeaderTitleDiv, HomeDiv } from "./styleComponents";
import { Top } from "../Cat/Top";
import { Playlist } from "../Cat/Playlist";
import { ChangeSong } from "../../Contexts/Status";
import { useDispatch } from "react-redux";
import { setVisible } from "../../Redux/Player/Player";
const Home = () => {
  const { handleStatus2 } = useContext(ChangeSong)
  const dispatch = useDispatch();
  //let cat = ["Top", "Party", "Chill", "Bollywood", "Relax", "Workout"];
  useEffect(() => {
    dispatch(setVisible(true))
  }, [])
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
              <Top />
            </div>
            <br />
            <br />
            <HeaderTitleDiv>
              <h3>Top Playlists</h3>
              <p>Popular playlists from the SoundCloud community</p>
            </HeaderTitleDiv>
            <div id="elements-data">
              <Playlist />
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
