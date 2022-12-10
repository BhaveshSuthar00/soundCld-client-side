import React from "react";

import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlayer } from "../../../Redux/Player/Player";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";
import { addToLikeSongs, remoeSongFromLikeList } from "../../../Redux/Liked/LikedSong";
const CardRight = ({ elem , play_pause, changeToggler, index, setLoading }) => {
    const dispatch = useDispatch();
    const { loggedIn, user } = useSelector(store => store.login);
    const { songIds } = useSelector(store => store.liked);
    
    const handleIndex = (ele, value) => {
        if (value) {
            dispatch(setCurrentPlayer([]));
        } else {
            dispatch(setCurrentPlayer([ele]));
        }
        changeToggler(index);
    }
    const heartClicked = async(userId, songId) => {
        setLoading(true);
        await dispatch(addToLikeSongs(userId, songId));
        setLoading(false);
    }
    const removeLikedSong = async(userId, songId) => {
        setLoading(true);
        await dispatch(remoeSongFromLikeList(userId, songId));
        setLoading(false);
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
                        <h2>{elem.name}</h2>
                        <p>{elem.singer}</p>
                    </div>
                    <div className="category"># {elem.category}</div>
                    {
                        loggedIn ? <IconButton style={{transition : "all 0.5s"}} variant='ghost' _hover={{bgColor : 'transpanant'}} _active={{bgColor:'transparant'}} _focus={{outline : 0}} icon={!songIds.includes(elem._id) ? <BsHeart /> : <BsHeartFill />} color={!songIds.includes(elem._id) ? 'black' : 'red'} bgColor={'transparent'} onClick={() => !songIds.includes(elem._id) ? heartClicked(user._id, elem._id) : removeLikedSong(user._id, elem._id)}/> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default CardRight;
