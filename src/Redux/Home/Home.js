import axios from "axios";
import { BaseURL } from "../../constants";

const { createSlice } = require("@reduxjs/toolkit");

const homeSlice = createSlice({
    name  : "home",
    initialState : {
        top : [],
        playlist : [],
        loading : true,
    },
    reducers : {
        setLoading : (state, { payload }) => {
            // if(state.loading !== payload) 
            state.loading = payload;
        },
        setTop : (state, { payload }) => {
            state.top = payload;
            state.loading = false;
        },
        setPlaylist : (state, { payload }) => {
            state.playlist = payload;
            state.loading = false;
        },
    }
})

export const { setLoading, setPlaylist, setTop } = homeSlice.actions;

export const getTopList = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get(`${BaseURL}/api/category/all`);
        dispatch(setTop(response.data));
    }
    catch (err) {

    }
}

export const getPlaylistHome = () => async (dispatch) => {
    try {
        setLoading(true);
        const response = await axios.get(`${BaseURL}/list`);
        dispatch(setPlaylist(response.data));
    }
    catch (err) {

    }
}
export default homeSlice.reducer;