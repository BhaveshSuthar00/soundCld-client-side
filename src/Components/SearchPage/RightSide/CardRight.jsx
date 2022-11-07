import React, { useState, useContext } from "react";

import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { setCurrentPlayerWithLocal } from "../../../Redux/Player/Player";
const CardRight = ({ elem , play_pause, changeToggler, index }) => {
    const dispatch = useDispatch();
    const handleIndex = (ele, value) => {
        if (value) {
            dispatch(setCurrentPlayerWithLocal([]))
        } else {
            dispatch(setCurrentPlayerWithLocal([ele]))
        }
        changeToggler(index);
    }
    return (
        <div>
            <div>
                <img src={elem.cover} alt="cover" />
            </div>
            <div className="rightCorner">
                <div className="play_pause_icon" onClick={() => handleIndex(elem, play_pause)}>
                    {play_pause === false  ? <AiFillPlayCircle /> : <MdPauseCircleFilled />}
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
