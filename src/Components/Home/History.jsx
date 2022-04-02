import { useEffect,useState, useContext } from "react";
import { ChangeSong } from "../../Contexts/Status";
export const HistoryTracks = () => {
  const [newData, setNewData] = useState([]);
  const {history, handleStatus2 ,handleHistory} = useContext(ChangeSong);
  // const data = JSON.parse(localStorage.getItem("click")) || [];  
  let History = JSON.parse(localStorage.getItem("history")) || [];
  useEffect(()=>{
    setNewData(History);
    handleHistory();
    handleStatus2();
  },[])
  
  if(newData.length === 0){
    return <></>
  }
  return (
    <>
      Listening history
      <div>
        {newData.map((el, index) => {
          return (
            <>
              <div key={index} className="history-div">
                <img src={el.cover} alt="" />
                <div>
                  <p>{el.name}</p>
                  <p>singer: {el.singer}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>{" "}
    </>
  );
};
