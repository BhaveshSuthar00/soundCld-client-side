import React, {useContext} from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { ChangeSong } from "../../Contexts/Status";

const Player = () => {
  let localstr = JSON.parse(localStorage.getItem("click")) || [];  
  const {statusChange , handleStatus2} = useContext(ChangeSong)
  
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
