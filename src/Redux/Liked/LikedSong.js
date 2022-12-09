import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../constants";
import { setSongList } from "../Player/Player";

const likedSlice = createSlice({
    name : "liked",
    initialState : {
        songs : [],
        songIds : [],
    },
    reducers : {
        setLikedSongs : (state, {payload}) =>{
            state.songs = payload.songs;
            if(payload.songIds) state.songIds = payload.songIds;
        }
    }
})

export const { setLikedSongs } = likedSlice.actions;
export const songIdsFun = (list) => {
    return list.map((item) => item._id);
}
export const getAllLikedSongs = (user) => async(dispatch) => {
    try {
        const repsonse = await axios.get(`${BaseURL}/liked/${user._id}`);
        if(repsonse.data.message || repsonse.data.length === 0){
            // setShow(true);
            // setLoading(false);
            return false;
        }
        dispatch(setSongList(repsonse.data));
        const songIds = songIdsFun(repsonse.data)
        dispatch(setLikedSongs({songs : repsonse.data, songIds }));
        return true;
    }
    catch(err){

    }
}
export const addToLikeSongs = (userId, songId) => async(dispatch) => {
    try {
        const updateLikeList = await axios.post(`${BaseURL}/liked`, {userId : userId, songId : songId});
        const songIds = songIdsFun(updateLikeList.data);
        
        dispatch(setLikedSongs({songs : updateLikeList.data, songIds}));
    }
    catch (err) {
        console.log(err);
        return err.response.data.message;
    }
}

export const remoeSongFromLikeList = (userId, songId) => async(dispatch, getState) => {
    try {
        const removedList = await axios.delete(`${BaseURL}/liked/delete/${songId}?userId=${userId}`);
        const songIds = songIdsFun(removedList.data);
        dispatch(setLikedSongs({songs : removedList.data, songIds}));
    }
    catch (err) {
        console.log(err);
    }
}

export default likedSlice.reducer;