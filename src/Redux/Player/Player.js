import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "player",
    initialState : {
        currentPlayer : JSON.parse(localStorage.getItem('click')) || [],
        visible : false,
    },
    reducers : {
        setCurrentPlayer : (state, action) => {
            state.currentPlayer = action.payload;
        },
        setVisible : (state , action) => {
            state.visible = action.payload;
        }
    },
})

export const { setCurrentPlayer, setVisible } = slice.actions;
export const setCurrentPlayerWithLocal = (song) => async(dispatch) => {
    localStorage.setItem('click' , JSON.stringify(song));
    dispatch(setCurrentPlayer(song));
}
export default slice.reducer;