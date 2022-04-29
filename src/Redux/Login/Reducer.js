import {ADDLOGIN, REMOVE} from './Action'
const userName = JSON.parse(localStorage.getItem('userName')) || {}
const initialState = {
    user : userName ||{},
    loggedIn : userName.userName ? true : false,
    loggedOut : !userName.userName ? true : false,
}
export const loginReducer = (store = initialState, {type , payload}) => {
    switch (type) {
        case ADDLOGIN :
            return {...store, user : payload, loggedIn : true, loggedOut : false}
        case REMOVE : {
            window.localStorage.removeItem('userName');
            return {...store, user : {}, loggedIn : false, loggedOut : true}
        }
        default:
            return store;
    }
}