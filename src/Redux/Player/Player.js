import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "player",
    initialState : {
        currentPlayer : JSON.parse(localStorage.getItem('click')) || [],
        visible : false,
        songList : [],
    },
    reducers : {
        setCurrentPlayer : (state, action) => {
            state.currentPlayer = action.payload;
            if(action.payload.length > 1){
                state.songList = action.payload;
            }
        },
        setVisible : (state , action) => {
            state.visible = action.payload;
        },
        removeSongs : (state, action) => {
            localStorage.removeItem('click');
            state.currentPlayer = [];
        }

    },
})

export const { setCurrentPlayer, setVisible, removeSongs } = slice.actions;
export const setCurrentPlayerWithLocal = (song) => async(dispatch) => {
    localStorage.setItem('click' , JSON.stringify(song));
    dispatch(setCurrentPlayer(song));
}
export default slice.reducer;