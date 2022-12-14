import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {useDispatch, useSelector} from 'react-redux'
import { addTOHistory } from "../../Redux/History/History";
import { setOnlyIndex } from "../../Redux/Player/Player";
const Player = () => {
  const { loginSignIn, currentPlayer, visible, currentIndex } = useSelector(store  => store.player);
  const dispatch = useDispatch();
  const handleAddHistory = (currentSong) => {
    dispatch(addTOHistory(currentSong));
  }
  if(!visible) return <></> 
  if(loginSignIn) return <></>
  if (currentPlayer.length <= 0) return <></>
  return (
    <>
      <ReactJkMusicPlayer
        defaultVolume={0.5}
        theme={"dark"}
        autoPlay={visible ? true : false}
        onAudioPlay={(e) => handleAddHistory(e)}
        drag={false}
        glassBg={true}
        onPlayIndexChange={(e) => dispatch(setOnlyIndex(e))}
        showPlayMode={false}
        spaceBar={true}
        playIndex={currentIndex}
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
