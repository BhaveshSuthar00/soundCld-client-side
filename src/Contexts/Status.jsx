import { createContext, useState } from "react";
export const ChangeSong  = createContext();
export const RenderingStatus  = ({children}) => {
    const [statusChange, setStatus2] = useState(false);
    const handleStatus2 = () => {
        setStatus2(!statusChange)
    }
    return (
    <>
        <ChangeSong.Provider value={{handleStatus2, statusChange}}>
            {children}
            </ChangeSong.Provider>
    </> 
    )
};