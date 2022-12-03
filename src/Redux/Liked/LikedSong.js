import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../constants";

const likedSlice = createSlice({
    name : "liked",
    initialState : {
        songs : [],
        songIds : [],
    },
    reducers : {
        setLikedSongs : (state, {payload}) =>{
            state.songs = payload.songs;
            state.songIds = payload.songIds;
        }
    }
})

export const { setLikedSongs } = likedSlice.actions;

export const addToLikeSongs = (userId, songId) => async(dispatch) => {
    try {
        const updateLikeList = await axios.post(`${BaseURL}/liked`, {userId : userId, songId : songId});
        dispatch(setLikedSongs(updateLikeList.data));
    }
    catch (err) {
        return err.response.data.message;
    }
}

export const remoeSongFromLikeList = (userId, songId) => async(dispatch, getState) => {
    try {
        const removedList = await axios.delete(`${BaseURL}/liked/delete/${songId}?userId=${userId}`);
        dispatch(setLikedSongs(removedList.data));
    }
    catch (err) {

    }
}

export default likedSlice.reducer;