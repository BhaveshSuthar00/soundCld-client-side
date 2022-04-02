import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const Player = () => {
  let localstr = JSON.parse(localStorage.getItem("click")) || [];  
  
  return (
    <div>
      <ReactJkMusicPlayer
        defaultVolume={0.5}
        theme={"dark"}
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
