export const HistoryTracks = () => {
  const data = JSON.parse(localStorage.getItem("historyData")) || [];

  return (
    <>
      Listening history
      <div>
        {[].map((el, index) => {
          return (
            <>
              <div key={index}>
                <img src={el} alt="" />
                <p>{el}</p>
                <p>{el}</p>
              </div>
            </>
          );
        })}
      </div>{" "}
      <hr />
    </>
  );
};
