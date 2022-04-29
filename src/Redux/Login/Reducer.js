import {ADDLOGIN, REMOVE} from './Action'
const userName = JSON.parse(localStorage.getItem('userName')) || '';
const userdd = JSON.parse(localStorage.getItem('user')) || {};
const initialState = {
    user : userdd ||{},
    loggedIn : !userName === '' ? true : false,
    loggedOut : userName === '' ? true : false,
}
export const loginReducer = (store = initialState, {type , payload}) => {
    switch (type) {
        case ADDLOGIN :
            return {...store, user : payload, loggedIn : true, loggedOut : false}
        case REMOVE : {
            return {...store, user : {}, loggedIn : false, loggedOut : true}
        }
        default:
            return store;
    }
}