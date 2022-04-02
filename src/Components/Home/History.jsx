import { useEffect,useState, useContext } from "react";
import { ChangeSong } from "../../Contexts/Status";
export const HistoryTracks = () => {
  const [data, setData] = useState([])
  const {history,statusChange, handleStatus2 ,handleHistory} = useContext(ChangeSong);
  let History = JSON.parse(localStorage.getItem("history")) || [];
  useEffect(()=>{
    handleHistory();
    console.log('here')
    setData(History);
  },[statusChange])
  if(data.length <= 0){
    return <></>
  }
  return (
    <>
      Listening history
      <div>
        {data.map((el, index) => {
          return (
              <div key={index} className="history-div">
                <img src={el.cover} alt="" />
                <div>
                  <p>{el.name}</p>
                  <p>singer: {el.singer}</p>
                </div>
              </div>
          );
        })}
      </div>{" "}
    </>
  );
};
