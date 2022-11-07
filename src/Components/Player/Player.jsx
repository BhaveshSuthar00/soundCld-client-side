import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {useDispatch, useSelector} from 'react-redux'
import { addTOHistory } from "../../Redux/History/History";
const Player = () => {
  const { currentPlayer, visible } = useSelector(store  => store.player);
  let localstr = JSON.parse(localStorage.getItem("click")) || [];
  let localPlayer = JSON.parse(localStorage.getItem("playerAble")) || [];
  const dispatch = useDispatch();
  const handleAddHistory = (currentSong) => {
      dispatch(addTOHistory(currentSong));
    }
    if(!visible) return <></> 
  if (currentPlayer.length <= 0) {
    return <></>
  }
  return (
    <>
      <ReactJkMusicPlayer
        defaultVolume={0.5}
        theme={"dark"}
        autoPlay={false}
        onAudioPlay={(e) => handleAddHistory(e)}
        drag={false}
        showPlayMode={false}
        showThemeSwitch={false}
        audioLists={currentPlayer}
        clearPriorAudioLists={true}
        autoPlayInitLoadPlayList={true}
        mode={"full"}
        preload={false}
        showDownload={false}
      />
    </>
  );
};

export default Player;
