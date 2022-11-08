import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'history',
    initialState : {
        history : JSON.parse(localStorage.getItem('historyNew')) || [],
    },
    reducers : {
        updateHistory : (state, action) => {
            state.history = action.payload;
        },
        removeHistory : (state, action) => {
            localStorage.removeItem('historyNew');
            state.history = [];
        }
    }
})
export const {
    updateHistory,
    removeHistory
} = slice.actions;
export const addTOHistory = (song) => (dispatch, getState) => {
    const { history } = getState().history;
    let newList = history.filter(history => history._id !== song._id);
    newList.push(song);
    newList = newList.reverse();
    localStorage.setItem('historyNew', JSON.stringify(newList));
    dispatch(updateHistory(newList));
}

export default slice.reducer;