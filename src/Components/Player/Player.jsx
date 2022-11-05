import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { HistoryTracks } from "../Home/History";

const Player = () => {
  let localstr = JSON.parse(localStorage.getItem("click")) || [];
  let localPlayer = JSON.parse(localStorage.getItem("playerAble")) || [];
  const handleAddHistory = (currentSong) => {
    
    // let history = JSON.parse(localStorage.getItem("historyNew")) || [];
    // history = history.reverse();
    // if(history.length > 6){
    //   history = history.splice(6, history.length - 6);
    // }
    // history = history.reverse();
    // let newarr = history.filter((item) => item._id !== currentSong._id);
    // for(let i = 0; i < newarr.length; i++) {
    //     newarr.push(currentSong)      
    // }
    // console.log(newarr, 'this is new arr')
    // localStorage.setItem("historyNew", JSON.stringify([newarr]));
  }
  if (localPlayer.length === 1) {
    return <></>
  }
  if(localstr.length === 0) return <></>
  
  return (
    <div >
      <ReactJkMusicPlayer
        defaultVolume={0.5}
        theme={"dark"}
        onAudioPlay={(e) => handleAddHistory(e)}
        drag={false}
        showPlayMode={false}
        showThemeSwitch={false}
        audioLists={localstr[0]}
        clearPriorAudioLists={true}
        autoPlayInitLoadPlayList={true}
        mode={"full"}
        preload={false}
        showDownload={false}
      />
    </div>
  );
};

export default Player;
