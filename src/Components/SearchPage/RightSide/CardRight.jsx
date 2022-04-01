import React, { useState, useContext } from "react";

import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { ChangeSong } from "../../../Contexts/Status";
const CardRight = ({ elem, index }) => {
    const {handleStatus2, statusChange} = useContext(ChangeSong)
    const [play_pause, setplay_pause] = useState(false);
    const handleIndex = (ele) =>{
        let localStr = JSON.parse(localStorage.getItem('click')) || [];
        while(localStr.length!== 0) {
            localStr.pop();
        }
        localStr.push([ele])
        localStorage.setItem('click', JSON.stringify(localStr));
        handleStatus2()
    }
    return (
    <div onClick={()=>{handleIndex(elem)}}>
        <div>
            <img src={elem.cover} alt="image" />
        </div>
        <div className="rightCorner">
            <div className="play_pause_icon" onClick={()=> {
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
