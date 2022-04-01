export const HistoryTracks = () => {
  const data = JSON.parse(localStorage.getItem("click")) || [];

  const data1 = data[0];
  const newData = [];

  try {
    for (let i = 0; i < 5; i++) {
      newData.push(data1[i]);
    }
  } catch (er) {
    console.log(er);
  }

  // console.log(data);

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
