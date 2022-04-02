import React, { useState, useEffect } from "react";

import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
const CardRight = ({ elem, index }) => {
    const [play_pause, setplay_pause] = useState(false);
    // const handlePlay = (value) => {
    //     console.log(value)
    //     let arrLor = JSON.parse(localStorage.getItem('click')) || [];
    //     while(arrLor!== 0){
    //         arrLor.pop();
    //     }
    //     if(play_pause){
    //         arrLor.push(elem);
    //         localStorage.setItem('click', JSON.stringify(arrLor));
    //     }
    // }
    return (
    <div>
        <div>
            <img src={elem.cover} alt="image" />
        </div>
        <div className="rightCorner">
            <div className="play_pause_icon" onClick={()=> {
                setplay_pause(!play_pause);
                // handlePlay(!play_pause);
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
