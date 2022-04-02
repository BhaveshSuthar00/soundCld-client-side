import React, { useState, useContext } from "react";

import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { ChangeSong } from "../../../Contexts/Status";
const CardRight = ({ elem }) => {
    const {handleStatus2} = useContext(ChangeSong)
    const [play_pause, setplay_pause] = useState(false);
    const handleIndex = (ele, value) =>{
        let localStr = JSON.parse(localStorage.getItem('click')) || [];
        while(localStr.length!== 0) {
            localStr.pop();
        }
        if(value){
            let empty = [];
            localStr.push([empty]);
        } else { 
            localStr.push([ele])
        }
        localStorage.setItem('click', JSON.stringify(localStr));
        handleStatus2()
    }
    return (
    <div>
        <div>
            <img src={elem.cover} alt="cover" />
        </div>
        <div className="rightCorner">
            <div className="play_pause_icon" onClick={()=> {
                handleIndex(elem, play_pause)
                setplay_pause(!play_pause);
            }}>
            {play_pause === false ?  <AiFillPlayCircle /> : <MdPauseCircleFilled /> }
            </div>
            <div className="singer_name">
                <div className="singer_main">
                    <p>{elem.singer}</p>
                    <h2>{elem.name}</h2>
                </div>
                <div className="category"># {elem.category}</div>
            </div>
        </div>
    </div>
    );
};

export default CardRight;
