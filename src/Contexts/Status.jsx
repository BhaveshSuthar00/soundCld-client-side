import { createContext, useState } from "react";
export const ChangeSong  = createContext();
export const RenderingStatus  = ({children}) => {
    const [statusChange, setStatus2] = useState(false);
    const handleStatus2 = () => {
        setStatus2(!statusChange)
    }
    const [isLogged, setLog] = useState(false);
    const handleLogin =(val) =>{
        let login = JSON.parse(localStorage.getItem('login')) || [];
            login[0] = val;
        localStorage.setItem('login', JSON.stringify(login));
        setLog(!isLogged)
    }
    const [userName , setUserName ] = useState(null);
    const handleUserName = () => {
        let userName =  JSON.parse(localStorage.getItem('userName')) || [];
        if(userName.length > 0) {
            setUserName(userName[0])
        } else {
            setUserName(null)
        }
    }
    const removeUserName = () =>{
        let localNane = JSON.parse(localStorage.getItem('userName')) || [];
        localNane.pop();
        localStorage.setItem('userName', JSON.stringify(localNane))
        setUserName(null)
    }
    return (
    <>
        <ChangeSong.Provider value={{handleStatus2, statusChange, handleLogin, isLogged, userName,removeUserName, handleUserName}}>
            {children}
            </ChangeSong.Provider>
    </> 
    )
};