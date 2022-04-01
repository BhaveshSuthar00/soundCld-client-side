export const HistoryTracks = () => {
  const data = JSON.parse(localStorage.getItem("click")) || [];

  const newData = [];

  for (let i = 0; i < 5; i++) {
    newData.push(data[0][i]);
  }

  console.log(newData);

  return (
    <>
      Listening history
      <hr />
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
              <hr />
            </>
          );
        })}
      </div>{" "}
      <hr />
    </>
  );
};
