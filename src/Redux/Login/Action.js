import axios from "axios";
const REMOVE = 'REMOVE';
const removeUser = ()=> ({type : REMOVE});
const ADDLOGIN = 'ADDLOGIN';
const addLogin = (data) => ({type : ADDLOGIN, payload : data});
const apiCallLogin = (formdata) => {
    return async (dispatch)=>{
        try {
            let req =  await axios.post('https://soundcloud-serverside.herokuapp.com/user/login/singleuser',  {email : formdata.email, password : formdata.password})
            dispatch(addLogin(req.data))
            let obj = {
                userName : req.data.userName
            }
            localStorage.setItem('userName', JSON.stringify(obj))
        } catch (err) {

        }
    }
}
export {
    ADDLOGIN, addLogin, apiCallLogin, REMOVE, removeUser
}