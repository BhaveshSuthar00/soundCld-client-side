import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userName = JSON.parse(localStorage.getItem('userName')) || '';
const userdd = JSON.parse(localStorage.getItem('user')) || {};

const slice = createSlice({
    name: "Login",
    initialState: {
        user : userdd || {},
        loggedIn : !userName === '' ? true : false,
        loggedOut : userName === '' ? true : false    
    },
    reducers:{
        removeUser : (state, { payload }) => {
            state.loggedOut = true;
            state.loggedIn = false;
            state.user = {}
        }, 
        addLogin : (state, { payload }) => {
            console.log('inside the reducer addLogin', payload)
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

export const apiCallLogin = (formdata) => {
    return async (dispatch)=>{
        try {
            let req =  await axios.post('https://soundcloud-serverside.herokuapp.com/user/login/singleuser',  {email : formdata.email, password : formdata.password})
            localStorage.setItem('user', JSON.stringify(req.data));
            localStorage.setItem('userName', JSON.stringify(req.data.userName));
            dispatch(addLogin(req.data));
            console.log(req.data);
            return true
        } catch (err) {
            console.log(err)
            return 'err';
        }
    }
}
export const apiCallLogout = () => {
    return  (dispatch)=>{
        try {
            window.localStorage.removeItem('userName');
            window.localStorage.removeItem('user');
            dispatch(removeUser())
        }
        catch(err) {
            console.log(err);
        }
    }
}

export default slice.reducer