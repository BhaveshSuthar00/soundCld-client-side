import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../constants";

const slice = createSlice({
    name: "player",
    initialState : {
        currentPlayer : JSON.parse(localStorage.getItem('click')) || [],
        visible : false,
        songList : JSON.parse(localStorage.getItem('click')) || [],
        currentIndex : 0,
        toggleList : [],
        loginSignIn : false,
    },
    reducers : {
        setToggleList : (state, action) => {
            state.toggleList = action.payload;
        },
        setLogSign : (state, action) => {
            state.loginSignIn = action.payload;
        },
        setCurrentPlayer : (state, action) => {
            state.currentPlayer = action.payload;
            state.visible = true;
            state.currentIndex = 0;

        },
        setVisible : (state , action) => {
            state.visible = action.payload;
        },
        removeSongs : (state, action) => {
            localStorage.removeItem('click');
            state.currentPlayer = [];
        },
        setSongList : (state, action) => {
            state.songList = action.payload;
        },
        setCurrentIndex : (state, action) => {
            state.currentIndex = action.payload.currentIndex;
            state.visible = true;
            state.currentPlayer = action.payload.currentPlayer;
        },
        setOnlyIndex : (state, action) => {
            state.currentIndex = action.payload;
        }
    },
})

export const { setLogSign, setToggleList, setOnlyIndex, setCurrentPlayer, setVisible, removeSongs, setSongList, setCurrentIndex } = slice.actions;
export const setSongListInLocal = (song) => async(dispatch) => {
    localStorage.setItem('click', JSON.stringify(song));
    dispatch(setSongList(song));
}
export const setTogglerFunction = (list) => (dispatch) => {
    const newList = new Array(list.length).fill(false);
    dispatch(setToggleList(newList));
}
export const changeTogglee = (currentIndex, songList) => (dispatch, getState) => {
    const list = getState().player.toggleList;
    const newList = list.map((item, index) => {
        if(index === currentIndex) {
            // if(item) return item = false;
            return item = !item;
        } else {
            return item = false;
        }
    })
    dispatch(setToggleList(newList));
    if(songList){
        dispatch(setCurrentIndex({currentIndex : currentIndex, currentPlayer : songList }));
    }
}
export const setPlay = (list) => (dispatch) => {
    dispatch(setCurrentPlayer(list));
}
export const getCurrentPlayList = (listName) => async(dispatch) => {
    try {
        const response = await axios.get(`${BaseURL}/list/${listName}`);
        const songs = response.data.playlist;
        dispatch(setSongListInLocal(songs));
    }
    catch (err) {
        throw new Error(err);
    }
}
export default slice.reducer;