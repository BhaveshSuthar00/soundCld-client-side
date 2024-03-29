import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { BaseURL } from "../../constants";
import { removeHistory } from "../History/History";
import { getAllLikedSongs, resetLikedSongs } from "../Liked/LikedSong";
import { resetPlayer } from "../Player/Player";
const cookies = new Cookies();
const userId = cookies.get('soundCloud');
const slice = createSlice({
    name: "Login",
    initialState: {
        user : userId || {},
        loggedIn : userId && userId.userName !== '' ? true : false,
        loggedOut : userId && userId.userName !== '' ? false : true    
    },
    reducers:{
        removeUser : (state, { payload }) => {
            state.loggedOut = true;
            state.loggedIn = false;
            state.user = {}
            cookies.remove('soundCloud', {path : '/'})
        }, 
        addLogin : (state, { payload }) => {
            state.user = payload;
            state.loggedIn = true;
            state.loggedOut = false;
        }
    }
})
export const {
    removeUser,
    addLogin
} = slice.actions

export const apiCallLogin = (formdata) => async (dispatch)=>{
    try {
        let req =  await axios.post(`${BaseURL}/user/login/singleuser`,  {email : formdata.email, password : formdata.password})
        cookies.set('soundCloud', req.data, { path : '/', secure : true})
        dispatch(addLogin(req.data));
        dispatch(getAllLikedSongs(req.data));
    } catch (err) {
        throw new Error(err);
    }    
}
export const apiCallLogout = () => {
    return  (dispatch)=>{
        try {
            window.localStorage.removeItem('userName');
            window.localStorage.removeItem('user');
            dispatch(removeUser());
            dispatch(removeHistory());
            dispatch(resetLikedSongs());
            dispatch(resetPlayer());
        }
        catch(err) {
            console.log(err);
        }
    }
}

export default slice.reducer