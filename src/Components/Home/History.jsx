// import { useState } from "react";

export const HistoryTracks = () => {
  const data = JSON.parse(localStorage.getItem("click")) || [];
  // const [boolean, setBoolean] = useState(false);

  const data1 = data[0];
  const newData = [];

  try {
    for (let i = 0; i < 5; i++) {
      newData.push(data1[i]);
    }
  } catch (er) {
    console.log(er);
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
