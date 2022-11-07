import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'history',
    initialState : {
        history : JSON.parse(localStorage.getItem('historyNew')) || [],
    },
    reducers : {
        updateHistory : (state, { payload }) => {
            console.log(payload, 'payload is this now')
            state.history = payload;
        }
    }
})
export const {
    updateHistory
} = slice.actions;
export const addTOHistory = (song) => async (dispatch, getState) => {
    const { history } = getState().history;
    let newList = history.filter(history => history._id !== song._id);
    newList.push(song);
    newList = newList.reverse();
    dispatch(updateHistory(newList));
    localStorage.setItem('historyNew', JSON.stringify(newList));
}

export default slice.reducer;