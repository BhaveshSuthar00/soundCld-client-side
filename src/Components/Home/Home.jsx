import "../Home/home.css";
import React, { useEffect } from "react";
import { HistoryTracks } from "./History";
import { HeaderTitleDiv, HomeDiv } from "./styleComponents";
import { Top } from "../Cat/Top";
import { Playlist } from "../Cat/Playlist";
import { useDispatch, useSelector } from "react-redux";
import { setLogSign } from "../../Redux/Player/Player";
import { getAllLikedSongs } from "../../Redux/Liked/LikedSong";
const Home = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(store => store.home);
  const { user } = useSelector(store => store.login);
  useEffect(() => {
    dispatch(setLogSign(false));
    if(user._id) dispatch(getAllLikedSongs(user));
  }, [ dispatch ])
  if(loading) return <></>
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
