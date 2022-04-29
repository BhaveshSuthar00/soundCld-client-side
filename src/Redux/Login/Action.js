import axios from "axios";
const REMOVE = 'REMOVE';
const removeUser = ()=> ({type : REMOVE});
const ADDLOGIN = 'ADDLOGIN';
const addLogin = (data) => ({type : ADDLOGIN, payload : data});
const apiCallLogin = (formdata) => {
    return async (dispatch)=>{
        try {
            let req =  await axios.post('https://soundcloud-serverside.herokuapp.com/user/login/singleuser',  {email : formdata.email, password : formdata.password})
            dispatch(addLogin(req.data));
            localStorage.setItem('user', JSON.stringify(req.data));
            localStorage.setItem('userName', JSON.stringify(req.data.userName));
            return 'success'
        } catch (err) {
            return 'err';
        }
    }
}
const apiCallLogout = () => {
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
export {
    ADDLOGIN, addLogin, apiCallLogin, REMOVE, removeUser, apiCallLogout
}