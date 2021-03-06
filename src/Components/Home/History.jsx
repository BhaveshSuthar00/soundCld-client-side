import { useEffect, useState, useContext } from "react";
import { ChangeSong } from "../../Contexts/Status";
export const HistoryTracks = () => {
  const [data, setData] = useState([])
  const { statusChange, handleStatus2, handleHistory } = useContext(ChangeSong);
  let History = JSON.parse(localStorage.getItem("history")) || [];

  useEffect(() => {
    handleHistory();
    setData(History);
  }, [statusChange])

  if (data.length <= 0) {
    return <></>
  }

  const handleClickHistory = (current) => {
    let localSt = JSON.parse(localStorage.getItem('click')) || [];
    let newArray = data.filter((e) => {
      if (e._id === current) {
        return e;
      }
      
    })
    console.log(newArray)
    localSt = newArray;
    localStorage.setItem('click', JSON.stringify([localSt]));
    handleStatus2();
  }

  return (
    <>
      <div style={{ borderBottom: '1px solid black', padding: '5% 0' }}>Listening history</div>
      <div>
        {Array.isArray(data) && data.map((el, index) => {
          if (el === null) {
            return
          }
          return (
            <div key={index} onClick={() => { handleClickHistory(el._id) }} className="history-div" style={{ width: '100%', height: '100%', borderBottom: '1px solid black', padding: '3% 0' }}>
              <img src={el.cover} alt="" width="20%" height="100" />
              <div style={{ width: '70%', textAlign: 'left', height: '100%' }}>
                <p style={{ height: '50%', overflow: 'hidden' }}>{el.name}</p>
                <p>singer: {el.singer}</p>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </>
  );
};
